const students =[
    {
        id:1,
        firstName:"Jonas",
        lastName:"Jonaitis",
        email: "jonas.jonaitis@gmail.com",
        results:{
            programming:5,
            math:8,
            englis:9
        }
    },
    {
        id:2,
        firstName:"Petras",
        lastName:"Petraitis",
        email: "petras.petraitis@gmail.com",
        results:{
            programming:8,
            math:5,
            englis:7
        }
    },
    {
        id:3,
        firstName:"Vardenis",
        lastName:"Pavardenis",
        email: "vardemis.pavardenis@gmail.com",
        results:{
            programming:10,
            math:8,
            englis:9
        }
    }
]

for (let student of students){
    for(let value in student){
        if (value != 'results'){
            console.log(value);
        } else {
            let iterate = 0;
            let total=0;
            for (const number of value){
                iterate++;
                total += number;
            }
            console.log(total / iterate);
        }
    }
}

