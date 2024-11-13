import { weatherAPIKey, weatherGeoApiUrl } from "../../settings";

export class GetLocation {
    constructor(cityName){
        this.apiKey = weatherAPIKey;
        this.apiGeoUrl = weatherGeoApiUrl;
        this.cityName = cityName.trim();
        this.values
    }

    get apiResult(){
        return console.log(this.values);
    }
    
    async callGeoApi(){
        const requestUrl = `${this.apiGeoUrl}q=${this.cityName}&appid=${this.apiKey}`
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