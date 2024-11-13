import { weatherAPIUrl, weatherAPIKey} from "../../settings";

export class GetWeather{
    constructor(latitude, longtitude){
        this.apiKey = weatherAPIKey;
        this.apiUrl = weatherAPIUrl;
        this.latitude = latitude;
        this.longtitude = longtitude;
        this.values
    }

    get thisInstance(){
        return this
    }

    async getWeather(){
        const requestUrl = `${this.apiUrl}lat=${this.latitude}&lon=${this.longtitude}&appid=${this.apiKey}`
        const response = await fetch(requestUrl).then((Response)=>{
            if (!Response.ok){
                throw new Error('Api was not ok')
            }
            return Response.json()
        });
        this.values = response;
        return this.values;
    }
}