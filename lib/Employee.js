// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
constructor(name, id, email) {
this.name = name;
this.id = id; 
this.email = email; 
}
//how do i combine passing in information from inquirer while also building classes using "this"
 getName() {
     return name;
 };

 getId() {
     return id;
 };

 getEmail() {
     return email;
 };

 getRole() {
    return "Employee";
 }; // Returns 'Employee'
}

module.exports = Employee;