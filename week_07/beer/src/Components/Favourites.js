import FaveBeer from "./FaveBeer";
import './Favourites.css'

const Favourites = ({favesList, removeFaves}) => {

  const faveItem = favesList.map((drink, index) => {
    return <FaveBeer beer={drink} key={index} removeFave={removeFaves}/>
  });

  if (favesList.length === 0){
    return <h3>You have no favourites</h3>
  }
  const temp = favesList.map((beer) => {
    return beer.name
  })

  return (  
    <>
      <span>

      <h2>Favourites</h2>(click to remove)
      </span>
      <div className="favourites">
        {faveItem}
      </div>
    </>
  );
}
 
export default Favourites;