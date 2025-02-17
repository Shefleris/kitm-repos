import mealCardTemplate from "../../components/mealCard/mealCardTemplate";
import renderComponent from "../rendering/renderComponent";
import GetMealDb from "../services/GetMealDb";

async function displaySixRecipes(){
    let sixRecipes = [];
    let i = 0;

    while (i<6){
        let recipe = await new GetMealDb('random').getRequest();
        if (sixRecipes.includes(recipe.meals[0]) !== true){
            sixRecipes.push(recipe.meals[0])
            i++
        }
    }
    sixRecipes.forEach(meal => {
        let template = mealCardTemplate(meal.strMeal, meal.idMeal, meal.strMealThumb);
        renderComponent('.div__discover', template);
    });
}

export default displaySixRecipes;