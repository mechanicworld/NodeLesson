const Database = require('./database')
const Meetup = require('./meetup')
const loadedFile = Database.load('meetup.json')
const Person = require('./person')

const wtmb = new Meetup(loadedFile.name, loadedFile.attendees)
const omur = new Person('Omur', 30)
omur.attend(wtmb)
wtmb.printAttendeeNames()
