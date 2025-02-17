import discoverSixTemplate from "../components/discover/discoverSixTemplate";
import landingHeader from "../components/header/landingHeaderTemplate";
import landingHeaderListener from "../modules/eventListeners/landingHeaderListener";
import cardEventListeners from "../modules/eventListeners/cardEventListeners";
import renderComponent from "../modules/rendering/renderComponent";
import unrenderComponents from "../modules/rendering/unrenderComponents";
import displaySixRecipes from "../modules/ui/displaySixRecipes";

async function displayLandingPage(){
    await unrenderComponents('header');
    await unrenderComponents('main');
    await renderComponent('header', landingHeader());
    await renderComponent('main', discoverSixTemplate());
    await displaySixRecipes();
    await cardEventListeners('.div__discover');
    await landingHeaderListener();
}

export default displayLandingPage;
