// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");


class Engineer extends Employee {
    constructor(github) {
        super(name, id, email)
        this.github = github;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole() {
        return "Engineer";
    };
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;