import React, {useState}  from "react";
import MovieCard from '../MovieCard/MovieCard'
import "./styles.css";

const MovieList = () => {

  const [year, setYear] = useState("");
  const [movies, setMovies] = useState([]);

  const handleClick = () => {
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
      .then(response => response.json())
      .then(data => setMovies(data.data))
      .catch(e => console.log(e))
  }

  return (
    <div className="flex flex-col content-center mt-12">
      <section className="flex flex-row content-center justify-center">
        <input type="number" className="form-input" placeholder="Enter Year eg 2015" data-testid="app-input" onBlur={(e) => setYear(e.target.value)}/>
        <button className="rounded-sm bg-green-400 border-2 border-green-400 text-white ml-3 px-2.5 hover:drop-shadow-lg" data-testid="submit-button" type="submit" onClick={handleClick}>Search</button>
      </section>
      
      {movies.length > 0 && 
        <ul className="mt-12 styled" data-testid="movieList">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie}/>  
          ))}
        </ul>
      }
      {movies.length === 0 && year !== "" &&
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">
          <p>No results found {movies.length}</p>
        </div>
      }
    </div>
  );
}

export default MovieList;