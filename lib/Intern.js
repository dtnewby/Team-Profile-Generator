const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {

        if (school === null 
            || typeof school !== "string" 
            || school.trim().length < 1) {
                
                throw new Error("school was null, not a String, or the empty String");
            }

        super(name, id, email);
        this.school = school;
    }

    getSchool() { return this.school; }

    getRole() { return "Intern"; }
}
module.exports = Intern;