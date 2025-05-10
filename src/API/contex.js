import React, { useContext, useEffect, useState } from "react";

// Create context
const AppContext = React.createContext();

// AppProvider component
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoad] = useState(true);
  const [movie, setmovie] = useState([]);
  const [isError, setIserror] = useState({ show: false, msg: " " });
  const [query, setQuery] = useState(""); 
  const [selectedMovie, setSelectedMovie] = useState('null');
  const [exquery]=useState("Abc")

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoad(false);
        setmovie(data.Search);

      } else {
        setIserror({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const search = query === "" ? exquery : query;
      getMovies(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
    }, []);


    return () => clearTimeout(timer);
  }, [query]);

  return (
    <AppContext.Provider value={{ isError, isLoading, movie, query, setQuery ,setSelectedMovie}}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
