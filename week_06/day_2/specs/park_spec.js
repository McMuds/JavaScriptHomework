const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let myPark = null;
  let dino1 = null;
  let dino2 = null;
  let dino3 = null;

  beforeEach(function () {
    dino1 = new Dinosaur('Peppa Pig', 'BoJos', 100);
    dino2 = new Dinosaur('T-Rex', 'Toilet People', 500);
    dino3 = new Dinosaur('Diplodocus', 'Trees', 200);
    dino4 = new Dinosaur('T-Rex', 'Toilet People', 300)
    dino5 = new Dinosaur('Mark Bolan', 'BoJos', 800)
    myPark = new Park('Peppa Pig World', 9.90, [dino1, dino2]);
  })

  it('should have a name', function() {
    const actual = myPark.name;
    assert.strictEqual(actual, 'Peppa Pig World');
  });

  it('should have a ticket price', function() {
    const actual = myPark.price;
    assert.strictEqual(actual,9.90)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = myPark.dinosaurs
    assert.deepStrictEqual(actual, [dino1, dino2])
  });
  
  it('should be able to add a dinosaur to its collection', function(){
    myPark.addADinosaur(dino3)
    const actual = myPark.dinosaurs
    assert.deepStrictEqual(actual, [dino1, dino2, dino3])

  });

  it('should be able to remove a dinosaur from its collection', function(){
    myPark.addADinosaur(dino3);
    myPark.removeDinosaurByName(dino2);
    const actual = myPark.dinosaurs
    assert.deepStrictEqual(actual,[dino1, dino3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = myPark.findMostPopularAttraction();
    assert.deepStrictEqual(actual,dino2)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    myPark.addADinosaur(dino3);
    myPark.addADinosaur(dino4);
    const actual = myPark.getDinosaursBySpecies('T-Rex');
    assert.deepStrictEqual(actual, [dino2, dino4]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = myPark.returnVisitorTotal();
    assert.strictEqual(actual, 600);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = myPark.returnAnnualVisitors();
    assert.strictEqual(actual, 600*360); //it has 5 days off a year.
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = myPark.returnTotalRevenue();
    assert.strictEqual(actual, 600*360*9.90);
  });

  //Extensions:
  it('should be able to remove all dinosaurs of a certain species', function(){
    myPark.addADinosaur(dino3);
    myPark.addADinosaur(dino4);
    myPark.removeAllDinosaursBySpecies('T-Rex');
    const actual = myPark.dinosaurs
    assert.deepStrictEqual(actual, [dino1, dino3])
  });
  
  it('should return an object of foods and counts', function(){
    myPark.addADinosaur(dino3);
    myPark.addADinosaur(dino4);
    myPark.addADinosaur(dino5);
    const actual = myPark.getFoodsAndCounts();
    const expected = {'BoJos': 2, 'Toilet People': 2, 'Trees': 1}
    assert.deepStrictEqual(actual, expected);
  });

});
