const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        // Constructor
        it("should create an object with a name, id, email, and office number", () => {
            const manager = new Manager("Lou Albano", "1", "lou.albano@gmail.com", "651-290-2737");

            expect(manager.name).toEqual("Lou Albano");
            expect(manager.id).toEqual("1");
            expect(manager.email).toEqual("lou.albano@gmail.com");
            expect(manager.officeNumber).toEqual("651-290-2737");
        });

        it("getOfficeNumber should return the value of officeNumber", () => {
            const manager = new Manager("Todd Newby", "2", "todd.newby@yourself.com", "651-290-2737");

            expect(manager.getOfficeNumber()).toEqual("651-290-2737");
        });

        // getRole
        it("getRole should return Manager", () => {
            const manager = new Manager("Kieran Gibbs", "3", "kieran.gibbs@arsenal.com", "651-290-2737");

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});