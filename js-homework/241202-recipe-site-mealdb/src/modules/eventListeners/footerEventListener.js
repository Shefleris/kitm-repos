import GetMealDb from "../services/GetMealDb"
import displayLandingPage from "../../pages/displayLandingPage"
import displayRecipePage from "../../pages/displayRecipePage"
import displaySearchPage from "../../pages/displaySearchPage"
import searchEvent from "../search/searchEvent"

function footerEventListener(){
    document.querySelector('footer').addEventListener('click', async (event)=>{
        event.preventDefault()
        switch(event.target.name){
            case 'router':
                switch (event.target.value){
                    case 'home':
                        await displayLandingPage();
                        break
                    case 'random':
                        let randomRequest = await new GetMealDb('random').getRequest()
                        displayRecipePage(await randomRequest)
                        break;
                    case 'discover':
                        displaySearchPage();
                        break;
                }
                break
            case 'filter':
                displaySearchPage()
                searchEvent('category',event.target.value)
                break
        }
    })
}

export default footerEventListener;