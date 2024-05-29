import React, { useEffect } from 'react'
import MovieList from "../components/MovieList"
import MovieApi from '../common/apis/MovieApi'
import { APIkey } from '../common/apis/MovieApiKey'
import { useDispatch } from "react-redux"
import { addMovies } from '../features/movies/MovieSlice'


function Home() {

  const movietext="Harry";
  const dispatch=useDispatch()


  useEffect(()=>{
   
    const fetchMovies=async()=>{
      try {
      const response= await MovieApi.get(`?apikey=${APIkey}&s=${movietext}&type=movie`)
        dispatch(addMovies(response.data));
      } catch (error) {
        console.log("Error : ",error);
      }
    };

    fetchMovies();
    
  },[dispatch])

  return (
    <div className=''>
      <div className=''> banner img</div>
      <MovieList/>
    </div>
  )
}

export default Home