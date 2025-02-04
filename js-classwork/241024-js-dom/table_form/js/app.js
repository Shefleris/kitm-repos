document.querySelector('.inputField button').addEventListener('click', (e)=>{
    e.preventDefault();
    columnNr = document.querySelector('#columnNr').value;
    rowNr = document.querySelector('#rowNr').value;
    addTable(columnNr, rowNr);
});

function addTable(columnNr, rowNr){
    const selectSection = document.querySelector('.tables');
    const createTable = document.createElement("table");    
    const createTHead = document.createElement("thead")
    const createTBody = document.createElement("tbody")
    const createRow = document.createElement("tr");

    for (let columnIt = 0; columnIt < columnNr; columnIt++){
        const createHeader = document.createElement("th");
        createHeader.textContent = `KITM ${columnIt}`
        createRow.appendChild(createHeader);
        createTHead.appendChild(createRow);
    };

    createTable.appendChild(createTHead);

    for (let rowIt = 0; rowIt < rowNr; rowIt++){
        const createRow = document.createElement("tr");
        
        for (let columnIt = 0; columnIt < columnNr; columnIt++){
            const createCell = document.createElement("td");
            createCell.textContent = `KITM ${rowIt}:${columnIt}`
            createRow.appendChild(createCell);
        };

        createTBody.appendChild(createRow);
    };

    createTable.appendChild(createTBody);
    selectSection.appendChild(createTable);
};