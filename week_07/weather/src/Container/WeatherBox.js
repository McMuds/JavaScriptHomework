import { useEffect, useState } from "react";
import CityPicker from "../Components/CityPicker/CityPicker";
import DailyWeather from "../Components/DailyWeather/DailyWeather";
import Favourites from "../Components/Favourites/Favourites";
import './WeatherBox.css'

const WeatherBox = () => {

  const countriesAPI = 'https://restcountries.com/v3.1/region/'
  // const weatherAPI = 'https://goweather.herokuapp.com/weather/{SelectedCity}'
  const weatherAPI = 'https://goweather.herokuapp.com/weather/'
  const continents = ["Africa", "Oceania", "Europe", "Asia", "Americas", "Antarctic"]

  const [Countries, setCountries] = useState([]);
  const [Weather, setWeather] = useState([]);
  const [SelectedContinent, setSelectedContinent] = useState("Africa");
  const [SelectedCity, setSelectedCity] = useState(null);

  // useEffect(() => {
  //   console.log(`UseEffect on load ${continents[0]}`)
  //   selectContinent(continents[0])
  // },[]);
  
  useEffect(() => {
    console.log(`UseEffect because Continent Chosen ${SelectedContinent}`);
    getCountries()
  },[SelectedContinent]);
  
  useEffect(() => {
    console.log(`UseEffect because City Chosen ${SelectedCity}`)
    getWeather()
  },[SelectedCity]);
  
  const getCountries =  function() {
    console.log(`${countriesAPI + SelectedContinent}`)
    fetch(countriesAPI + SelectedContinent)
    .then(resp => resp.json())
    // .then(data => console.log(data))
    .then(data => setCountries(data))
    console.log(Countries)
  }
  
  const getWeather = function() {
    fetch(weatherAPI + SelectedCity)
    .then(resp => resp.json())
    // .then(data => setWeather(data))
    .then(data => console.log(data))
  }
  
  const selectContinent = ((continent)=>{
    console.log(`1: selectingContinent ${continent}`)
    setSelectedContinent(continent);
    console.log(`2: selectingContinent ${continent} - ${SelectedContinent}`)
  });
  
  const selectCity = ((city)=>{
    console.log(`1: selectingCity ${city}`)
    setSelectedCity(city);
    console.log(`2: selectingCity ${city} - ${SelectedCity}`)
  });
  
  return ( 
    <>
      <div className="horizontal-container">
        <div>
          <CityPicker continents={continents}  countries={Countries} setContAsProp={selectContinent} setCityAsProp={selectCity}/>
        </div>
        <DailyWeather/>
      </div>
      <Favourites/>
    </>
   );
}
 
export default WeatherBox;