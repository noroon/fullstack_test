import { useLazyQuery } from '@apollo/client';
import { createContext, useState, useEffect } from 'react';
import { GET_MOVIES } from '../hooks/MovieList';

export const MovieContext = createContext({
  movieList: [],
  setMovieList: () => {},
  getMovies: () => {},
  loading: {},
  searchedMovies: {},
});

export const MovieProvider = ({ children }) => {
  const [getMovies, { loading, data: searchedMovies }] =
    useLazyQuery(GET_MOVIES);

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (searchedMovies) {
      (async function () {
        const { searchMovies } = await searchedMovies;
        setMovieList(searchedMovies.searchMovies);
      })();
    }
  }, [searchedMovies]);

  const value = { movieList, setMovieList, getMovies, loading, searchedMovies };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
