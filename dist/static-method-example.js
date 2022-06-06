"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
class Instructor {
    constructor({ name = "", role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }
    renderDetail() {
        console.log(`${this.name} - ${this.role}`);
    }
    static HelloWorl() {
        console.log("Hi there");
    }
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}
exports.Instructor = Instructor;
let juniorInstructor = new Instructor({ 'name': 'Brian' });
let seniorInstructor = new Instructor({ 'name': 'Alice', 'role': 'classroom' });
juniorInstructor.renderDetail();
seniorInstructor.renderDetail();
Instructor.HelloWorl();
console.log(`${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`);
console.log(`${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`);
