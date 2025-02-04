const fs = require('fs');
const path = require('path');

/**
 * Add product to product data file
 *  @param {Array} products
 *  @param {Object} newProduct
 *  @param {string} filePath
 *  @returns {Promise<string>} 
 */
module.exports = (products, newProduct, filePath) => {
    return new Promise ((resolve, reject)=>{
        try {
            products.push(newProduct);
            const data = JSON.stringify(products, null, 2)
            fs.writeFile(filePath, data, (err)=>{
                if(err){
                    reject('Failed to write file')
                } else {
                    resolve('Product added')
                }
            })
        } catch (error) {
            rejects('Error proccessing product')
        }
    })
}