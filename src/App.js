import MovieList from './hooks/MovieList';
import SearchForm from './components/SearchForm';
import IMDB from "./hooks/imdb/index"

function App() {
  return (
    <>
      <SearchForm />
      <IMDB/>
      <MovieList />
    </>
  );
}

export default App;
