const Employee = require("./Employee")


class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id, email)
        this.school = school
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school
    }
}

// const hall = new Intern('hall', 1, 'hall@gmail.com', 'Bama State')
// const david = new Intern('david', 2, 'david@gmail.com', 'Washington State')
// hall.getRole() //Intern
// hall.getSchool() //Bama State

// david.getRole() //Intern
// david.getSchool()// Washington State

module.exports = Intern