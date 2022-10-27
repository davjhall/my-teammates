
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
var http = require('http');
const createdPage = require('./created-page')

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');




// Where do we want to store each Employee OBJECT once its created(?)
var team = [];

function askUser() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your new manager?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the ID of the new manager?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email of the new manager?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the office number of the new manager?'
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'What kind of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'Done']
        }





    ]).then(results => {
        // console.log(results);
        let managerName = results.managerName

        // we want to create a new Manager INSTANCE
        var newManager = new Manager(managerName, results.managerId, results.managerEmail, results.managerOffice);
        //  console.log(newManager);

        // how might we store this new object instance(?)
        // --> add the new instance object to our TEAM
        team.push(newManager)

        // console.log(team);

        if (results.newEmployee == 'Intern') {
           
            addIntern(); // call the create intern function
        }
        if (results.newEmployee == 'Engineer') {
            addEngineer();
        }

    }).catch(error => {
        if (error) {
            console.log(error);
        }
    })
}



function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of your new Engineer?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the ID of the new Engineer?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email of the new Engineer?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Engineer`s GitHub name?'
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'What kind of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])

        .then(results => {
            // console.log(results);
            let engineerName = results.engineerName

        // we want to create a new Manager INSTANCE
        var newEngineer = new Engineer(engineerName, results.engineerId, results.engineerEmail, results.github);



            team.push(newEngineer)

            
            if (results.newEmployee == 'Intern') {// conditional testing 
                
                addIntern();// call the create intern function
            }
            if (results.newEmployee == 'Engineer') {
                addEngineer();
            }
        })

        .catch(error => {
            if (error) {
                console.log(error);
            }

        })
}


function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of your new Intern?'
        },
        {
            type: 'input',
            name: 'intrnId',
            message: 'What is the ID of the new Intern?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the email of the new Intern?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does your intern attend?'
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'What kind of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])




        .then(results => {
            // console.log(results)

            let internName = results.internName

        // we want to create a new Manager INSTANCE
        var newIntern = new Intern(internName, results.internId, results.internEmail, results.school);

            team.push(newIntern)

             
            if (results.newEmployee == 'Intern') {   // conditional
               
                addIntern(); // call the create intern function
            }
            if (results.newEmployee == 'Engineer') {   
                addEngineer();    // call the create engineer function
            }

        })

    
        // What other employees do you want to addEventListener(?)
        .catch(error => {
            if (error) {
                console.log(error);
            }

        })
}


function createTeam() {
   

    // completed Team array 

}

    //template literals to return temp literals to make a card. manager.gerName on card
    
    // We will want to create an HTML card/container from this data  (let's try to do this part last --> reference README.md generator project)

    

askUser();
