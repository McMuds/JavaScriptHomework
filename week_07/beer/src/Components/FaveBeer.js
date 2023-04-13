import './FaveBeer.css'

const FaveBeer = ({beer, removeFave}) => {
  
  const handleClick = (() => {
    removeFave(beer)
  })

  return ( 
    <>
      <div className="fave-beer">
        <img src={beer['image_url']} alt="Beer" onClick={handleClick}/>
        {beer.name}
      </div>
    </>
   );
}
 
export default FaveBeer;