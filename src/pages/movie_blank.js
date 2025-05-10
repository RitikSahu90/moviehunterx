import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieBlank = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Something went wrong.....");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p className='resorce'>Loading...</p>;
  if (error) return <p className='resorce'>{error}</p>;

  console.log(movie)
  return (
    <div className="movie-details-page">
      <div className='card'>
      <h1><u>{movie.Title}</u></h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Type:</strong> {movie.Type}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>BoxOffice:</strong> {movie.BoxOffice}</p>
      <p>
        <u><strong>Ratings:</strong>{" "}</u>
        <br/>
        {movie.Ratings.map((rating, index) => (
          <span key={index}>
            {rating.Source==="Internet Movie Database"?"IMDB":rating.Source}: {rating.Value}
            {index < movie.Ratings.length - 1 ? ", " : ""}
            <br/>
          </span>
        ))}
      </p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
};
