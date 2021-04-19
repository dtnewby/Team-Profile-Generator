const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        // Constructor
        it("should create an object with a name, id, email, and github", () => {
            const engineer = new Engineer("Lou Albano", "1", "lou.albano@gmail.com", "lou.albano@github.io");

            expect(engineer.name).toEqual("Lou Albano");
            expect(engineer.id).toEqual("1");
            expect(engineer.email).toEqual("lou.albano@gmail.com");
            expect(engineer.github).toEqual("lou.albano@github.io");
        });

        // getGitHub
        it("getGitHub should return the value of github", () => {
            const engineer = new Engineer("Todd Newby", "2", "todd.newby@yourself.com", "todd.newby@github.io");

            expect(engineer.getGithub()).toEqual("todd.newby@github.io");
        });

        // getRole
        it("getRole should return Engineer", () => {
            const engineer = new Engineer("Kieran Gibbs", "3", "kieran.gibbs@arsenal.com", "kieran.gibbs@github.io");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});