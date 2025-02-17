import { calcCategoryValue, calcOverallInvValue, translateData, checkIfNew} from "./data_manipulation.js";
import { inventory } from "./inventory_data.js";
export { showInventoryValue, checkDomElement, domListBook, domUnlistBooks};

function domListBook(workArray, flat=false, sectionName=undefined){
    if (sectionName === undefined){sectionName = 'section__category'};

    switch (flat){
        case true:
            const createSection = document.createElement('section');
            const createDiv = document.createElement('div');
            workArray.forEach(object => {
                const createList = document.createElement('ul')
                for (const [key, value] of Object.entries(object)) {
                    const createListItem = document.createElement('li');
                    key === 'publishing_year' ? createListItem.textContent = translateData(key)+': '+ value + checkIfNew(value)
                        : key === 'price' ? createListItem.textContent = translateData(key)+': '+value+" €"
                        : createListItem.textContent = translateData(key)+': '+translateData(value);
                    createList.appendChild(createListItem);
                };
                createDiv.appendChild(createList)
                createSection.className = sectionName;
                createSection.appendChild(createDiv);
            });
            document.querySelector('main').prepend(createSection);
            break
        case false:   
            workArray.forEach(categorySection=>{
                const createSection = document.createElement('section');
                const createDiv = document.createElement('div');
                const createSectionHeader = document.createElement('h2');
                createSectionHeader.textContent= translateData(categorySection.category)
                createSection.className = sectionName;
                createSection.appendChild(createSectionHeader);
                categorySection.books.forEach(bookCard=>{
                    const createList = document.createElement('ul')
                    for (const [key, value] of Object.entries(bookCard)) {
                        const createListItem = document.createElement('li');
                        key === 'publishing_year' ? createListItem.textContent = translateData(key)+': '+ value + checkIfNew(value)
                            : key === 'price' ? createListItem.textContent = translateData(key)+': '+value+" €"
                            : createListItem.textContent = translateData(key)+': '+translateData(value);
                        createList.appendChild(createListItem);
                    };
                    createDiv.appendChild(createList);
                    createSection.appendChild(createDiv);
                })
                document.querySelector('main').appendChild(createSection)
            })    
            break
    }
};

function domUnlistBooks(sectionName){
    const selectCategory = document.querySelectorAll(sectionName);
    selectCategory.forEach(element => element.remove());
};

function checkDomElement(elementQuery){
    let element = document.querySelector(elementQuery);
    return typeof(element) != 'undefined' && element != null ? true : false;
};

function showInventoryValue(workArray=inventory){
    const createSection = document.createElement('section');
    const createTable = document.createElement('table');
    const createTHead = document.createElement('thead');
    const createTBody = document.createElement('tbody');
    const createTFoot = document.createElement('tfoot');
  
    createSection.className = 'section__inventoryValue';

    for (let i = 0; i < 3; i++){
        const createRow = document.createElement('tr');
        switch (i){
            case 0:
                const createColumn1 = document.createElement('th');
                const createColumn2 = document.createElement('th');
            
                createColumn1.textContent = 'Kategorijos pavadinimas';
                createColumn2.textContent = 'Vertė'
                
                createRow.append(createColumn1,createColumn2);
                createTHead.appendChild(createRow);
                break

            case 1:
                workArray.forEach((element, index )=>{
                    const createCell1 = document.createElement('td');
                    const createCell2 = document.createElement('td');
                    const createRow = document.createElement('tr');
                    
                    createCell1.textContent = translateData(element.category)+' '
                    createCell2.textContent = calcCategoryValue(index)+' €'
              
                    createRow.append(createCell1, createCell2);
                    createTBody.appendChild(createRow);
                })
                break

            case 2:
                const createCell1 = document.createElement('td');
                const createCell2 = document.createElement('td');

                createCell1.textContent = 'Suma:';
                createCell2.textContent = calcOverallInvValue() + '€'

                createRow.append(createCell1,createCell2)
                createTFoot.appendChild(createRow);
                break
        }
    }

    createTable.appendChild(createTHead);
    createTable.appendChild(createTBody);
    createTable.appendChild(createTFoot)
    createSection.appendChild(createTable);
    document.querySelector('main').prepend(createSection);
};
