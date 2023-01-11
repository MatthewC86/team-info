const inquirer = require("inquirer");
const fs = require("fs");


const Engineer = require("./roles/Engineer");
const Manager = require("./tests/Manager");
const Intern = require("./tests/Intern");

const newEmployeeData = [];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your current role?',
        choices: ['Engineer', 'Intern', 'Manager', 'N/A'],
        
        filter(val) {
            return val;
        }
    }
];

// Function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
           const mark = MarkDown(data)
            fs.writeFile( function (err){
                if (err) {
                    console.log('Your employee was not saved successfully.', err)
                } else {
                    console.log('A new employee was generated!')
                }
            })
            //console.log(mark)
            //return data
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();