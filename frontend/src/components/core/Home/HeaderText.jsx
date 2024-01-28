import React from 'react'
import {motion} from 'framer-motion'

const HeaderText = () => {

    return (
        <motion.div
        className='font-bold text-5xl md:tracking-widest md:text-6xl'
        >
            <p>
                Healthy Eating
            </p>
            <p>
                Reinvented
            </p>
            <div>
            <motion.button type="button" 
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={() => window.location.href = "tel: +91 80970018816"}
            >
                Call 1:1
                </motion.button>

                <motion.button type="button" 
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth', opacity: 0})}
                >
                    Explore
                </motion.button>
            </div>

            
        </motion.div>
  )
}

export default HeaderText