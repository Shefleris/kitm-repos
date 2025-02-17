/**
 * Read and parse a csv file
 * @param {string} filepath
 * @returns {Array}
 * */
module.exports = (filepath) =>{
    const fs = require('fs');
    const data = fs.readFileSync(`${__dirname}/${filepath}`, 'utf-8');
    
    let rows = data.split('\r\n');
    let collumnsData = rows[0].split(',');
    let rowsData = structuredClone(rows);
    let rowData = rowsData.map(row =>row.split(',')).slice(1).filter(row => collumnsData.length === row.length);
    let csvObject = rowData.map(row => {
        rowObj = {}
        row.forEach((item, index)=>{
            rowObj[collumnsData[index]]= item.replace(/"/g,``)
        })
        return rowObj;
    });
    return csvObject
}