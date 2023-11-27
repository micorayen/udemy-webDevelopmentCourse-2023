// rgb(199,54,23)
// rgba(199,54,23,0.8)
// #76FF32
// hsl(180,50%,30%)
// const red = new Color(255, 67, 89, "tomato")
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    // this.calcHSL();
  }
}
const navColor = new Color(230, 126, 34, "Orange");
const logoColor = new Color(46, 204, 113, "Red");

color.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
6;
