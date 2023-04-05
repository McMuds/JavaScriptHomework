const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  const result = this.words.map((char) => {
    return char.toUpperCase()
  });
  return result;
};

module.exports = UpperCaser;
