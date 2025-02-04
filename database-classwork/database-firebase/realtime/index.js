import { database } from "./firebaseConfig.js";
import {getDatabase, ref, set, } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js"

console.log(database)

const enterID = document.getElementById("enterID")
const enterName = document.getElementById("enterName")
const enterQuantity = document.getElementById("enterQuantity")

const insertBtn = document.getElementById("insert")
const updateBtn = document.getElementById("update")
const removeBtn = document.getElementById("remove")

const db = getDatabase()

function writeUserData(userId, name, quantity){
    set(ref(db, "users/"+ userId),{
        username: name,
        quantity: quantity,
    })
}

insertBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    writeUserData(enterID, enterName, enterQuantity)
})

//Get
updateBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    get(child(ref(database),`products/${enterId.value}`)).then((snapshot)=>{
        if (snapshot.exists()){
            console.log(snapshot.val());
            const data = snapshot.value()
            
            enterID.value = data.id;
            enterName.value = data.name;
            enterQuantity.value = data.quantity;
        } else {
            console.log("No data found")
        }
    }).catch((error)=>{
        console.error(error);
    })
})

//Delete
removeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    get(child(ref(db),`products/${enterId.value}`))
        .then((snapshot)=>{
            if (snapshot.exists()){
                console.log(snapshot.val())
                
                remove(ref(getDatabase), `products/${enterID.value}`)
                    .then(()=>{
                        console.log("Product removed");
                        alert("Productas pašalintas")
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            } else {
                console.log("No data found")
            }
        })
        .catch((error)=>{
            console.error(error)
        })
})