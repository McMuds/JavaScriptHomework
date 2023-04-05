const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfTitles = function(){
  const result = this.films.map((film) =>{
    return film.title;
  });
  return result;
};

Cinema.prototype.findFilmByTitle = function(title){
  const result = this.films.filter((film) => {
    return (film.title === title);
  });
  return result;
}

Cinema.prototype.findFilmByGenre = function(genre){
  const result = this.films.filter((film) => {
    return (film.genre === genre);
  });
  return result;
}

Cinema.prototype.findFilmByYear = function(year){
  const result = this.films.filter((film) => {
    return (film.year === year);
  });
  return result;
}

Cinema.prototype.findNoFilmsInYear = function(year){
    const result = this.films.filter((film) => {
        return (film.year === year);
      });
      return (result.length === 0)
  }
      
Cinema.prototype.findFilmByLength = function(length){
  const result = this.films.filter((film) => {
    return (film.length > length);
  });
  return result;
}

Cinema.prototype.filmTotalRunTime = function(){
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  },0);
  return result;
}

Cinema.prototype.filterFilmsByProperty = function(property, year){
  const result = this.films.filter((film) => {
    return (film[property] === year);
  });
  return result;
}

module.exports = Cinema;
      