// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
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
        return "Manager";
    };
    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;