const Dinosaur = require("./dinosaur");

const Park = function(name, price, dinosaurs){
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addADinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurByName = function(dinosaur){
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur,1);
};

Park.prototype.findMostPopularAttraction = function(){
  let mostPopular = this.dinosaurs[0];
  for (var dino of this.dinosaurs){
    if (mostPopular.guestsAttractedPerDay < dino.guestsAttractedPerDay){
      mostPopular = dino;
    };
  };
  return mostPopular;
}

Park.prototype.getDinosaursBySpecies = function(species){
  const speciesList = [];
  for (var dino of this.dinosaurs){
    if (dino.species === species){
      speciesList.push(dino);
    }
  }
  return speciesList;
};

Park.prototype.returnVisitorTotal = function(){
  let visitorTotal = 0;
  for (var dino of this.dinosaurs){

    visitorTotal += dino.guestsAttractedPerDay;
  }
  return visitorTotal;
};

Park.prototype.returnAnnualVisitors = function(){
  const dailyVisitors = this.returnVisitorTotal();
  return dailyVisitors * 360;
};
              
Park.prototype.returnTotalRevenue = function(){
  const annualVisitors = this.returnAnnualVisitors();
  return annualVisitors * this.price;
};

//Extensions
Park.prototype.removeAllDinosaursBySpecies = function(species){
  // first solution is in place alteration of the list.
  // for (i = this.dinosaurs.length - 1; i >= 0; i--){
  //   let currDino = Dinosaur
  //   currDino = this.dinosaurs[i];
  //   if (currDino.species === species){
  //     this.dinosaurs.splice(i,1);
  //   };
  // };
  const speciesList =[]
  for (const dino of this.dinosaurs){
    if (dino.species === species){
    }
    else{
      speciesList.push(dino)
    };
  };
  this.dinosaurs = speciesList;
};

Park.prototype.getFoodsAndCounts = function(){
  const result = {}
  for (const dino of this.dinosaurs){
    let currValue = result[dino.diet];
    if (currValue === undefined){
      currValue = 1;
    }
    else{
      currValue++;
    };
    result[dino.diet] = currValue;
  };
  return result
};

module.exports = Park