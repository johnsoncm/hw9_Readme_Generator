// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown =require("./utils/generateMarkdown.js");
console.log(generateMarkdown.renderLicenseBadge('Apache 2.0'))

generateMarkdown.renderLicenseBadge()

const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return 



// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",

        },
    
        { 
         type: 'input',
         name: 'description',
         message: "Please write a short description of your project: ",
        },

        {   
        type: 'input',
        name: 'install',
        message: "What command should be run to install?",
        default: 'npm i',
        },
        {   
        type: 'input',
        name: 'usage',
        message: "What does the user need to know about using the repo?",
        },
        {   
        type: 'input',
        name: 'contribution',
        message: "What is your project's contribution guidelines?",
        },
        {   
        type: 'input',
        name: 'test',
        message: "What command should be run to run tests?",
        default: 'npm test',
        },
        {   
        type: 'list',
        name: 'license',
        message: "What is your project's license?",
        choices: ['MIT' , 'IPL 1.0' ,'Apache 2.0', 'MPL 2.0'],
        default: 'MIT',
        },
        {   
        type: 'input',
        name: 'github',
        message: "What is your github username?",
        },
        {   
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        },
];



inquirer 
    .prompt(questions)
    .then((data) => {


        //put in a function below
    fs.writeFile('readme.md', buildReadMe(data.title , data.description, data.install, data.usage, data.contribution, 
       data.test, data.license, data.github, data.email, data.licenseBadge), (err) =>
       err ? console.log(err) :
       console.log(data),
       renderLicenseBadge()
    )


});

function buildReadMe(title, description, install, usage, contribution, test, license, github, email, licenseBadge){
    return `# **${title}**

${licenseBadge}
      
## Description

${description}

## Table of Contents
  
-[Description](#Description)
-[Install](#Install)
-[Usage](#Usage)
-[License](#License)
-[Contributors](#Contributors)
-[Test](#Test)
-[Github](#Github)
-[Email](#Email)
  
## Install
  
${install}
  
## Usage
    
${usage}
  
## License
  
${license}
  
## Contributors
      
${contribution}
  
## Test 
    
${test}
  
## Github
    
${github}
  
## Email
    
${email}
  
  `;
  }

console.log(generateMarkdown.renderLicenseBadge('Apache2.0'))
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
