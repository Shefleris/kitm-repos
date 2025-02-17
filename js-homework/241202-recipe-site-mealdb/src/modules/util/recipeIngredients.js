import renderComponent from "../rendering/renderComponent"

function recipeIngredients(response){
    for (let i=1; i<=20; i++){
        if (response[`strIngredient${i}`]){         
            let ingredientName = response[`strIngredient${i}`]
            let ingredientMeasure = response[`strMeasure${i}`]  
            const temp = `<li>${ingredientName}: ${ingredientMeasure}</li>`
            renderComponent('ul.ingredients', temp) 
        }
    }
}

export default recipeIngredients