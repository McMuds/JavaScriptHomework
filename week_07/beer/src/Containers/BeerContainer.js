import { useEffect, useState } from "react";
import BeerDeets from "../Components/BeerDeets";
import BeerList from "../Components/BeerList";
import Favourites from "../Components/Favourites";
import './BeerContainer.css';

const BeerContainer = () => {

  const [ListOfBeers, setListOfBeers] = useState([]);
  const [FaveBeers, setFaveBeers] = useState([]);
  const [ChosenBeer, setChosenBeer] = useState(null);

  useEffect(() => {
    getBeersFromAPI();
  },[]);
  
  useEffect(() => {
  },[FaveBeers])
  
  const getBeersFromAPI = function(){
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then(resp => resp.json())
    .then(data => setListOfBeers(data))
  };
  
  const setChosenBeerAsProp = ((beer) => {
    setChosenBeer(beer);
  })
  
  const addBeerToFavourites = function(){
    if (!FaveBeers.includes(ChosenBeer)){
      setFaveBeers([...FaveBeers, ChosenBeer])
    }
  }
  
  const removeFave = function(beerToRemove){
    const index = FaveBeers.indexOf(beerToRemove)
    const newList = [...FaveBeers]
    newList.splice(index, 1)
    setFaveBeers(newList)
  }
  
  return ( 
    <>
      <h1>Claire's Beer Hive</h1>
      <span className='horiz-container'>
        <BeerList beerList={ListOfBeers} setChosenBeerAsProp={setChosenBeerAsProp}/>
        <BeerDeets chosenBeer={ChosenBeer} addToFaves={addBeerToFavourites}/>
      </span>
      <Favourites favesList={FaveBeers} removeFaves={removeFave}/>
    </>
   );
}
 
export default BeerContainer;