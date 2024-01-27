import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
    className='w-full '
    >
        <motion.img 
        src="https://res.cloudinary.com/ddara3sez/image/upload/v1706347958/epsqxc75egpme6brxjpq.webp" 
        alt="" 
        className=' mx-auto'
        style={{width: '90%', height: '80%'}}
        whileHover={{ rotate: 20, scale: 1.1 }}
        />
    </motion.div>
  )
}

export default Hero