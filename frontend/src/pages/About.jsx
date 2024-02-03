import React from 'react'
import Logo from "../assets/Logo/Logo.png"
import {motion} from 'framer-motion'
import { fadeIn } from '../components/common/motionFrameVariants';
import Anuj from "../assets/Images/Anuj.jpeg"

const About = () => {
  return (
    <div
    className='bg-gradient-to-r from-gray-100 to-green-900 w-full'
    >
        <motion.div
        className='flex flex-col items-center' 
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.5}}
        >

          <div
          
          className=' md:w-1/2 flex justify-center items-center'>
            <img 
            src={Logo} 
            alt="logo" 
            />
          </div>

          <div
          className=' w-full md:w-[50%]  p-5 text-xl font-semibold md:flex md:items-center '
          >
            <div
            className='bg-white p-5 rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi animi ratione ad dolores rerum facere rem porro placeat veniam, debitis ipsum obcaecati accusamus aperiam iure ut doloremque magnam, perferendis labore a quisquam qui expedita? Suscipit iure sint eligendi minus earum nihil voluptates debitis et, est cupiditate? Corporis facere cumque provident at eius accusantium harum nihil repellendus sit perferendis. Doloremque dolor laborum neque ea ipsam, obcaecati nisi temporibus, expedita rerum minus cumque at et magni, modi id maiores unde repellat? Nobis, iste. Dicta impedit quos cupiditate nobis tenetur magnam architecto sit dolor inventore! Fuga reiciendis a enim corrupti architecto nam?
              </p>
            </div>
          </div>
        </motion.div>

        <div
        className='flex-col flex w-full mt-20'
        >
          <motion.div
          className='p-5'
          variants={fadeIn('bottom', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          >
            <h1
            className='text-center md:text-6xl text-3xl font-bold '
            >
              Our Mission
            </h1>
            <p
            className='p-5 text-xl font-semibold bg-white rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] mx-auto md:w-[50%] my-10'
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel neque adipisci sequi magnam corporis ipsa quas nobis accusantium itaque laboriosam qui sed, eligendi commodi amet vero ratione sunt numquam blanditiis! Adipisci perspiciatis consequuntur odio ea ut totam quo, velit, voluptas commodi recusandae modi aliquid. Commodi non debitis ex perferendis.
            </p>
          </motion.div>
        </div>

        <div>
          <motion.div
          variants={fadeIn('bottom', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          >
            <h1
            className='text-center md:text-6xl text-3xl font-bold p-5'
            >
              People Behide The Scene
            </h1>
          </motion.div>

          <div
          className='flex flex-col md:flex-row p-5 md:space-x-5 md:space-y-0 space-y-5 md:items-center md:justify-around'
          >
            <motion.div
            className='bg-white p-2 rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            >
              <img 
              src={Anuj} 
              alt="anuj image" 
              className='rounded-lg w-full h-96 object-cover object-center'
              />
            </motion.div>

            <motion.div
            className='font-semibold md:w-[50%] bg-white p-5 rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] mx-auto md:mx-0'
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            >
              <h1
              className='text-xl font-bold text-center p-5'
              >
                Founder and CEO
              </h1>
              <p
              className='tex-xl'
              >
              Introducing Anuj Bhosale, the dynamic founder of Nutrify Meals and a true force in the world of kickboxing. With a burning passion for sports and a relentless drive for success, Anuj has achieved remarkable feats in his kickboxing career. As a five-time international gold medalist, he has proven his exceptional skills and unwavering dedication to the sport. Alongside his athletic pursuits, Anuj has channeled his passion for health and nutrition into founding Nutrify Meals, a brand that provides nourishing and delicious meals to fuel athletes and health enthusiasts alike. With his winning spirit and commitment to excellence, Anuj continues to inspire others to reach their full potential in both sports and nutrition.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
  )
}

export default About