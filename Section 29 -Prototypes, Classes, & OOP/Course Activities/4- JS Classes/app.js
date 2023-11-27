//Topic: JavaScript Classes================================================================

// Introduce 'New' Operator:
// Creates a blank, plain JS object
// links (sets the constructor of) this object to another objects
// Passes the newly created object from Step 1 as the 'this' context
// Returns this if the function doesn't return its own object

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   // console.log(this);
// }

// // 1- Creates a blank, plain JS object
// new Color(255, 40, 100); // new operator,create objects for you based on patterns.
// // 2- links (sets the constructor of) this object to another objects

// Color.prototype.rgb = function () {
//   // set as method of 'Color' function, in the 'prototype'
//   // now you can set a function, outside 'Color' function
//   const { r, g, b } = this; // this, refer to color-object
//   return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// // Add new method RGBA
// // Color.prototype.rgba = (a = 1.0) => { do not use 'Arrow functions' since tit works differently
// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r},${g},${b},${a})`;
// };

// const color1 = new Color(255, 255, 25);
// const color2 = new Color(215, 245, 30);

// document.body.style.backgroundColor = color1.rgba(0.3); // TRY RGBA

//Topic: JavaScript Classes================================================================
class Color {
  // 1- Create class
  constructor(r, g, b, name) {
    // 2- always add constructor, it will execute automaticallly, w/o running like 'const c1 = new Color(255, 0, 15)'
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name; // common to see same name as 'property and parameter'
  }

  innerRGB() {
    // Refactor, both rgb and rgba methods
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }

  rgb() {
    // this.innerRGB(); // Reference it. 'refactor:'
    return `rgb(${this.innerRGB()})`; // Put inside88
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()},${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 67, 89);
