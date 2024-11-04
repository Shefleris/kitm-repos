import { inventory } from "./inventory_data.js";
export {filterProductBy, checkIfNew, translateData, sortBy, findMinMax, getFlatInventory, calcBookInvValue, calcCategoryValue, calcOverallInvValue};

function getFlatInventory(){
    let flatArray = [];
    for (let categoryIt in inventory){
        for (let bookIt in inventory[categoryIt].books){
            let tempObject = {};
            Object.assign(tempObject, inventory[categoryIt].books[bookIt]); 
            Object.assign(tempObject, inventory[categoryIt]);
            delete tempObject.books;
            flatArray.push(tempObject);
        };
    };
    return flatArray;
}

function filterProductBy (formDataInput, workArray = inventory, flat=false) {
    let filteredData
    switch (flat){
        case true:
            filteredData = workArray;
            for (let [key, value] of Object.entries(formDataInput)){
                if (formDataInput[key] === "" ){continue
                } else if (key==="pages"){filteredData.filter(dataElement => {return dataElement[key]<= value})
                } else {filteredData = filteredData.filter((dataElement) => {return dataElement[key] === value})};
            }
            return filteredData
        case false:
            filteredData = workArray
                .filter((firstFilt) => {
                    return (firstFilt.category == formDataInput.category || formDataInput.category == "")
                })
                .map((elementMap) => ({
                    ...elementMap,
                    books: elementMap.books.filter((secondFilt)=>{
                        return (secondFilt.title.toLowerCase() == formDataInput.title.toLowerCase() || formDataInput.title == "") 
                        && (secondFilt.pages <= formDataInput.pages || formDataInput.pages == "")
                    })
                 }))
                 .filter((thirdFilt)=>{return thirdFilt.books.length !== 0})
                 return filteredData
    };
};

function sortBy(columnDirection, workArray=inventory){
    let words = columnDirection.split('_');
    let sortDirection = words[1];
    let columnToSort = words[0];
    let sorted = workArray.map((sectionIt)=>({
        ...sectionIt,
        books: sectionIt.books.sort((a,b)=>{
            switch (sortDirection){
                case "asc":
                    if (a[columnToSort] < b[columnToSort]){return -1}
                    else if (a[columnToSort] > b[columnToSort]){return 1}
                    else {return 0}     
                case "desc":
                    if (a[columnToSort] > b[columnToSort]){return -1}
                    else if (a[columnToSort] < b[columnToSort]){return 1}
                    else {return 0}
            }    
    })}))
    return sorted;
}

function findMinMax(minMax, workArray = getFlatInventory()){
    const pricesFound = workArray.map(element => element.price);
    switch (minMax){
        case "min":
            return Math.min(...pricesFound);
        case "max":
            return Math.max(...pricesFound);
    }
};

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
        case 'pages': return 'Puslapiai';
        case 'quantity': return 'Kiekis';
        case 'price': return 'Kaina';
        case 'category': return 'Kategorija';
        case 'Math':return 'Matematika';
        case 'Information technologies': return 'Informacinės technologijos';
        case 'Physics': return 'Fizika';
        case 'History': return 'Istorija';
        case 'Economics': return 'Ekonomika';
        default: return objectKey;
    }
}

function checkIfNew(publishing_year){
    const date = new Date();
    return date.getFullYear() == publishing_year ? ' # New Book' : '';
}