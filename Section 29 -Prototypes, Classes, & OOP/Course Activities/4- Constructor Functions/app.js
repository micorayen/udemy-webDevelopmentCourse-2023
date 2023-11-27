// // rgb(199,54,23)
// // rgba(199,54,23,0.8)
// // #76FF32
// // hsl(180,50%,30%)
// // const red = new Color(255, 67, 89, "tomato")

// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb${r},${g},${b}`;
// }

// // hex(255, 100, 25);
// // rgb(110,110,25)

// // 1- focus here is on function, first the function w/ arguments
// // 2- create color object , which is empty
// // 3- create properties "color.r = r" etc, based on arguments provided
// // 4- then we add some methods
// // 5- then we return results of that object
// // 6- this is called factory functions, one way of making obj based on some pattern or recipe
// function makeColor(r, g, b) {
//   const color = {}; // this called factory, by storing method on this object
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     // Added Method
//     // console.log(this);
//     const { r, g, b } = this; // this, refer to color-object
//     return `rgb(${r},${g},${b})`;
//   };

//   color.hex = function () {
//     //Added Method inside makeColor Object, unlike rgb-function that need to pass rgb parameters
//     // no arguments necessary

//     const { r, g, b } = this; // this, refer to color-object
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(35, 255, 32);
// firstColor.rgb(); //it looks on left objects for parameters

// // can change r or others specifically
// firstColor.r = 255;

//Topic: Constructor Functions================================================================
// const firstColor = makeColor(35, 255, 32);
// firstColor.rgb();
// firstColor.hex();

// const black = makeColor(35, 255, 32);
// black.rgb();
// black.hex();

// function color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
// }

// Introduce 'New' Operator:
// Creates a blank, plain JS object
// links (sets the constructor of) this object to another objects
// Passes the newly created object from Step 1 as the 'this' context
// Returns this if the function doesn't return its own object

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  // console.log(this);
}

// 1- Creates a blank, plain JS object
new Color(255, 40, 100); // new operator,create objects for you based on patterns.
// 2- links (sets the constructor of) this object to another objects

Color.prototype.rgb = function () {
  // set as method of 'Color' function, in the 'prototype'
  // now you can set a function, outside 'Color' function
  const { r, g, b } = this; // this, refer to color-object
  return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Add new method RGBA
// Color.prototype.rgba = (a = 1.0) => { do not use 'Arrow functions' since tit works differently
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};

const color1 = new Color(255, 255, 25);
const color2 = new Color(215, 245, 30);

document.body.style.backgroundColor = color1.rgba(0.3); // TRY RGBA
