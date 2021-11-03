const inqurier = require("inquirer")
const fs = require("fs")
var managerArray = []
var internArray = []
var employeeArray = []
var engineerArray = [];
var htmlCode;
promptManager()

function promptManager ()  {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your office number",
            name: "officeNumber"
        },
        
    ])
        .then((data) => {
            console.log("here")
        managerArray.push(new Manager (data.name, data.id, data.email, data.officeNumber))
        selectRole()
    })
}

function promptIntern ()  {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your school",
            name: "school"
        },
        
    ])
        .then((data) => {
            console.log("here3")
        internArray.push(new Intern (data.name, data.id, data.email, data.school))
        selectRole()
        })

}

function promptEngineer() {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your github",
            name: "github"
        },
        
    ])
    .then((data) => {
       engineerArray.push(new Engineer (data.name, data.id, data.email, data.github))
       selectRole()
    })
    
}

function selectRole() {
    inqurier.prompt([
        {
            type: "list",
            choices: ["Intern", "Engineer", "Finishing building your team"],
            message: "Pick a role",
            name: "role"
        }
    ])
    .then((data) => {
        if (data.role === "Engineer") {
            promptEngineer();
        }
        if (data.role === "Intern") {
            promptIntern();
        }
        if (data.role === "Finishing building your team") {
            GenerateManager(managerArray);
            //generate egineer cards
            if (engineerArray) {
                GenerateEngineer(engineerArray);
            }
            if (internArray) {
                GenerateIntern(internArray);
            }
            renderHTML()
            init()
            console.log(renderHTML());

        }
     }) 
}