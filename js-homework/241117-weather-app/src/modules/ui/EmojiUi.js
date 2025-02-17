export class EmojiUi{
    constructor(cityWeather){
        this.cityWeather = cityWeather;
    }

    async createWeatherCard(){
        let createDiv = document.createElement('div');
        createDiv.class = 'card mb-3';
        createDiv.style = 'max-width: 540px;'
        createDiv.innerHTML = await this.templateCard();
        document.querySelector('main').appendChild(createDiv) 
    }

    async templateCard(){
        const emojiImgId = this.emojiPicker();
        console.log(emojiImgId)
        const template = `
            <div class="row g-0">
                <div class="col-md-4">
                    <span class='h3'>${this.cityWeather.main.temp}°C</span>
                    <img src="https://openweathermap.org/img/wn/${emojiImgId}@2x.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this.cityWeather.name}, ${this.cityWeather.sys.country}</h5>
                        <p class="card-text mb-0">Drėgnis: ${this.cityWeather.main.humidity} %</p>
                        <p class="card-text mb-0">Vėjo greitis: ${this.cityWeather.wind.speed} m/s</p>
                        <p class="card-text"><small class="text-body-secondary"></small></p>
                    </div>
                </div>
            </div>
        `
        return template;
    }

    emojiPicker(){
        let imgId
        switch(this.cityWeather.weather[0].id){      
            case 200:
            case 201:
            case 202:
            case 210:
            case 211:
            case 212:
            case 221:
            case 230:
            case 231:
            case 232:
                imgId = '11d';
                break
            case 300:
            case 301:
            case 302:
            case 310:
            case 311:
            case 312:
            case 313:
            case 314:
            case 321:
                imgId = '09d'
                break
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
                imgId = '10d'
                break
            case 511:
                imgId = '13d'
                break
            case 520:
            case 521:
            case 522:
            case 531:
                imgId = '09d'
                break
            case 600:
            case 601:
            case 602:
            case 611:
            case 612:
            case 613:
            case 615:
            case 616:
            case 620:
            case 621:
            case 622:
                imgId = '13d'
                break
            case 701:
            case 711:
            case 721:
            case 731:
            case 741:
            case 751:
            case 761:
            case 762:
            case 771:
            case 781:
                imgId = '50d'
                break
            case 800:
                imgId = '01d'
                break
            case 801:
                imgId = '02d'
                break
            case 802:
                imgId = '03d'
                break
            case 803:
            case 804:
                imgId = '04d'
                break
            default:
                console.log(`Couldn't find appropriate image for this weather id`)
                break
        }
        console.log(imgId)
        return imgId
    }
}