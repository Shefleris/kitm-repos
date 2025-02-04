const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 40 },
    { id: 4, name: 'Jeans', category: 'Clothing', price: 60 },
    { id: 5, name: 'Coffee Maker', category: 'Appliances', price: 150 },
    { id: 6, name: 'Blender', category: 'Appliances', price: 120 },
    { id: 7, name: 'TV', category: 'Electronics', price: 600 },
    { id: 8, name: 'Socks', category: 'Clothing', price: 10 },
    { id: 9, name: 'Microwave', category: 'Appliances', price: 180 },
    { id: 10, name: 'Smart Watch', category: 'Electronics', price: 250 }
  ];


function filterProductByCategory (filterValue) {
    return products.filter((element)=>element.category === filterValue)
}

function sortBy(productsToSort, categoryToSort, direction){
    let productsBeingSorted = productsToSort;

    switch (direction){
    case "Asc":
        return productsBeingSorted.sort((a,b)=>{
            if (a[categoryToSort] < b[categoryToSort]){return -1}
            else if (a[categoryToSort] > b[categoryToSort]){return 1}
            else {return 0}     
        });
    case "Desc":
        return productsBeingSorted.sort((a,b)=>{
            if (a[categoryToSort] > b[categoryToSort]){return -1}
            else if (a[categoryToSort] < b[categoryToSort]){return 1}
            else {return 0}     
        });
    }
}


function main (){
    let filteredProducts = filterProductByCategory("Appliances")
    console.log(sortBy(filteredProducts, "name", "Asc"));
}



main();
