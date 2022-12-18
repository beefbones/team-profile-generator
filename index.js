// packages required for this application
const fs = require('fs');
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your Team Managers name:',
        name: 'name',
        validate: nameInput => {
            if (!nameInput) {
                console.log('You must enter a name!')
                return false
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter their employee ID number:',
        name: 'id',
        validate: idInput => {
            if (!idInput) {
                console.log('You must enter an employee ID number!')
                return false
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter their email address:',
        name: 'email',
        validate: emailInput => {
            if (!emailInput) {
                console.log('You must enter an email!')
                return false
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter their office number:',
        name: 'office',
        validate: officeInput => {
            if (!officeInput) {
                console.log('You must enter an office number!')
                return false
            } else {
                return true
            }
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to add an Engineer or Intern?',
        name: 'addConfirm',
        default: false,
    },
    {
        type: 'list',
        message: 'Which member would you like to add?',
        name: 'licenses',
        choices: ['Engineer', 'Intern'],
        when: ({addConfirm}) => {
            if (!addConfirm) {
                return false;
            } else {
                return true;
            }
        }
    }
]

// Create function to write HTML file
function writeToFile() {
    fs.writeFile('./index.html', data, err => {
        if (err) {
            reject (err)
            return
        } else {
            return true
        }
    })
}

// Create function to initiate application
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize application
init()
.then(userInput => {
    return generateHTML
})