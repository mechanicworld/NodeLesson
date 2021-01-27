const Person = require('./person')
const Meetup = require('./meetup')
const Chalk = require('chalk')
const Database = require('./database')




const mert = new Person('Mert', 34)
const armagan = new Person('Armagan', 35)

mert.greet(armagan)

const wtmb = new Meetup("WTMN Berlin")

armagan.attend(wtmb)
mert.attend(wtmb)

console.log(Chalk.blue.bgRed.bold('hello world'))
wtmb.printAttendeeNames()

Database.save('meetup.json', wtmb)
Database.save('person.json', mert)

const loadedFiled = Database.load('meetup.json')

console.log(loadedFiled)