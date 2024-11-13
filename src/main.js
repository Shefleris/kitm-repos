import { GetLocation } from './modules/api/GetGeoLocation';
import { GetWeather } from './modules/api/getWeather';
import { CreateUi } from './modules/ui/CreateForm';
import { ProcessTemp } from './modules/utils/TemperatureUtils';

const createForm = new CreateUi()

createForm.createForm()

document.querySelector('header form button').addEventListener('click',async (event)=>{
    event.preventDefault();
    const cityName = document.querySelector('#search').value
    const cityCoords = new GetLocation(cityName)
    
    const result = await cityCoords.callGeoApi();
    console.log(result)
    result.forEach(resultCity => {
        const cityTemp = new GetWeather(resultCity.lat, resultCity.lon)
        const resultTemp = cityTemp.getWeather()
        console.log(resultTemp)
    });
})