import React, {useState} from 'react';

const NewFilmForm = ({onFormSubmit}) => {
  const [newFilmName, setFilmName] = useState('')
  const [newFilmURL, setFilmURL] = useState('')

  const handleNameChange = ((event) => {
    setFilmName(event.target.value)
  });

  const handleURLChange = ((event) => {
    setFilmURL(event.target.value)
  });
  
  const handleFormSubmit=((event) => {
    event.preventDefault();
    //append to list via callback from container
    onFormSubmit({name: newFilmName, url: newFilmURL})
    //clear existing fields
    setFilmName('');
    setFilmURL('');
  });

  return ( 
    <>
      <h3>Add a new film to the above list</h3>
      <form id='new-film-form' onSubmit={handleFormSubmit}>
        <span>
          <label htmlFor="film-name">Film Name: </label>
          <input type="text" id="film-name" placeholder="Film Name" 
                  onChange={handleNameChange} value={newFilmName}/>
        </span>
        <span>
          <label htmlFor="film-url">URL: </label>
          <input className="url-input" type="text" id="film-url" placeholder="URL" 
                  onChange={handleURLChange} value={newFilmURL}/>
        </span>
        <span>
          <button>Submit</button>
        </span>
      </form>
    </>
   );
}
 
export default NewFilmForm;