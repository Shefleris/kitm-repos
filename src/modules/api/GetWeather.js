import { weatherAPIUrl, weatherAPIKey} from "../../settings";

export class GetWeather{
    constructor(cityName, units='metric'){
        this.apiKey = weatherAPIKey;
        this.apiUrl = weatherAPIUrl;
        this.cityName = cityName;
        this.unit = units;
        this.values;
    }

    get thisInstance(){
        return this
    }

    async getWeather(){
        const requestUrl = `${this.apiUrl}q=${this.cityName}&units=${this.unit}&appid=${this.apiKey}`
        const response = await fetch(requestUrl).then((Response)=>{
            if (!Response.ok){
                throw new Error('Api was not ok')
            }
            return Response.json()
        });
        this.values = response;
        console.log(this.values)
        return this;
    }
}