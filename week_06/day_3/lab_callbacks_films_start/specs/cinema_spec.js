const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');
const exp = require('constants');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const actual = cinema.getListOfTitles();
    const expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'];
    assert.deepStrictEqual(actual,expected)
  });

  it('should be able to find a film by title', function(){
    const actual = cinema.findFilmByTitle('Black Panther');
    const expected = [blackPanther];
    assert.deepStrictEqual(actual, expected);
  });
  
  
  it('should be able to filter films by genre', function(){
    const actual = cinema.filterFilmsByProperty('genre', 'drama');
    // const actual = cinema.findFilmByGenre('drama');
    const expected = [moonlight, trainspotting];
    assert.deepStrictEqual(actual, expected);
  });
  
  it('should be able to check whether there are some films from a particular year', function(){
    const actual = cinema.findFilmByYear(2017);
    const expected = [bladeRunner, dunkirk, trainspotting];
    assert.deepStrictEqual(actual, expected);
  });
  
  it('should be able to check whether there are no films from a particular year', function(){
    const actual = cinema.findNoFilmsInYear(2011);
    // const actual = cinema.findFilmByYear(2011);
    const expected = true;
    assert.deepStrictEqual(actual, expected);
  });
  
  it('should be able to check whether all films are over a particular length', function(){
    const actual = cinema.findFilmByLength(90);
    const expected = films //we expect all the films back
    assert.deepStrictEqual(actual,expected);
  });
  
  it('should be able to calculate total running time of all films', function(){
    const actual = cinema.filmTotalRunTime();
    const expected = 111 + 164 + 96 + 134 + 117;
    assert.strictEqual(actual,expected);
  });
  
  it('Cinema should be able to filter films by year', function(){
    const actual = cinema.filterFilmsByProperty('year', 2017);
    const expected = [bladeRunner, dunkirk, trainspotting];
    assert.deepStrictEqual(actual,expected);
  });
  
});
