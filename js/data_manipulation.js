import { inventory } from "./inventory_data.js";
export {translateData, filterProductBy, sortBy, findMinMax, getFlatInventory, calcBookInvValue, calcCategoryValue, calcOverallInvValue};

/**
 * @description - Is used to flaten the data inventory structure 
 * @returns - a flat array
 */
function getFlatInventory(){
    let flatArray = [];
    for (let categoryIt in inventory){
        for (let bookIt in inventory[categoryIt].books){
            let tempObject = {};
            Object.assign(tempObject, inventory[categoryIt].books[bookIt]); 
            Object.assign(tempObject, inventory[categoryIt]);
            delete tempObject.books
            flatArray.push(tempObject);
        }
    }
    return flatArray;
}

function checkIfFlatArray(workArray){
    
}

/** 
 * @param {String} filterColumn - is used to specify the column whose value will be compared.  
 * @param {String|Number} filterValue - is used to specify the value to be compared to.
*/
function filterProductBy (filterValue=undefined, filterColumn=undefined, workArray=getFlatInventory()) {    
    
}

/**
 * 
 * @param {String} direction - can be either asc or desc
 * @param {String} columnToSort 
 * @param {Array}[workArray=getFlatInventory]  
 * @returns - the array sorted by the chosen column and direction
 */
function sortBy(direction = "asc", columnToSort = "price", workArray = getFlatInventory()){
    let arrayToSort = workArray

    switch (direction){
        case "asc":
            return arrayToSort.sort((a,b)=>{
                if (a[collumnToSort] < b[collumnToSort]){return -1}
                else if (a[columnToSort] > b[columnToSort]){return 1}
                else {return 0}     
            });
        case "desc":
            return inventory[i].books.sort((a,b)=>{
                if (a[columnToSort] > b[columnToSort]){return -1}
                else if (a[columnToSort] < b[columnToSort]){return 1}
                else {return 0}     
            });
        
    };
};

/**
 * @param {String} minMax - specify what to look for: min or max
 * @param {Array}[workArray=getFlatInventory] - specify what array to work on
 * @returns the lowest or highest price found
 */
function findMinMax(minMax, workArray = getFlatInventory()){
    const pricesFound = workArray.map(element => element.price);
        
    switch (minMax){
        case "min":
            return Math.min(...pricesFound);
        case "max":
            return Math.max(...pricesFound);
    }
}

function calcBookInvValue(categoryID, bookID){
    let valuation = inventory[categoryID].books[bookID].quantity * inventory[categoryID].books[bookID].price;
    return valuation;
};

function calcCategoryValue(categoryID){
    let categoryValuation = 0;
    for (const bookID in inventory[categoryID].books){
        categoryValuation += calcBookInvValue(categoryID, bookID);
    };

    return Math.round(categoryValuation * 100)/100;
};

function calcOverallInvValue(){
    let inventoryTotalValuation = 0;
    for (const categoryID in inventory){
        inventoryTotalValuation += calcCategoryValue(categoryID)
    }
    return inventoryTotalValuation
};

function translateData(objectKey){
    switch (objectKey){
        case 'title': return 'Pavadinimas';
        case 'author': return 'Autorius';
        case 'publishing_year': return 'Leidimo metai';
        case 'ISBN': return 'ISBN';
        case 'pages': return 'Puslapiai';
        case 'quantity': return 'Kiekis';
        case 'price': return 'Kaina';
        case 'category': return 'Kategorija';
    }
}

function checkIfNew(publishing_year){
    const date = new Date();
    return date.getFullYear() == publishing_year ? ' # New Book' : '';
}