const DailyDetail = ({weather}) => {
  return ( 
    <>
      <h6>Today's Detail</h6>
      {weather.description}
      {weather.temperature}
      {weather.wind}
    </>
   );
}
 
export default DailyDetail;