// // TODO: Create a function that returns a license badge based on which license is passed in

const Choices = require("inquirer/lib/objects/choices");

// const Choices = require('./Develop/index.js');
console.log("choices" , Choices);


let licenseMarkdownText = '';
// // If there is no license, return an empty string
function renderLicenseBadge(license) {



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


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {


//   switch (license) {
//     case 'MIT':
//     licenseMarkdownLink = '(https://opensource.org/licenses/MIT)'
//     break;
//     case 'Apache 2.0':
//       licenseMarkdownLink= '(https://opensource.org/licenses/Apache-2.0)'
//     break;
//     case 'IPL 1.0':
//       licenseMarkdownLink = '(https://opensource.org/licenses/IPL-1.0)'
//     break;
//     case 'MPL 2.0':
//       licenseMarkdownLink = '(https://opensource.org/licenses/MPL-2.0)'
//     break;
//     case 'None':
//       licenseMarkdownLink = "";
//       break;
//     }
//     return licenseMarkdownLink

// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, install, usage, contribution, test, license, github, email) {
  let lmt = renderLicenseBadge(license)
  // let lml = renderLicenseLink(license)
  // console.log("lml: " , lml)
  console.log("lmt: ", lmt)

  return `# **${title}**


${lmt}
   
        
  ## Description  
  
  ${description}
  
  ## Table of Contents
    

  [Install](#Installation)<br>
  [Usage](#Usage)<br>
  [Contributors](#Contributors)<br>
  [Test](#Test)<br>
  [License](#License)<br>
  [Questions](#Questions)<br>
 
  
    
  ## Installation
  
  To install necessary dependencies, run the following command:
    
      ${install}
    
  ## Usage
      
  ${usage}

  ## Contributors
        
  ${contribution}

  ## Test 
  
  To run tests, run the following command:
    
      
    ${test}
  
  ## License
  
  This project is licensed under the ${license}
    

  ## Questions
  
  If you have any questions about the repo, please contact me directly at: ${email}
  
  You can find more of my work at: ${github}
    
    
    `;
    }

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
 };
