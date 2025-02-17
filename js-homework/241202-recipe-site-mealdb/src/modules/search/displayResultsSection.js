import renderComponent from "../../modules/rendering/renderComponent";
import StorageApi from "../../modules/services/StorageApi";
import GetMealDb from "../../modules/services/GetMealDb";
import searchResultTemplate from "../../components/search/searchResultTemplate";
import optionTemplate from "../../components/search/optionTemplate"

function displayResultsSection(){
    renderComponent('main', searchResultTemplate())
    const categoryList = ['a', 'c', 'i'];
    categoryList.forEach(async (optionType)=>{
        const list = await new StorageApi(optionType)
        const response = await new GetMealDb('list',undefined,optionType).getRequest();
        let data;

        switch (await list.checkStorageForKey()){
            case false: 
                await list.postToStorage(response.meals);
                data = await list.getStorage();
                break
            case true:
                data = await list.getStorage();
                break
            default:
                console.error(`Couldn't determine if list is in storage`);
                break
        }
        switch (optionType){
            case 'a':
                await data[0].forEach(async (dataValue)=>{
                    const optionTemp = optionTemplate(dataValue.strArea, dataValue.strArea);
                    renderComponent("#area", optionTemp);
                })
                break;
            case 'c':
                await data[0].forEach(async (dataValue)=>{
                    const optionTemp = optionTemplate(dataValue.strCategory, dataValue.strCategory);
                    renderComponent("#category", optionTemp);
                })
                break;
        }
    });
};

export default displayResultsSection;