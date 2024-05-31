import React, { useEffect } from 'react';
import MovieList from "../components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows, getLoadingStatus } from '../features/movies/MovieSlice';
import { SpinnerDotted } from 'spinners-react';

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);

  const movieText = "Harry";
  const showsText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showsText));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SpinnerDotted size={90} thickness={137} speed={104} color="rgba(57, 136, 172, 1)" />
      </div>
    );
  }


  return (
    <div>
      <div className='bannerimg'></div>
      <MovieList />
    </div>
  );
}

export default Home;
