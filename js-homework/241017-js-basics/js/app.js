let vardas = "jonas";
let pavarde = "petrauskas";
let asmensKodas = "38507131234";

if (vardas < 3 || pavarde < 5){
    console.log("Pertrumpas vardas arba pavarde");    
} else {
    let apdorotasVardas = vardas.charAt(0).toUpperCase() + vardas.slice(1);
    let apdorotasPavarde = pavarde.toUpperCase();
    console.log(apdorotasVardas);
    console.log(apdorotasPavarde);
    switch (asmensKodas.charAt(0)){
        case "1":
        case "2":
            console.log("18"+asmensKodas.slice(1, 3)+"-"+asmensKodas.slice(3, 5)+"-"+asmensKodas.slice(5, 7));
            break;
        case "3":
        case "4":
            console.log("19"+asmensKodas.slice(1, 3)+"-"+asmensKodas.slice(3, 5)+"-"+asmensKodas.slice(5, 7));
            break;
        case "5":
        case "6":
            console.log("20"+asmensKodas.slice(1, 3)+"-"+asmensKodas.slice(3, 5)+"-"+asmensKodas.slice(5, 7));    
            break;
    }
    // Nelabai supratau reikalavimo. Pagal pavyzdi 3 asmens kodo skaitmuo nėra nei 1 ar 2. 
    switch (asmensKodas.charAt(2)){
        case "1":
        case "2":
            console.log("Gimimo vieta: Lietuva");
            break;
        case "3":
            console.log("Gimimo vieta: Užsienis");
            break;
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            console.log("Gimimo vieta: Nežinoma");
            break;
    } 
}
