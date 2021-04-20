// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');



// TODO: Create an array of questions for user input
// const questions = [];

const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return 

// inquirer.prompt([

const questions = [
        {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",

        },
    
        { 
         type: 'input',
         name: 'description',
         message: "What is as short description of your project?",
        },

        {   
        type: 'input',
        name: 'install',
        message: "How do you install your project?",
        },
        {   
        type: 'input',
        name: 'usage',
        message: "What is your project's usage information?",
        },
        {   
        type: 'input',
        name: 'contribution',
        message: "What is your project's contribution guidelines?",
        },
        {   
        type: 'input',
        name: 'test',
        message: "What is your project's test instructions?",
        },
        {   
        type: 'input',
        name: 'license',
        message: "What is your project's license?",
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

    fs.writeFile('readme.md', buildReadMe(data.title , data.description, data.install, data.usage, data.contribution, 
       data.test, data.license, data.github, data.email), (err) =>
       err ? console.log(err) :
       console.log(data)
    )

});

function buildReadMe(title, description, install, usage, contribution, test, license, github, email){
    return `# **${title}**

      
    ## Description
  
    ${description}
  
    ## Table of Contents
  
    -[Description] (#Description)
    -[Install] (#Install)
    -[Usage] (#Usage)
    -[License] (#License)
    -[Contributors] (#Contributors)
    -[Test] (#Test)
    -[Github] (#Github)
    -[Email] (#Email)
  
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


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
