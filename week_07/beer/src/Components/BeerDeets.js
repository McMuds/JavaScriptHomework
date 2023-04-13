import './BeerDeets.css'
// import BeerList from './BeerList';
import BeerItem from './BeerItem';

const BeerDeets = ({chosenBeer, addToFaves}) => {
  if (chosenBeer === null) {
    return(
      <>
        <p className='initial'>Please Select A Beer for more information</p>;
      </> 
    )
  }
  const beerPairingList = chosenBeer['food_pairing'].map((pairing, index)=>{
    return <BeerItem pairing={pairing} key={index}/>
    })
  
  const handleButtonClick = (() => {
    addToFaves(chosenBeer)
  })

  return ( 
    <>
      <div className='container'>
        <h2>{chosenBeer.name}</h2>
        
        <button onClick={handleButtonClick} className='fave-button'>Mark as Favourite</button>
        
        <img className='big-image' src={chosenBeer['image_url']} alt="Beer"/>
        <i>'{chosenBeer.tagline}'</i>
        <p>First brewed in {chosenBeer['first_brewed']}, {chosenBeer.name} is described as:</p>
        <p className='description'>{chosenBeer.description}</p>
        <span>
          <b>ABV: </b> {chosenBeer.abv} %
        </span>
        <span>
          <ul>
          <b>Food Pairing</b>
            {beerPairingList}
          </ul>
        </span> 
      
      </div>
    </>
   );
}
 
export default BeerDeets;