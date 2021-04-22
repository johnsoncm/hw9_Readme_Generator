// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { getMaxListeners } = require('process');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");
console.log(generateMarkdown.renderLicenseBadge('Apache 2.0'));



// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return 



// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
        default: 'Readme Generator',

        },
    
        { 
         type: 'input',
         name: 'description',
         message: "Please write a short description of your project: ",
         default: 'Generates a readme file',
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
        default: 'Be careful!',
        },
        {   
        type: 'input',
        name: 'contribution',
        message: "What is your project's contribution guidelines?",
        default: 'Be careful!',
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
        default: 'johnsoncm',
        },
        {   
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        default: 'johnsoncm3@gmail.com',
        },
];



inquirer 
    .prompt(questions)
    .then((data) => {
        const queryUrl = `https://api.github.com/users/${data.username}`

        //put in a function below
    fs.writeFile('readme.md', generateMarkdown(data.title , data.description, data.install, data.usage, data.contribution, 
       data.test, data.license, data.github, data.email), (err) =>
       err ? console.log(err) :
       console.log(data),
        generateMarkdown.renderLicenseBadge()
    //    generateMarkdown.renderLicenseBadge(data.licenseBadge),
     
       
    )


});

// function buildReadMe(title, description, install, usage, contribution, test, license, github, email, licenseBadge){
//     return `# **${title}**

// Placeholder for license badge    
// ${licenseBadge}

      
// ## Description

// ${description}

// ## Table of Contents
  
// [Description](#Description)<br>
// [Install](#Install)<br>
// [Usage](#Usage)<br>
// [License](#License)<br>
// [Contributors](#Contributors)<br>
// [Test](#Test)<br>
// [Github](#Github)<br>
// [Email](#Email)<br>
  
// ## Installation

// To install necessary dependencies, run the following command:
  
//   ${install}
  
// ## Usage
    
// ${usage}

// ## License

// This project is licensed under the ${license} license
  
// ## Contributors
      
// ${contribution}
  
// ## Test 

// To run tests, run the following command:
    
//   ${test}
  
// ## Questions

// If you have any questions about the repo, open an issue or contact me directly at ${email}

// You can find more of my work at ${github}
  
  
//   `;
//   }

console.log(generateMarkdown.renderLicenseBadge('Apache2.0'))
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

    

// }


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
