import React, {useEffect, useState} from 'react';
import HeaderText from '../components/core/Home/HeaderText';
import Hero from '../components/core/Home/Hero';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useNavigate} from 'react-router-dom'
import Hero2 from "../assets/Images/Hero2.png" 


import { motion } from 'framer-motion'
import { fadeIn } from '../components/common/motionFrameVariants';




const Home = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const navigate = useNavigate()

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  , [])

  return (
    <>  
    <div
    className='bg-gradient-to-r overflow-x-hidden from-gray-100 md:flex-row to-green-900 '
    >
      <div 
      className='flex bg-gradient-to-r from-gray-100 md:flex-row to-green-900 flex-col items-center w-full '
      style={{height: 'calc(100vh - 64px)'}}
      >
          {/* HEADER TEXT */}

        <motion.div
          initial={{ x: -400, opacity: 0 }} // Initial position outside the viewport on the left
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex items-center w-full justify-center h-60 md:h-full md:w-1/2'
          
        >
          <HeaderText />
        </motion.div>

        {/* HERO */}

        <motion.div
          initial={{ y: 300, opacity: 0 }} // Initial position outside the viewport on the right
          animate={{ y: 0, opacity: 1, }}
          transition={{ duration: 1, delay: 0.2 }}
          drag
          dragConstraints={{ left: -100, right:100, top: -50, bottom: 150 }}
          className='w-full md:h-full md:w-2/3 items-center flex'
        >
          <Hero />
        </motion.div>

        {isMobile && (
        <>
          <motion.div
          className=' w-full h-16 flex items-center justify-center text-white font-bold flex-col'
          style={{position: 'relative', bottom: -180}}
          >
            <span 
            className='tracking-widest cursor-pointer text-3xl'
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth', opacity: 0})}
            >
              Explore 
            </span>
            <KeyboardArrowDownIcon 
            className='' 
            sx={{ fontSize: 50 }}
            />
          </motion.div>
        </>)}
          


      </div>
      
      <div
      className=' md:flex-row flex flex-col items-center md:justify-between justify-around w-full h-screen'
      >
        <motion.div
         className=' md:w-1/2 md:h-full items-center justify-center flex mt-10 md:mt-0'
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
        >
          <img 
          src={Hero2} 
          alt="food" 
          className='w-2/3'
          />
        </motion.div>

        <div
        className='flex flex-col justify-center items-center md:w-1/3 px-10 md:h-full mx-auto '
        >
        <motion.div
          className='flex-col flex gap-5 mb-10'
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h1
          className='text-3xl font-bold'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </motion.div>

        <motion.button type="button" 
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={() => navigate('/store')}
            >
                Checkout Our Menu
            </motion.button>
        </div>
      </div>

    </div>
    </>
  );
};

export default Home;
