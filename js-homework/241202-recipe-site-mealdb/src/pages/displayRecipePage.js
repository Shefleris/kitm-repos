import renderComponent from "../modules/rendering/renderComponent";
import unrenderComponents from "../modules/rendering/unrenderComponents";
import recipeTemplate from "../components/recipe/recipeTemplate";
import recipeIngredients from "../modules/util/recipeIngredients";

function displayRecipePage (response){
    unrenderComponents('header')
    unrenderComponents('main')
    let path = response.meals[0]
    let template = recipeTemplate(path.strMeal,path.idMeal,path.strMealThumb,path.strInstructions);
    renderComponent('main', template)
    recipeIngredients(path)
}

export default displayRecipePage;