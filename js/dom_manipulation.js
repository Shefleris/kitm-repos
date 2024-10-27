function unlistBooks(){
    const selectCategory = document.querySelectorAll('.main__library section');
    selectCategory.forEach(element => element.remove());
};

function showInventoryValue(workArray){
    const selectMain = document.querySelector('main');
    const createSection = document.createElement('section');
    const createTable = document.createElement('table');
    const createTHead = document.createElement('thead');
    const createTBody = document.createElement('tbody');
    const createRow = document.createElement('tr');
    const createHeader = document.createElement('th');
    
    createSection.className = 'section__inventoryValue';

    createHeader.textContent = 'Kategorijos pavadinimas';
    createRow.appendChild(createHeader);
    createHeader.textContent = 'Vertė';
    createRow.appendChild(createHeader);
    createTHead.appendChild(createRow);
    createTable.appendChild(createTHead);

    workArray.forEach(element => {
        createRow.
    });
};
