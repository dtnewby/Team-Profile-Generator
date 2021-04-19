const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        // Constructor
        it("should create an object with a name, id, email, and school", () => {
            const intern = new Intern("Lou Albano", "1", "lou.albano@gmail.com", "Pepperdine University");

            expect(intern.name).toEqual("Lou Albano");
            expect(intern.id).toEqual("1");
            expect(intern.email).toEqual("lou.albano@gmail.com");
            expect(intern.school).toEqual("Pepperdine University");
        });

        // getGitHub
        it("getGitHub should return the value of github", () => {
            const intern = new Intern("Todd Newby", "2", "todd.newby@yourself.com", "Indiana University");

            expect(intern.getSchool()).toEqual("Indiana University");
        });

        // getRole
        it("getRole should return Intern", () => {
            const intern = new Intern("Kieran Gibbs", "3", "kieran.gibbs@arsenal.com", "Ball State University");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});