import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png"

function Header() {
  return (
    <div className='bg-secondary h-[72px] px-40 py-0 flex items-center justify-around'>
      <Link to="/">
      <div className='text-fontPrimary text-20 font-semibold'>Movie App</div>
      </Link>
        <div className='w-[38px] h-[38px] '>
          <img src={user} alt='user' />
        </div>
    </div>
  )
}

export default Header