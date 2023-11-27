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

//Topic: More Classes Practice================================================================
class Color {
  // 1- Create class
  constructor(r, g, b, name) {
    // 2- always add constructor, it will execute automaticallly, w/o running like 'const c1 = new Color(255, 0, 15)'
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name; // common to see same name as 'property and parameter'

    this.calcHSL(); // to call method automatically
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

  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  fullySaturated() {
    const { h, l } = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }

  opposite() {
    const { h, s, l } = this;
    // create variable for h - (Hue)
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }

  calcHSL() {
    //
    // const { r, g, b } = this; // can't assign const, since code written as updating
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
    // console.log(this);
  }
}

const red = new Color(255, 10, 89, "tomato");
const orange = new Color(230, 126, 34, "carrot");
const hsl1 = new Color(100, 0, 0, "white");
