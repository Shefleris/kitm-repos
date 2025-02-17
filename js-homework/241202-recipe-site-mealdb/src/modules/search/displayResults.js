import mealCardTemplate from "../../components/mealCard/mealCardTemplate";
import renderComponent from "../../modules/rendering/renderComponent";
import cardEventListeners from "../eventListeners/cardEventListeners";
import unrenderComponents from "../rendering/unrenderComponents";
import displayResultsSection from "./displayResultsSection";

async function displayResults(response){
    const selectDiv = '.div_search_results'
    const selectSection = '.section_search_results'
    if (document.querySelector(selectDiv)!==null){
        unrenderComponents(selectDiv,true)
    }

    if (document.querySelector(selectSection)===null){
        displayResultsSection();
    }

    if (response!=null){
        if (document.querySelector(selectSection)){
            renderComponent(selectSection, undefined, 'div',{class:'div_search_results row row-cols-1 row-cols-md-3 row-cols-lg-6 gy-5'})
            cardEventListeners(selectDiv); 
        }  
        response.forEach(meal => {
            let template = mealCardTemplate(meal.strMeal, meal.idMeal, meal.strMealThumb);
            renderComponent(selectDiv, template);
        });
    } else {
        renderComponent(selectSection, undefined, 'div',{class:'div_search_results row gy-5'})
        renderComponent(selectDiv, "there are no search results", "h3")
        return
    }
}

export default displayResults;