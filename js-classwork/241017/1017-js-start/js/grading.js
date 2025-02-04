function grading (inputScore) {
    let score = inputScore;
    if (score >= 90){
        console.log("Excellent! You scored an A");
    } else if (score >= 75) {
        console.log("Good job! You scored a B")
    } else if (score >= 50){
        console.log("You passed! You scored a C")
    } else {
        console.log("Sorry, you failed. You scored an F")
    }
}

grading(65);