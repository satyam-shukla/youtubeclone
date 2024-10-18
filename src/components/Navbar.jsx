import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import { RiVideoAddLine } from 'react-icons/ri';
import { BsBell } from 'react-icons/bs';



const Navbar = () => {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky '>
      <div className='flex gap-8 items-center text-2xl '>
        <div>
          <GiHamburgerMenu />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <FaYoutube className='text-3xl text-red-600' />
          <span className='text-2xl '>Youtube</span>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5 '>
        <form >
          <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
            <div className='flex gap-5 items-center pr-5'>
              <input type="text" placeholder='Search' className='w-96 text-white bg-zinc-900 focus:outline-none border-none' />
            </div>
            <button className='flex items-center justify-center bg-zinc-800 h-10 w-16 rounded-r-3xl'>
              <AiOutlineSearch className='text-xl ' />
            </button>
          </div>
        </form>
        <div className='text-xl p-3 rounded-full bg-zinc-900'>
          <FaMicrophone />
        </div>
      </div>

      <div className='flex items-center text-xl gap-8'>
        <RiVideoAddLine />
        <div className='relative'>
          <BsBell />
          <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
        </div>
        <img className='h-9 w-9 rounded-full' src="https://plus.unsplash.com/premium_photo-1675129779591-c24711697580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsfGVufDB8fDB8fHww" alt="profile_image" />
      </div>
    </div>
  )
}

export default Navbar

