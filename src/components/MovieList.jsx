import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows, getErrorstatus, getLoadingStatus } from '../features/movies/MovieSlice';
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { settings } from '../common/settings';



function MovieList() {
  
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
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

  if (error) return <div>Error: {error}</div>;



  return (
    <div className='moviewrapper'>
      <div className='my-5'>
        <h2 className='text-fontSecondary mb-[10px] font-normal'>Movies</h2>
        <div>
          <Slider {...settings}>
          {renderMovies}
          </Slider>
          </div>
      </div>
      <div className='my-5'>
        <h2 className='text-fontSecondary mb-[10px] font-normal'>Shows</h2>
        <div>
        <Slider {...settings}>
          {renderShows}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
