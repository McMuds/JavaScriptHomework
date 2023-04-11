import FilmBox from './containers/FilmBox';
import './App.css';

function App() {
  return (
    <>
      <section className='App-header'>Upcoming Film Releases for the UK</section>
      <hr />
      <FilmBox/>
      <hr />
      <span className='more-releases'>
        <a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Releases &gt;&gt;</a>
      </span>
    </>
  );
}

export default App;
