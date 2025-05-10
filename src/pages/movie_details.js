import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../API/contex";

export const MovieDetails = () => {
  const { movie ,setSelectedMovie} = useGlobalContext();
  return (
    <>
      <div className="container">
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster, Year,Type } = curMovie;
          const name=Title.substring(0,15);
          return (
            <NavLink to={`/movie/${imdbID}`} key={imdbID}
            className="movie-card">
              <img src={Poster} alt={Title} />
              <div className="movie-info">
                <h3>{Title.length >= 15 ?`${name}...`:`${name}`}</h3>
                <p>
                  <strong>Year: ({Year})</strong><br/>
                  <strong>Type: {Type.toUpperCase()}</strong>
                  </p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
