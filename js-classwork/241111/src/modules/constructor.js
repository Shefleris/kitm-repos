class Student {
    constructor (){
        this.firstName = firstName;
        this.email = email;
        this.role = role;
    }

    showProfile(){
        return[
            this.firstName,
            this.email,
            this.role
        ]
    }
}

function StudentCon(firstName, email, role){
    this.firstName = firstName;
    this.email = email;
    this.role = role;
    this.showProfile = function(){
        return[
            this.firstName,
            this.email,
            this.role
        ]
    }   
}
const studentOne = new StudentCon('Tomas', 'tomaitis@gmail.com', ['student', 'admin'])
console.log(studentOne.showProfile());