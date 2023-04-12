const MusicItem = ({tune}) => {
  return ( 
    <>
    <li>{tune["im:name"]["label"]} - {tune["im:artist"]["label"]}</li>
    </>
   );
}
 
export default MusicItem;