import React, { useEffect } from 'react'
import MovieList from "../components/MovieList"

import { useDispatch } from "react-redux"
import { addMovies } from '../features/movies/MovieSlice'


function Home() {

  const dispatch=useDispatch()


  useEffect(()=>{
   
    const fetchMovies=async()=>{
      
    };

    fetchMovies();

  },[dispatch])

  return (
    <div>
      <div className='bannerimg'></div>
      <MovieList/>
    </div>
  )
}

export default Home