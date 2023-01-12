const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');


const Engineer = require("./roles/Engineer");
const Manager = require("./roles/Manager");
const Intern = require("./roles/Intern");


const newEmployeeData = [];

const commonQuestions = [
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
];


const managerQuestions = [
    ...commonQuestions,
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    },
   
];
    const engineerQuestions = [
        ...commonQuestions,
        {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    }]

    const internQuestions = [
        ...commonQuestions,
        {
        type: 'input',
        name: 'school',
        message: 'What is your school?'
    }]

    const roleQuestion = [ 
    {
        type: 'list',
        name: 'role',
        message: 'Who would you like to add?',
        choices: ['Engineer', 'Intern', 'Finish'],
        
    }]

    const engineers = [];
    const interns = [];

// Function to initialize app
async function init() {
    try {
        const managerAnswers = await inquirer.prompt(managerQuestions)
        console.log(managerAnswers);

        let roleAnswer = await inquirer.prompt(roleQuestion)
        

        while (roleAnswer.role != 'Finish') {
            if (roleAnswer.role === 'Engineer') {
                const engineerAnswers = await inquirer.prompt(engineerQuestions) 
                engineers.push(engineerAnswers)
            } 
    
            if (roleAnswer.role === 'Intern') {
                const internAnswers = await inquirer.prompt(internQuestions) 
                interns.push(internAnswers)
            } 

            roleAnswer = await inquirer.prompt(roleQuestion)
        }

        console.log(engineers);
        console.log(interns);

        //creating HTML file
        fs.writeFileSync(path.join(__dirname, 'index.html'), `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Info</title>
        </head>
        <header>My Team</header>
        <body>

            <div class='container'>
                <div class='card'>
                    <ul>
                        <h3 class='card-text' id='employee-name'>${managerAnswers.name}</h3>
                        <h3 class='card-text' id='occupation'>Manager</h3></ul><br>
                        <ol class='card-footer' id='id'>ID: ${managerAnswers.id}</ol>
                        <ol class='card-footer' id='email'>Email: ${managerAnswers.email}</ol>
                        <ol class='card-footer' id='office-number'>Office number: ${managerAnswers.officeNumber}</ol>
                    </ul>
                </div>
            </div>

        ${engineers.map((engineerAnswers)=>{
            return `<div class='container'>
            <div class='card'>
                <ul>
                    <h3 class='card-text' id='employee-name'>${engineerAnswers.name}</h3>
                    <h3 class='card-text' id='occupation'>Engineer</h3></ul><br>
                    <ol class='card-footer' id='id'>ID: ${engineerAnswers.id}</ol>
                    <ol class='card-footer' id='email'>Email: ${engineerAnswers.email}</ol>
                    <ol class='card-footer' id='office-number'>Office number: ${engineerAnswers.github}</ol>
                </ul>
            </div>
        </div>`
        }).join('')}

        ${interns.map((internAnswers)=>{
            return `<div class='container'>
            <div class='card'>
                <ul>
                    <h3 class='card-text' id='employee-name'>${internAnswers.name}</h3>
                    <h3 class='card-text' id='occupation'>Intern</h3></ul><br>
                    <ol class='card-footer' id='id'>ID: ${internAnswers.id}</ol>
                    <ol class='card-footer' id='email'>Email: ${internAnswers.email}</ol>
                    <ol class='card-footer' id='office-number'>Office number: ${internAnswers.school}</ol>
                </ul>
            </div>
        </div>`
        }).join('')}

            
            <link rel="stylesheet" href="/style.css">
        </body>
        </html>
        
        `)

       
    } catch (error) {
        console.log(error);
    }
    


   
}

// Function call to initialize app
init();