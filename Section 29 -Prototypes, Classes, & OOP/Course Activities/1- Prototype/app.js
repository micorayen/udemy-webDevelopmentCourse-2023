String.prototype.yell = function () {
  //add own method in string-prototype
  return `OMG, ${this.toUpperCase()}!!!!!`;
};

Array.prototype.pop = () => {
  //replace existing methodin array
  return `I Wont pop it!!!!`;
};
