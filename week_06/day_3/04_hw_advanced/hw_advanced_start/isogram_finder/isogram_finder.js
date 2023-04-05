const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.every(char =>  this.isUnique(char));
}

IsogramFinder.prototype.isUnique = function(char) {
  return (this.word.indexOf(char) === this.word.lastIndexOf(char));
};

module.exports = IsogramFinder;
