import { apiKey, apiUrl } from "../../settings";
import fetchService from "./fetchService";

class GetMealDb {
    constructor(requestMethod, queryTerm, requestLetter='s'){
        this.requestMethod = requestMethod;
        this.queryTerm = queryTerm;
        this.requestLetter=requestLetter;
        this.requestUrl;
    };
    
    async determineRequestUrl(){  
        let requestUrl = `${apiUrl}${apiKey}/`
        switch(this.requestMethod){
            case 'random':
            case 'categories':
                requestUrl += `${this.requestMethod}.php`;
                break;
            case 'lookup':
                requestUrl += `lookup.php?i=${this.queryTerm}`;
                break;
            case 'list':
                requestUrl += `list.php?${this.requestLetter}=list`;
                break;
            case 'search':
            case 'filter':
                requestUrl += `${this.requestMethod}.php?${this.requestLetter}=${this.queryTerm}`;
                break
            default:
                console.error('Unable to determine request url')
                return
        }
        this.requestUrl = requestUrl;
        return this
    };

    async getRequest(){
        await this.determineRequestUrl();
        const response = await fetchService(this.requestUrl);
        return response;
    }

}

export default GetMealDb;