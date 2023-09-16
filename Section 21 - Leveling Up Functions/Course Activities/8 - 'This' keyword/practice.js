
// Topic: 'This' Keyword--------------------
// =========================
const petDog = {
    Name: 'Luna',
    Color: 'White',
    Age: 4,
    Bark: function () {
        console.log('"This" refer to:' + this)
        console.log(`${this.Name}: Bark, Bark, Bark`) //'This' is referring to the object 'petDog'
    }
}

petDog.Bark()
let bark2 = petDog.Bark

this //Refering to window-object

// =========================