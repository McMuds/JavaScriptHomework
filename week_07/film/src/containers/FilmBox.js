import { useState } from "react";
import FilmList from "../components/FilmList";
import NewFilmForm from "../components/NewFilmForm";

const FilmBox = (() => {

  const [filmList, setFilmList] = useState([
    {   id: 1,
      name: "Spider-Man: Into the Spider-Verse",
      url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"},
    {    id: 2,
      name: "Life Itself",
      url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"  },
    {    id: 3,
      name: "Mary Queen of Scots",
      url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"  },
    {    id: 4,
      name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"  },
    {    id: 5,
      name: "Captain Marvel",
      url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"  }
  ]);

  const appendNewFilm = ((film) => {
    const newID = filmList.length + 1
    film.id = newID
    setFilmList([...filmList, film]);
  })

  return (
    <>
      <FilmList filmlist={filmList}/>
      <hr />
      <NewFilmForm onFormSubmit={appendNewFilm} />
    </>
  )
})

export default FilmBox;