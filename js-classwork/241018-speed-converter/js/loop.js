let students = ["Alice", "bob", "1234", "eve", "", "ALICE", "Bob", "Eve!", "John", "Charlie", "eve", "JoHn"];

for (const value of students){
    let toPrintStudents = [];
    let regexSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (value === ""){
        console.log("1")
        continue
    } else if (value.length < 3 || value == isNaN || value.match(regexSpecial)){
        continue;
    } else if ( toPrintStudents.includes(value)){
        continue;
    } else if (value.toLowerCase == "john"){
        for (const element of toPrintStudents) {
            console.log(element);            
        }
        console.log("Student John found, stopping search");
        break;
    } else {
        toPrintStudents.push(value);
        continue
    }
}