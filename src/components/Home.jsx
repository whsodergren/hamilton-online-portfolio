import React from 'react'
import { HiOutlineArrowSmRight } from "react-icons/hi"
// import HeroImage from '../assets/heroImage.jpg'
import { Link } from 'react-scroll'




const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                
                <h2 className='text-4xl sm:text-7xl font-bold text-white font-serif'>Hello, I am <text className='text-blue-500'>Hamilton</text></h2>
                <h3 className='text-3xl text-gray-300 py-4'>Full-Stack Web Developer</h3>
                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-500'>
                            <HiOutlineArrowSmRight size={20} className='ml-1 ' />
                        </span>
                    </Link>
                </div>
            </div>
            {/* <div>
                <img src={HeroImage} alt='profile pic' className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div> */}
        </div>
    </div>
  )
}

export default Home