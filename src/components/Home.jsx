import React, { useEffect } from 'react';
import MovieList from "../components/MovieList";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/MovieSlice';

function Home() {
  const dispatch = useDispatch();
  const movieText="Harry"
  const showsText="Friends"
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showsText));
  }, [dispatch]);

  return (
    <div>
      <div className='bannerimg'></div>
      <MovieList/>
    </div>
  );
}

export default Home;
