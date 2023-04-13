const Beer = ({beer, setChosenBeerAsProp}) => {

  const handleClick = function(){
    setChosenBeerAsProp(beer)
  }

  return (
    <>
      <li onClick={handleClick} id={beer.key} value={beer.name}>{beer.name}</li>
    </>
    );
}
 
export default Beer;