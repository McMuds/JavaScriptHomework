import { useState } from "react";
import CapitalCityPicker from "../CapitalCityPicker/CapitalCityPicker";

const CityPicker = ({continents, countries, setContAsProp, setCityAsProp}) => {

  // console.log(`city picker - ${countries}`)
  const [TypedCity,setTypedCity] = useState("")

  const handleInputChange = function(event){
    console.log(event.target.value)
    setTypedCity(event.target.value)
  }

  const handleClick = function(event){
    console.log(`about to set city as prop ${TypedCity}`)
    setCityAsProp(TypedCity)
    setTypedCity("")
  }

  return ( 
    <>
      <h5>Choose a City</h5>
      <p>either type a city name or use the selectors to pick a continent and capital city</p>
      <input type="text" placeholder="Type the name of a city" onChange={handleInputChange} value={TypedCity}></input>
      <button onClick={handleClick}>Show Weather</button>
      <CapitalCityPicker continents={continents} countries={countries} setContAsProp={setContAsProp} setCityAsProp={setCityAsProp}/>
    </>
   );
}
 
export default CityPicker;