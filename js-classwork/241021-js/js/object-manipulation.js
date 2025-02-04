const students = ["Tadas", "Ieva", "Toma"];

students.push("Kristina"); //Adds at the end
students.pop(); // Removes from the end
students.unshift("Karolis", "Karolina"); // Adds at the start
students.shift(); //Removes from the start

students.splice(); //Removes and or adds to the area specified

console.log(students);

let firstName = prompt("Enter your name:");
alert("Your username is:" + firstName)