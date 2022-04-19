import "./styles.css";

const MovieCard = ({movie}) => {
  return (
    <li className="slide-up-fade-in py-10">
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">View title on IMDB</a>
    </li>
  )
}

export default MovieCard;