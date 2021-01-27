const Chalk = require('chalk')
module.exports =  class Meetup {
    constructor(name, attendees = []) {
        this.name = name
        this.attendees = attendees
    }
    printAttendeeNames() {
        this.attendees.forEach(printName)
    }

    static create(){
        
    }
}

printName = person => console.log(Chalk.blue(person.name))