import Film from "./Film";

const FilmList = (({filmlist}) => {
  return ( 
      <ul>
        {filmlist.map(film => <Film name={film.name} key={film.id} url={film.url}/>)}    
      </ul>
   );
});
 
export default FilmList;