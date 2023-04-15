const CapitalCityPicker = ({continents, countries, setContAsProp, setCityAsProp}) => {
  
  const continentList = continents.map((continent, index) => {
    return <option key={index} value={continent}>{continent}</option> 
  })

  const citiesList = countries.map((country, index) => {
    const capitalCity = country.capital
    // console.log(`capital: ${capitalCity}`)
    return <option key={index} value={capitalCity}>{country['name']['common']} - {capitalCity}</option> 
  })

  const handleContinentChange = function(event){
    console.log(`handling Cont change here ${event.target.value}` )
    setContAsProp(event.target.value)
  }

  const handleCityChange = function(event){
    console.log(`handling City change here ${event.target.value}` )
    setCityAsProp(event.target.value)
  }

  return ( 
    <>
      <h4>Capital City Picker</h4>
        <label htmlFor="continents"></label>
        <select name="continents" id="continents" onChange={handleContinentChange}>
          {continentList}
        </select>
        <br />
        <select name="capital-cities" id="capital-cities" onChange={handleCityChange}>
          {citiesList}
        </select>
    </>
   );
}
 
export default CapitalCityPicker;