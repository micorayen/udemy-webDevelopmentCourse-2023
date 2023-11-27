// rgb(199,54,23)
// rgba(199,54,23,0.8)
// #76FF32
// hsl(180,50%,30%)
// const red = new Color(255, 67, 89, "tomato")

function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb${r},${g},${b}`;
}

// hex(255, 100, 25);
// rgb(110,110,25)

// 1- focus here is on function, first the function w/ arguments
// 2- create color object , which is empty
// 3- create properties "color.r = r" etc, based on arguments provided
// 4- then we add some methods
// 5- then we return results of that object
// 6- this is called factory functions, one way of making obj based on some pattern or recipe
function makeColor(r, g, b) {
  const color = {}; // this called factory, by storing method on this object
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    // Added Method
    // console.log(this);
    const { r, g, b } = this; // this, refer to color-object
    return `rgb(${r},${g},${b})`;
  };

  color.hex = function () {
    //Added Method inside makeColor Object, unlike rgb-function that need to pass rgb parameters
    // no arguments necessary

    const { r, g, b } = this; // this, refer to color-object
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 32);
firstColor.rgb(); //it looks on left objects for parameters

// can change r or others specifically
firstColor.r = 255;
