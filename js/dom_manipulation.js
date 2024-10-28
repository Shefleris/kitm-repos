import { calcCategoryValue, calcOverallInvValue, translateData, checkIfNew} from "./data_manipulation.js";
import { inventory } from "./inventory_data.js";
export { showInventoryValue, checkDomElement, domListBook, domUnlistBooks};

function domListBook(multitude='categorized', workArray=inventory, sectionName=undefined){
    switch (multitude){
        case 'flat':
            if (sectionName === undefined){sectionName = 'flat_library'}
            const createSection = document.createElement('section');
            workArray.forEach(object => {
                const createList = document.createElement('ul')
                for (const [key, value] of Object.entries(object)) {
                    const createListItem = document.createElement('li');
                    key === 'publishing_year' ? createListItem.textContent = translateData(key)+': '+ value + checkIfNew(value)
                        : key === 'price' ? createListItem.textContent = translateData(key)+': '+value+" €"
                        : createListItem.textContent = translateData(key)+': '+value;
                    createList.appendChild(createListItem);
                };
                createSection.className = sectionName;
                createSection.appendChild(createList);
            });
            document.querySelector('main').prepend(createSection);
            break
        case 'categorized':
            if (sectionName === undefined){sectionName = 'main_library'}    
            for (const categoryID in workArray) {
                const createSection = document.createElement('section');
                const createSectionHeader = document.createElement('h2');
                createSectionHeader.textContent= workArray[categoryID].category
                createSection.className = sectionName;
                createSection.appendChild(createSectionHeader);
                workArray[categoryID].books.forEach(bookObject=>{
                    const createList = document.createElement('ul')
                    for (const [key, value] of Object.entries(bookObject)) {
                        const createListItem = document.createElement('li');
                        key === 'publishing_year' ? createListItem.textContent = translateData(key)+': '+ value + checkIfNew(value)
                            : key === 'price' ? createListItem.textContent = translateData(key)+': '+value+" €"
                            : createListItem.textContent = translateData(key)+': '+value;
                        createList.appendChild(createListItem);
                    };
                    createSection.appendChild(createList);
                });
                document.querySelector('main').appendChild(createSection);
            };
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

function showInventoryValue(workArray){
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
                createRow.append(
                    document.createElement('th').textContent = 'Kategorijos pavadinimas',
                    document.createElement('th').textContent = 'Vertė'
                );
                createTHead.appendChild(createRow);
                break;
            case 1:
                for (let element in workArray){
                    const createRow = document.createElement('tr');
                    createRow.append(
                        document.createElement('td').textContent = workArray[element].category+' ', 
                        document.createElement('td').textContent = calcCategoryValue(element)+' €'
                    );
                    createTBody.appendChild(createRow);
                };
                break;
            case 2:
                createRow.append(
                    document.createElement('td').textContent = 'Suma:',
                    document.createElement('td').textContent = calcOverallInvValue() + '€'
                );
                createTFoot.appendChild(createRow);
                break ;
        }  
    }
    createTable.appendChild(createTHead);
    createTable.appendChild(createTBody);
    createTable.appendChild(createTFoot)
    createSection.appendChild(createTable);
    document.querySelector('main').appendChild(createSection);
};
