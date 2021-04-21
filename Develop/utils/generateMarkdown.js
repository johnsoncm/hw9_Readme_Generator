// // TODO: Create a function that returns a license badge based on which license is passed in

const Choices = require("inquirer/lib/objects/choices");

// const Choices = require('./Develop/index.js');
console.log("choices" , Choices);

// // If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === 'MIT') {
    return `${license}[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
   }
   if (license === 'Apache 2.0') {
     return `${license} [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
   if (license === 'IPL 1.0') {
     return `${license} [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
   }   
   if (license === 'MPL 2.0') {
  return `${license} [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
   }
   else{
     return "";


  
}};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {


}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

  ${data.badge}

  ## Description

  ${data.description}

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

    ${data.install}

  ## Usage
  
    ${data.usage}

  ## License

    ${data.license}

  ## Contributors
    
    ${data.contributors}

  ## Test 
  
    ${data.test}

  ## Github
  
    ${data.github}

  ## Email
  
    ${data.email}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink
};
