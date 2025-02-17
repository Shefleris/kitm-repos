import GetMealDb from "../services/GetMealDb";
import displayRecipePage from "../../pages/displayRecipePage";

async function cardEventListeners (cardsLocation){
    document.querySelector(cardsLocation).addEventListener('click',async (event)=>{
        event.preventDefault;
        if (event.target.name === 'lookup'){
            let apiMethod = event.target.name;
            let apiQuerry = event.target.value;
            let response = await new GetMealDb(apiMethod, apiQuerry).getRequest()
            displayRecipePage(await response)
        }
    })
}

export default cardEventListeners;