import { GetWeather } from './modules/api/GetWeather';
import { CreateUi } from './modules/ui/CreateForm';
import { EmojiUi } from './modules/ui/EmojiUi';
import { ProcessTemp } from './modules/utils/TemperatureUtils';

const createForm = new CreateUi()

createForm.createForm()

document.querySelector('header form button').addEventListener('click',async (event)=>{
    event.preventDefault();
    const cityName = document.querySelector('#search').value
    const cityTemp = new GetWeather(cityName)
    cityTemp.getWeather().then((result)=>{
        const weatherCard = new EmojiUi(result.values)
        weatherCard.createWeatherCard();
    })
})