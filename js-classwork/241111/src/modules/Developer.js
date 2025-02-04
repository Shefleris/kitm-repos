import { User } from "./user";

export class Developer extends User {
    constructor (id, firstName, lastName, email, programmingLanguages){
        super(id, firstName, lastName, email);
        this.programmingLanguages = programmingLanguages
    }
}

