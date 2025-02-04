import { User } from "./user";
import { Developer } from "./Developer";


const user1 = new User(1, 'Tomas', 'Tomaitis', 'Tomaitiunas@gtmail.com')
console.log(user1.showProfile());

const myDeveloper = new Developer(2, 'Petras', 'Petraitis', 'petriunas@gmail.com', ['java', 'javascript'])
console.log(myDeveloper.showProfile())