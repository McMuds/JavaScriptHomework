import React, { useEffect, useState } from 'react';
import Header from "../Components/Header";
import MusicList from "../Components/MusicList";

const MusicBox = () => {
  
  const [musicChart, setMusicChart] = useState([])

  useEffect(() => {
    getChart();
  },[])

  const getChart = function(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(resp => resp.json())
    .then(data => setMusicChart(data.feed.entry))
  }

  return ( 
    <>
      <Header genre="All"/>
      <MusicList musicChart={musicChart}/>
    </>
   );
}
 
export default MusicBox;