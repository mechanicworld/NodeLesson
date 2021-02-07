const Database = require('./database')
const Meetup = require('./meetup')
const Person = require('./person')
Database.load('meetup.json', (err, loadedFile) => {
    if(err) {
        console.log('Hey an error occcured', err)
        return
    }
    
    const wtmb = Meetup.create(loadedFile)
    const omur = new Person('Omur', 30)
    omur.attend(wtmb)
    wtmb.printAttendeeNames()
})

console.log("I am the last one ?")


