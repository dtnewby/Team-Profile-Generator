const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        if (github === null 
            || typeof github !== "string" 
            || github.trim().length < 1) {
                
                throw new Error("github was null, not a String, or the empty String");
            }

        super(name, id, email);     

        this.github = github;
    }

    getGithub() { return this.github; }

    getRole() { return "Engineer"; }
}

module.exports = Engineer;