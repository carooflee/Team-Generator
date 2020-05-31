const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function main() {
    inquirer.prompt([ //I need to set up multiple question sections based on how they answer what role they have, one for team
        {
            type: "list",
            name: "action",
            message: "Who would you like to add to the team?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "End"
            ]
        }
    ])
        .then(answers => {
            switch (answers.action) {
                case "Manager":
                    optionA();
                    break;
                case "Engineer":
                    optionB();
                    break;
                case "Intern":
                    optionC();
                    break;
            }
        })
}

function optionA() {
    inquirer.prompt([

        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your User ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "Managers, what is your office number? ",
            name: "office"
        }
    ]).then((answers) => {
        const name = answers.name;
        const email = answers.email;
        const id = answers.id;
        const office = answers.office;
        let mgmt = new Manager(name, email, id, office);
        array.push(mgmt);
        main();

    })
}


function optionB() {
    inquirer.prompt([

        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your User ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "Engineers, what is your Github username?",
            name: "github"
        }
    ]).then((answers) => {
        const name = answers.name;
        const email = answers.email;
        const id = answers.id;
        const office = answers.github;
        let engin = new Engineer(name, email, id, github);
        array.push(engin);
        main();
    }
    )}
// .then((answers) => {
//     const name = answers.name;
//     const email = answers.email;
//     const id = answers.id;
//     const gihub = answers.github;
//     }
// )} 

function optionC() {
    inquirer.prompt([

        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your User ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "Interns, where did you graduate from? ",
            name: "school"
        }
    ]).then((answers) => {
        const name = answers.name;
        const email = answers.email;
        const id = answers.id;
        const office = answers.school;
        let int = new Intern(name, email, id, school);
        array.push(int);
        main();
    }
    )}
// .then((answers) => {
//     const name = answers.name;
//     const email = answers.email;
//     const id = answers.id;
//     const school = answers.school;
//     }
// )} 

// let mgmt = new Manager(name, email, id, office);
// let engin = new Engineer(name, email, id, github);
// let int = new Intern(name, email, id, school);

//use *new* Manager, new Intern, etc when building from inquirer
//call functions for questions within the .then to ask different inquirer questions within each other
//ie how many team members: one manager, then takes to manager inquirer, when finished, then back to team questions
//use the drop down choice for inquirer when choosing which type of employee in questions

//     let allAnswers = [
//         "\n", "## Title: ", "\n", projectTitle, "\n",
//         "\n", "## Description: ", "\n", projectDescription, "\n",
//         "\n", "## Table of Conents ", "\n", tableOfContents, "\n",
//         "\n", "## Installation: ", "\n", installation, "\n",
//         "\n", "## Usage: ", "\n", instruction, "\n",
//         "\n", "## License:  ", "\n", licenseName, "\n",
//         "\n", "## Contributors: ", "\n", contributors, "\n",
//         "\n", "## User Email: ", "\n", email, "\n",
//     ];
//     const finalAnswers = allAnswers.toString();
//     var answersNoCommas = finalAnswers.replace(/,/g, "");


//     console.log(answersNoCommas);



//passing objects elsewhere



//     writeToFile(answersNoCommas);
// };

array = [mgmt, engin, int]
// //is this how i do the object array and pass it in?
// render(array);


// function writeToFile(data) {
//     fs.writeFile('team.html', data, function (err) {
//         if (err) throw err;
//         console.log('File Created!');
//     });
// }


main();

    //*push* objects somewhere

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
