import { useContext } from 'react';

import { MovieContext } from '../../context/MovieContext';
import Button from './../common/Button';

export default function MovieInteractions({ movieDetail }) {
  const { id, name, url } = movieDetail;
  const { setMovieList } = useContext(MovieContext);

  const getRelatedMovies = (movieId, movieTitle) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    // setError('');
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setMovieList(results);
        // setMovieList([{ relatedTo: movieTitle }, ...results]);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        // setError(error.message);
      });
  };

  return (
    <div className="d-flex flex-column align-items-end p-0">
      {url && (
        <a href={`${url}`} target="_blank" rel="noopener noreferrer">
          Read more »
        </a>
      )}
      <a
        href={`https://www.themoviedb.org/movie/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check it on TMDB »
      </a>
      <Button
        className="btn-primary"
        onClick={() => getRelatedMovies(id, name)}
        value="Related movies"
      />
    </div>
  );
}
