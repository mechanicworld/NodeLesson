const Chalk = require('chalk')
module.exports = class Person {
    constructor(name, age) {
        console.log('Hi, I am created, my name is', name)
        this.name = name;
        this.age = age;
        this.meetups = []
    }
    greet(person) {
        console.log("Hello " + person.name + ", my name is " + this.name)
    }

    attend(meetup) {
        this.meetups = meetup.name
        meetup.attendees.push(this)
    }
}