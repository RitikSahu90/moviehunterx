import React, { useContext } from 'react'
import { AppContext } from '../API/contex'
import { MovieDetails } from './movie_details';

// b55a877a
//http://www.omdbapi.com/?i=tt3896198&apikey=b55a877a
export const Home = () => {
  const name=useContext(AppContext);// const name=useGlobalContext();
  return (
    <>
    <MovieDetails/>
    </>
  )
}
