// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project's title!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Provide a description of your project.",
        name: "description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please provide a description of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What are your project's installation instructions?",
        name: "install",
        default: " Enter npm i in your terminal.",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Please installation instruction's of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is the usage of your project?",
        name: "usage",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide usage information of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribute",
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log("Please provide contribution guidelines!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What are your test instructions?",
        name: "tests",
        default: "npm run test",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please provide testing instructions!");
                return false;
            }
        }
    },
    {
        type: "list",
        message: "Please select project license.",
        name: "license",
        choices: ["Apache", "Boost Software", "MIT", "Mozilla Public", "The Unlicense"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please your email address!");
                return false;
            }
        }
    }
]

// function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("autoREADME.md", generateMarkdown(response))
    });
}

// function call to initialize program
init();