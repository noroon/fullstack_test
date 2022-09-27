export default function MovieTitle({ movie, getSummary }) {
  const { id, name, title, releaseDate, release_date, overview } = movie;
  const movieTitle = name || title;
  const movieReleaseDate = releaseDate || release_date;

  return (
    <>
      <button onClick={() => getSummary(id, movieTitle, overview, movieReleaseDate)}>
        {movieTitle}
        {movieReleaseDate && ` (${movieReleaseDate.slice(0, 4)})`}
      </button>
    </>
  );
}
