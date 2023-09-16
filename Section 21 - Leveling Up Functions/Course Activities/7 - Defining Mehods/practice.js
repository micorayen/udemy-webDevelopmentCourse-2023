
// Topic: Defining Methods--------------------
// =========================
const myMath = { // declare object myMath
    multiply: function (num, num2) { // myMath, own method
        return num * num2;
    },
    square(num) {   //Shorthand - [Recently Added]
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    },
    exponent: function (num, num2) {
        return num ** num2;
    }
}

let input = myMath;

// =========================