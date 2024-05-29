import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png"

function Header() {
  return (
    <div className='bg-secondary h-[72px] px-10  flex items-center justify-between'>
      <Link to="/">
      <div className='text-fontPrimary text-3xl font-semibold'>Movie App</div>
      </Link>
        <div className='w-[38px] h-[38px] '>
          <img src={user} alt='user' />
        </div>
    </div>
  )
}

export default Header