export class Instructor{
    role: string;
    name: string;
    constructor({name = "", role = "assistant"} = {}){
        this.role = role;
        this.name = name;
    }
    renderDetail(){
        console.log(`${this.name} - ${this.role}`);
    }
    static HelloWorl(){
        console.log("Hi there")
    }
    static canTeach(instructor: Instructor){
        return(instructor.role === 'classroom');
    }
}
let juniorInstructor = new Instructor({'name':'Brian'});
let seniorInstructor = new Instructor({'name':'Alice', 'role':'classroom'})

juniorInstructor.renderDetail();
seniorInstructor.renderDetail();

Instructor.HelloWorl();

console.log(`${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`);
console.log(`${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`);