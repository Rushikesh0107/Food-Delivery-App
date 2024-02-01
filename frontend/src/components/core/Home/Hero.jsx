import React from 'react'
import {motion} from 'framer-motion'
import HeroImage from "../../../assets/Images/Hero.webp"

const Hero = () => {
  return (
    <motion.div
    className='w-full'
    >
        <motion.img 
        src={HeroImage}
        alt="hero" 
        className=' mx-auto'
        style={{width: '100%', height: '100%'}}
        whileHover={{ rotate: 20, scale: 1.1 }}
        />
    </motion.div>
  )
}

export default Hero