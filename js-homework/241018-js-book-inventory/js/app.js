import { filterProductBy, findMinMax, getFlatInventory, sortBy } from "./data_manipulation.js";
import { inventory } from "./inventory_data.js";
import { checkDomElement, domListBook, domUnlistBooks, showInventoryValue } from "./dom_manipulation.js";

domListBook(inventory);
let currentlyDisplayedItems = inventory;

document.querySelector('form button').addEventListener('click', (event)=>{
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(document.querySelector('form')).entries());
    const filteredData = filterProductBy(formData); 
    domUnlistBooks("main>section")  
    domListBook(filteredData)
    currentlyDisplayedItems = filteredData;
});

document.querySelector('.nav__buttonsValue').addEventListener('click', (event)=>{
    event.preventDefault();
    switch (event.target.id){
        case 'button__minPrice':
        case 'button__maxPrice':
            const priceFound = findMinMax(event.target.value);
            const booksFound = filterProductBy({"price": priceFound}, getFlatInventory(), true);
            domUnlistBooks("main>section")  
            domListBook(booksFound, true);
            break
        case 'button__calcInvValue':
            if (checkDomElement('.section__inventoryValue') === true){
                document.querySelector('.section__inventoryValue').remove();
            } else {
                showInventoryValue(inventory);
            }
            break;
    };
});

document.querySelector('#form__select__sort').addEventListener('change',(event)=>{
    let eventValue = event.target.value;
    let sortedList = sortBy(eventValue, currentlyDisplayedItems);
    console.log(sortedList)
    domUnlistBooks("main>section");  
    domListBook(sortedList);
})