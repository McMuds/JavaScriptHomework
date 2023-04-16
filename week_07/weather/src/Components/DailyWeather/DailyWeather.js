import DailyDetail from '../DailyDetail/DailyDetail';
import DailySummary from '../DailySummary/DailySummary';
import './DailyWeather.css'
const DailyWeather = ({weather, selectedcity}) => {

  const weatherList = weather.forecast.map((day, index) => {
    return <li key={index}>day {index + 1}: temp: {weather.temperature}</li> 
  })

  return ( 
    <>
      <div className="vert-container">
        <h4>Daily Weather for {selectedcity}</h4>
        <DailyDetail weather={weather}/>
        <div>
          Three Day Forecast
          <ul>
            {weatherList}
          </ul>
        </div>
      </div>
    </>
   );
}
 
export default DailyWeather;