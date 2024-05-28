import React, { useEffect } from 'react'
import MovieList from "../components/MovieList"
import MovieApi from '../common/apis/MovieApi'
import { APIkey } from '../common/apis/MovieApiKey'

function Home() {

  useEffect(()=>{
    const movietext="Harry";
    const fetchMovies=async()=>{
      try {
      const response= await MovieApi.get(`?apikey=${APIkey}&s=${movietext}&type=movie`)
        console.log("The Response :" ,response);
      } catch (error) {
        console.log("Error : ",error);
      }
    };

    fetchMovies()
  },[])

  return (
    <div className=''>
      <div className=''> banner img</div>
      <MovieList/>
    </div>
  )
}

export default Home