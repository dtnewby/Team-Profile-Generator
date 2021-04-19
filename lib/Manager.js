const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (officeNumber === null 
            || typeof officeNumber !== "string" 
            || officeNumber.trim().length < 1) {
                
                throw new Error("officeNumber was null, not a String, or the empty String");
            }

        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() { return this.officeNumber; }

    getRole() { return "Manager"; }
}
module.exports = Manager;