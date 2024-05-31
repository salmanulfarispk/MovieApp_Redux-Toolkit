import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/MovieSlice'

function Header() {
  const [term,setTerm]=useState('')
  const dispatch=useDispatch()
  const submitHandler=(e)=>{
    e.preventDefault();
  dispatch(fetchAsyncMovies(term))
  dispatch(fetchAsyncShows(term))
  setTerm("")
  }
  return (
    <div className='bg-secondary h-[72px] px-10  flex items-center justify-between'>
      <div className='text-fontPrimary text-3xl font-semibold'>
      <Link to="/">
        Movie App
      </Link>
        </div>
        <div className='w-1/2 flex justify-center'>
          <form onSubmit={submitHandler} className='flex justify-center w-[70%] gap-1'>
           <input type='text' placeholder='Search Movies or Shows' value={term} onChange={(e)=>setTerm(e.target.value)}
           className='font-medium w-full px-2 py-1 rounded-md h-[38px] outline-none'/>
           <button type='submit' className='px-2 py-1 bg-blue-300 rounded-md text-md h-[38px] 
           cursor-pointer'><FontAwesomeIcon icon={faSearch}/></button>
          </form>
        </div>
        <div className='w-[38px] h-[38px] '>
          <img src={user} alt='user' />
        </div>
    </div>
  )
}

export default Header