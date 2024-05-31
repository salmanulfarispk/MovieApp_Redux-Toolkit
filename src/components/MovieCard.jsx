import React from 'react';
import { Link } from 'react-router-dom';


export default function MovieCard({ data }) {
  return (
    <div className='bg-secondary cursor-pointer h-full m-2 rounded-lg transition-all duration-300
     hover:scale-105  min-h-[450px]'>
      <Link to={`/movie/${data.imdbID}`}>
      <div className='cardinner'>
        <div className='h-[300px]'>
          <img src={data.Poster} alt={data.Title} className='w-full h-full' />
        </div>
        <div className='p-2'>
          <div className='text-fontPrimary'>
            <h4 className='text-[22px] font-normal mb-3'>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
