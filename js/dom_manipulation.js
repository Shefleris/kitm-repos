import { calcCategoryValue, calcOverallInvValue } from "./data_manipulation.js";
export { showInventoryValue };

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
