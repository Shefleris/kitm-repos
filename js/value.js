import { inventory } from "./inventory_data.js";
export { listAllInvBooks, calcBookInvValue, calcOverallInvValue, calcCategoryValue};

/**
 * @description - Is used to cosole.log all inventory books
 */
function listAllInvBooks(){
    for (const categoryID in inventory) {
        for (const bookID of inventory[categoryID].books){
           console.group("Book");
            for (const iteration in bookID ){
                if (iteration == "publishing_year" && bookID[iteration] == 2024){
                    console.log(iteration + ": "+ bookID[iteration] +" #New book")
                } else {
                    console.log(iteration + ": "+ bookID[iteration]);
                };
            }
            console.groupEnd();
        };
    };
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
    console.log(inventory[categoryID].category + " category is valued " + categoryValuation + "€");

    return categoryValuation;
};

function calcOverallInvValue(){
    let inventoryTotalValuation = 0;
    console.group("Valuation")
    for (const categoryID in inventory){
        inventoryTotalValuation += calcCategoryValue(categoryID)
    }

    console.log( "Inventory total value = " + inventoryTotalValuation + "€");
    console.groupEnd();
};
