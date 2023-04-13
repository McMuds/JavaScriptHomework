import CityPicker from "../Components/CityPicker/CityPicker";
import DailyWeather from "../Components/DailyWeather/DailyWeather";
import Favourites from "../Components/Favourites/Favourites";
import './WeatherBox.css'

const WeatherBox = () => {
  return ( 
    <>
      <div className="horizontal-container">
        <div>
          <h2>Weather Box</h2>
          <CityPicker/>
        </div>
        <DailyWeather/>
      </div>
      <Favourites/>
    </>
   );
}
 
export default WeatherBox;