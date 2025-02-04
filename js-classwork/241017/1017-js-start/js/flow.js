// Conditional flow

let userAdmin ="user";
let hasAdminRole = userAdmin =="admin" ? true : false;

console.log(hasAdminRole)

const language ="lt";

switch(language){
    case "lt":
        console.log("Labas");
        break;
    case "en":
        console.log("Hello");
        break;
    default:
        console.log("Nezinau tokios kalbos");
}

