import StorageApi from "../../modules/services/StorageApi";
import GetMealDb from "../services/GetMealDb";
import displayResults from "./displayResults";

async function searchEvent(searchBy, term){
    let requestMethod, requestLetter;

    let formData = {
        search_by: `${searchBy}`,
        querry_term: `${term}`
    };

    switch(searchBy){
        case 'name':
            requestMethod = 'search';
            requestLetter = 's';
            break;
        case 'id':
            requestMethod = 'lookup';
            requestLetter = 'i';
            break;
        case 'firstLetter':
            requestMethod = 'search';
            requestLetter = 'f';
            break;
        case 'category':
            requestMethod = 'filter';
            requestLetter = 'c'
            break;
        case 'area':
            requestMethod = 'filter';
            requestLetter = 'a';
            break;
        case 'ingredient':
            requestMethod = 'filter';
            requestLetter = 'i';
            break;
        default:
            console.error('Missing search by value')
    }
    
    const  searchResponse = await new GetMealDb(requestMethod, term, requestLetter).getRequest()
    await new StorageApi('currentSearch', false).postToStorage(await searchResponse.meals)
    await new StorageApi('searchHistory', true).postToStorage(formData)
    
    if (searchResponse===null){
        console.log('test')
        return
    } 
    await displayResults(await searchResponse.meals);
}

export default searchEvent;