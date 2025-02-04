import { database } from "./firebaseConfig.js";
import { doc, setDoc, collection, addDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// await setDoc(doc(database, "carBrands", "001"),{
//     brandName:"Mercedes",
//     years:"2022",
//     transmission:"automatic",
// })

// console.log("Document written with ID:", docRef.id);

const adding = async () => {
    await addDoc(collection(database, "carBrands"),{
        brandName:"Subaru",
        years:"2020",
        transmission:"automatic",
    });
};

// adding();

const updating = async () =>{
    await updateDoc(doc(database,"carBrands", "001"),{brandName:"Opel"});
    alert("Updated")
}

// updating();

const deleting = async () =>{
    await deleteDoc(doc(database, "carBrands", "001"))
}

deleting();
