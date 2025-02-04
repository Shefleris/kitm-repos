function filterProductByCategory (filterValue) {
    return products.filter((element)=>element.category === filterValue)
}

function sortBy(arrayToSort = inventory, collumnToSort, direction){
    let productsBeingSorted = arrayToSort;

    switch (direction){
    case "Asc":
        return productsBeingSorted.sort((a,b)=>{
            if (a[collumnToSort] < b[collumnToSort]){return -1}
            else if (a[collumnToSort] > b[collumnToSort]){return 1}
            else {return 0}     
        });
    case "Desc":
        return productsBeingSorted.sort((a,b)=>{
            if (a[collumnToSort] > b[collumnToSort]){return -1}
            else if (a[collumnToSort] < b[collumnToSort]){return 1}
            else {return 0}     
        });
    };
};