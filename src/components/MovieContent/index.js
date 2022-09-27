import MovieInteractions from '../MovieInteractions';

export default function MovieContent({ movieDetail }) {
  return (
    <div>
      <p>{movieDetail.overview}</p>
      <MovieInteractions movieDetail={movieDetail}/>
    </div>
  );
}
