export class ProcessTempData{
    constructor(temperature, tempUnit='C'){
        this.temperature = temperature
        this.tempUnit = tempUnit
    }


    tempConverter(prefferedUnit){
        if (this.unit != prefferedUnit){
            switch (prefferedUnit){
                case 'F':
                    this.temperature = (this.temperature*9/5)+32;
                    this.tempUnit = 'C';
                    return this;
                case 'C':
                    this.temperature = (this.temperature-32)*5/9
                    this.tempUnit = 'F'
                    return this
            }
        }
    }

    // humanReadable(timeStampEpoch){
    //     let hours = timeStampEpoch.getHours();
    //     let minutes = timeStampEpoch.getMinutes();
    //     let hours = timeStampEpoch.getHours()
    //     let hours = timeStampEpoch.getHours()
    // }

}