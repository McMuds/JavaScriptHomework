import MusicItem from "./MusicItem";

const MusicList = ({musicChart}) => {

  const musicItems = musicChart.map((tune, index) => {
    return <MusicItem tune={tune} key={index}/>
  })
  
  return ( 
    <>
      <ol>
        {musicItems}
      </ol>
    </>
   );
}
 
export default MusicList;