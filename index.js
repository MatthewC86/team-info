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