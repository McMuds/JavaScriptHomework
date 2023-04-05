const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const result = this.alphabet.every((char) => {
    return this.phrase.toLowerCase().includes(char);
  });
  return result;
};

module.exports = PangramFinder;
