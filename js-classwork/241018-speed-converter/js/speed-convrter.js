function toMilesPerHour (kilometersPerHour){
    let milesPerHour;
    if (kilometersPerHour < 0) {
        return -1;
    } else if ( kilometersPerHour >= 0){
        milesPerHour = kilometersPerHour / 1.609;
        return Math.round(milesPerHour);
    }
}

function printConversion (kilometersPerHour){
    let milesPerHour = toMilesPerHour(kilometersPerHour);
    if (milesPerHour === -1) {
        console.log("Invalid value");
    } else {
        console.log(kilometersPerHour + " km/h" + " = " + milesPerHour + " mi/h");
    }
}

printConversion(1.5);    // Expected output: "1.5 km/h = 1 mi/h"
printConversion(10.25);  // Expected output: "10.25 km/h = 6 mi/h"
printConversion(-5.6);   // Expected output: "Invalid Value"
printConversion(25.42);  // Expected output: "25.42 km/h = 16 mi/h"
printConversion(75.114); // Expected output: "75.114 km/h = 47 mi/h"