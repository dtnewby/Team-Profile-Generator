class Employee {
    
    constructor(name, id, email) {

        if (name === null 
            || id === null
            || email === null) {
                
                throw new Error("Name, id, or email is null.");
        }

        if (typeof name !== "string"
            || typeof id !== "string"
            || typeof email !== "string") {

            throw new Error("Name, id, or email is not a String.");
        }

        if (name.trim().length < 1
            || id.trim().length < 1
            || email.trim().length < 1) {

            throw new Error("Name, id, or email was the empty String.");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() { return this.name; }

    getId() { return this.id; }

    getEmail() { return this.email; }

    getRole() { return "Employee"; }
}
module.exports = Employee;