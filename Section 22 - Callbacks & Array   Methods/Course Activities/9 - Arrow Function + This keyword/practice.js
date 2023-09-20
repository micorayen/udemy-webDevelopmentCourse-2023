
// Topic: Arrow Functions + 'This' keyword--------------------
// =========================
// Example 1: find smallest numbers=========================
const person = {
    firstName: 'Mico',
    lastName: 'Rayen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

// Replace w/ Arrow Function, exact same logic
const person2 = {
    firstName: 'Mico',
    lastName: 'Rayen',
    fullName: () => { // arrow function is not within a 'function scope'
        console.log(this) // now 'this' refer to window object
        return `${this.firstName} ${this.lastName}`
    }
}

// Replace w/ Arrow Function, exact same logic
const person3 = {
    firstName: 'Mico',
    lastName: 'Rayen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        // setTimeout(function () { // it has to do w/ execution context, and setTimeout is window's method

        setTimeout(() => {
            console.log(this) // the keyword 'this', inside arrow functions, is the same value of the keyword 'this'
            // - in the scope of where the 'function was created'
            console.log(this.fullName())
        }, 3000)
    }

}

// =========================