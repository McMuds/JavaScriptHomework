const AnagramFinder = function (word) {
  this.word = word.split('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const result = otherWords.foreach((word) => {
    const result2 = word.every((char) => this.isAnagram

      }
    });
  })

  });
}

AnagramFinder.prototype.isAnagram = function () {
  const result = this.alphabet.every((char) => {
    return this.phrase.toLowerCase().includes(char);
  });
  return result;
};

// No idea - what I want to do is:
// for each word in the Array, do a count comparison of the two words.
// If equal, forEach letter in the AnagramFinder word, remove each 
// letter(firstIndexOf) in the Array word. If there's anything left in the 
// Array.word after the AnagramFinder word, then return false.

module.exports = AnagramFinder;
