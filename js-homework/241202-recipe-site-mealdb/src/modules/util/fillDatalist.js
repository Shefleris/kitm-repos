import optionTemplate from "../../components/search/optionTemplate";
import renderComponent from "../rendering/renderComponent";
import GetMealDb from "../services/GetMealDb";
import StorageApi from "../services/StorageApi";

async function fillList (){
    let acronyms = {
        category:'c',
        ingredient:'i',
        area:'a',
    }
    
    for (const [key, value] of Object.entries(acronyms)){
        const list = await new StorageApi(key);
        let response = await new GetMealDb('list',undefined, value).getRequest();
        let data;

        if (await list.checkStorageForKey()){
            data = await list.getStorage()
        } else {
            data = await response.meals;
            list.postToStorage(await data)
        }
        switch (value){
            case 'i':
                await data.forEach(element => {
                    renderComponent(`#list-${key}`, optionTemplate(element.strIngredient))
                })  
                break;
            case 'a':
                await data.forEach(element => {
                    renderComponent(`#list-${key}`, optionTemplate(element.strArea))
                })
            case 'c':
                await data.forEach(element => {
                    renderComponent(`#list-${key}`, optionTemplate(element.strCategory))
                })  
                break;
            }
        
    }
}

export default fillList;
