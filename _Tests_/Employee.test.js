const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided with valid arguments", () => {
            const employee = new Employee("Sarah", "1", "sarah@gmail.com");
      
            expect(employee.name).toEqual("Sarah");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("sarah@gmail.com");
        });

        it("getName should return the value that name was initialized with", () => {
            const employee = new Employee("George", "2", "george@gmail.com");

            expect(employee.getName()).toEqual("George");
        });
     
        it("getId should return the value that id was initialized with", () => {
            const employee = new Employee("Pete", "3", "pete@gmail.com");

            expect(employee.getId()).toEqual("3");
        });
        
        // getEmail
        it("getEmail should return the value that email was initialized with", () => {
            const employee = new Employee("Lou", "4", "lou@gmail.com");

            expect(employee.getEmail()).toEqual("lou@gmail.com");
        });
        
        // getRole
        it("getRole should return Employee", () => {
            const employee = new Employee("Alvin", "5", "alvin@gmail.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});