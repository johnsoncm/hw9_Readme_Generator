// // TODO: Create a function that returns a license badge based on which license is passed in

const Choices = require("inquirer/lib/objects/choices");

// const Choices = require('./Develop/index.js');
console.log("choices" , Choices);

// // If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseMarkdownText;

  switch (license) {
    case 'MIT':
    licenseMarkdownText = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    break;
    case 'Apache 2.0':
      licenseMarkdownText = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    break;
    case 'IPL 1.0':
      licenseMarkdownText = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    break;
    case 'MPL 2.0':
      licenseMarkdownText = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    break;
    case 'None':
      licenseMarkdownText = "";
      break;
    }
    return licenseMarkdownText
  }
  // if (license === 'MIT') {
  //   return `${licenseBadge}[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  //  }
  //  if (license === 'Apache 2.0') {
  //    return `${licenseBadge} [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  //   }
  //  if (license === 'IPL 1.0') {
  //    return `${licenseBadge} [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  //  }   
  //  if (license === 'MPL 2.0') {
  // return `${licenseBadge} [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  //  }
  //  else{
  //    return "";

  
// }};


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {


// }
// Placeholder for license badge    
// ${licenseBadge}
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, install, usage, contribution, test, license, github, email) {
  return `# **${title}**


  Placeholder for license badge
        
  ## Description
  
  ${description}
  
  ## Table of Contents
    
  [Description](#Description)<br>
  [Install](#Install)<br>
  [Usage](#Usage)<br>
  [License](#License)<br>
  [Contributors](#Contributors)<br>
  [Test](#Test)<br>
  [Github](#Github)<br>
  [Email](#Email)<br>
    
  ## Installation
  
  To install necessary dependencies, run the following command:
    
    ${install}
    
  ## Usage
      
  ${usage}
  
  ## License
  
  This project is licensed under the ${license} license
    
  ## Contributors
        
  ${contribution}
    
  ## Test 
  
  To run tests, run the following command:
      
    ${test}
    
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${email}
  
  You can find more of my work at ${github}
    
    
    `;
    }

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
 };
