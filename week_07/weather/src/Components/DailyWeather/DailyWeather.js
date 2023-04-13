import DailyDetail from '../DailyDetail/DailyDetail';
import DailySummary from '../DailySummary/DailySummary';
import './DailyWeather.css'
const DailyWeather = () => {
  return ( 
    <>
      <div className="vert-container">
        <h3>Daily Weather</h3>
        <DailyDetail/>
        <DailySummary/>
        <DailySummary/>
      </div>
    </>
   );
}
 
export default DailyWeather;