
// Topic: Using Try/Catch--------------------
// =========================
// try {
//     hello.trim()
// } catch () {
//     console.log('Caught: Error!')
// }
// console.log('after try-catch')

function message(msg) {
    try {
        console.log(msg.toUpperCase().repeat(2))
    } catch (e) {
        console.log(e)
        console.log('=========================')
        console.log('please, pass a string next time')
    }

}




// =========================