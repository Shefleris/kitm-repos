export class User{
    constructor(id, firstName, lastName, email){
        this.id = id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }

    showProfile(){
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            languages: this.programmingLanguages
        }
    }
}