let guestList = [];
let guestBlockList = ["Karolis", "Tomas"]


function getGuestCount(){ 
    return prompt("Kiek bus svečių?");
};

function getInputName() {
    return prompt("Ivesk svečio vardą ");
};

function checkIfBlockListed(name){
    return guestBlockList.includes(name);
}

function getNewGuestName(){
    let guestName = "";
    do {
        guestName = prompt("Šis asmuo yra užbluokotas įveskite kita vardą ");
    }
    while (checkIfBlockListed(guestName));
    return guestName;
}

function addGuestToList(guestName){
    return  guestList.push(guestName);
}

function printGuestList(guestCount){
    for (let i = 0; i++ ; i < guestCount ){
        console.log((i + 1) + ". " + guestList[i])
    }
}

function main(){
    let guestCount = getGuestCount()
    for (let i = 0; i++; i < guestCount){
        let guestName = getInputName()
        if (checkIfBlockListed(guestName)){
            guestName = getNewGuestName()
        }
        addGuestsToList();
    }
    printGuestList(guestCount);
}