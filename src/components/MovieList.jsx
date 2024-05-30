import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows, getErrorstatus, getLoadingStatus } from '../features/movies/MovieSlice';
import MovieCard from "./MovieCard";

function MovieList() {
  
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loading = useSelector(getLoadingStatus);
  const error = useSelector(getErrorstatus);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className='movie-error'>
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className='movie-error'>
        <h3>{shows.Error}</h3>
      </div>
    );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='moviewrapper'>
      <div className='my-5'>
        <h2 className='text-fontSecondary mb-[10px] font-normal'>Movies</h2>
        <div className='grid sm:grid-cols-3 md:grid-cols-6 gap-2 min-w-[220px]'>{renderMovies}</div>
      </div>
      <div className='my-5'>
        <h2 className='text-fontSecondary mb-[10px] font-normal'>Shows</h2>
        <div className='grid sm:grid-cols-3 md:grid-cols-6 gap-2 min-w-[220px]'>{renderShows}</div>
      </div>
    </div>
  );
}

export default MovieList;
