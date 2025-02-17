import renderComponent from "../modules/rendering/renderComponent";
import unrenderComponents from "../modules/rendering/unrenderComponents";
import searchHeaderTemplate from "../components/search/searchHeaderTemplate"
import searchEventListener from "../modules/eventListeners/searchEventListener";
import searchInputOptionsListener from "../modules/search/searchOptions";
import fillList from "../modules/util/fillDatalist";

async function displaySearchPage(){
    await unrenderComponents('header');
    await unrenderComponents('main');
    let template = await searchHeaderTemplate();
    await renderComponent('header', template);
    await searchEventListener();
    await searchInputOptionsListener();
    await fillList();
}

export default displaySearchPage;