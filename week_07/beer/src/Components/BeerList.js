import Beer from "./Beer";
import './BeerList.css';

const BeerList = ({beerList, setChosenBeerAsProp}) => {

  const BeerItem = beerList.map((drink, index) => {
    return <Beer beer={drink} key={index} setChosenBeerAsProp={setChosenBeerAsProp}/>
  });

  return ( 
    <>
      <div className='vert-container'>
        <h2>BeerList</h2>
        <ul>
          {BeerItem}
        </ul>
        <h2>End of BeerList</h2>
      </div>
    </>
   );
}
 
export default BeerList;