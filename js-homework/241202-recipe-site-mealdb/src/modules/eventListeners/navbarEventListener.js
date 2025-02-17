import GetMealDb from "../services/GetMealDb";
import displayLandingPage from "../../pages/displayLandingPage";
import displayRecipePage from "../../pages/displayRecipePage";
import displaySearchPage from "../../pages/displaySearchPage";
import searchEvent from "../search/searchEvent";

async function navbarEventListener (){
    document.querySelector('.navbar-nav').addEventListener('click',async (event)=>{
        event.preventDefault()
        console.log(event)
        switch (event.target.value){
            case 'home':
                await displayLandingPage();
                break
            case 'random':
                let randomRequest = await new GetMealDb('random').getRequest()
                displayRecipePage(await randomRequest)
            break;
        }
    });
    document.querySelector('nav form').addEventListener('submit', async (event)=>{
        event.preventDefault();
        const searchField = document.querySelector('nav form input').value
        await displaySearchPage();
        if (searchField !== ''){
            await displaySearchPage();
            searchEvent('name', searchField)
        }
    })
};

export default navbarEventListener;