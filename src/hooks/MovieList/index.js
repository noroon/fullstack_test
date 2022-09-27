import { useContext, useState } from 'react';
import { gql } from '@apollo/client';

import MovieTitle from '../../components/MovieTitle';
import MovieContent from '../../components/MovieContent';

import { MovieContext } from '../../context/MovieContext';
import './index.scss';

export const GET_MOVIES = gql`
  query getMovies($query: String!) {
    searchMovies(query: $query) {
      id
      name
      overview
      releaseDate
    }
  }
`;

export default function MovieList() {
  const { loading, searchedMovies, movieList } = useContext(MovieContext);
  const [movieDetail, setMovieDetail] = useState({});

  const getSummary = (id, name, overview, releaseDate) => {
    // setError();
    // fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}_${releaseDate}`)
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
      .then((res) => res.json())
      .then((data) => {
        const { extract, content_urls, title } = data;
        if (extract) {
          setMovieDetail({
            id,
            name: title,
            overview: extract,
            url: content_urls.desktop.page,
          });
        } else {
          setMovieDetail({ id, name, overview });
        }
      })
      .catch((error) => {
        // setError(error.message);
      });
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return !searchedMovies ? (
    <></>
  ) : (
    <table>
      <tbody>
        {movieList.map((movie) => (
          <tr key={movie.id}>
            <td>
              <MovieTitle movie={movie} getSummary={getSummary} />
              {movieDetail.id === movie.id && (
                <MovieContent movieDetail={movieDetail} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
