var inquirer = require("inquirer");
var fs = require("fs");
const markDown = require("./methods/markdown");



const questions = [



    {
        type: "input",
        message: "Please enter you full name ?",
        name: "username"
    },

    {
        type: "input",
        message: "What is the name of your repository ?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the title of your project ?",
        name: "title"
    },

    {
        type: "checkbox",
        message: "Table of contents please select all that will apply",
        choices: ["Description", "How To Use", "License", "Author Info"],
        name: "table"
    },

    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },

    {
    type: "input",
    message: "Please enter your installation instructions?",
    name: "install"
    },

    {
        type: "input",
        message: "Please enter your usage for this project.",
        name: "usage"

    },

    {
        type: "list",
        message: "Please choose a license?",
        name: "license",
        choices: ["GPL", "Public Domain", "MIT License", "Apache License"]
    },

    {
        type: "input",
        message: "Please enter any contributions here.",
        name: "contributing"

    },


    {
        type: "input",
        message: "Please enter you email address?",
        name: "email"
    },

    {
        type: "input",
        message: "Please enter you github information",
        name: "github"
    }

]




inquirer
    .prompt(questions).then(function (response) {

console.log(response);
        fs.writeFile("README.md", markDown(response), err => {if(err) throw err });
      
    })



