import React, {useState} from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {motion} from 'framer-motion'

const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    message: ''
  })

  const {name, email, message} = formdata

  const handleOnChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    name && email && message && alert(`Thank you ${name} for your message. We will get back to you soon.`)

    setFormdata({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div
    className='bg-gradient-to-r from-gray-100 to-green-900 overflow-x-hidden'
    style={{height: 'calc(100vh - 64px)'}}
    >
        <div>
            <h1
            className='text-center text-6xl font-bold p-10 font-serif'
            >
              Connect With Us
            </h1>
        </div>

        <motion.div
        className='w-full flex items-center justify-center'
        initial={{ y: 100, opacity: 0 }} // Initial position outside the viewport on the right
        animate={{ y: 0, opacity: 1, }}
        transition={{ duration: 1, delay: 0.2 }}
        >
          <form
          onSubmit={handleFormSubmit}
          className='bg-white w-[85%] md:w-96 p-10 rounded-lg shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] flex-col flex gap-4'
          >

            <h1
            className='text-3xl font-bold text-center'
            >
              Drop a message
            </h1>

            <input 
            type="text" 
            placeholder='Name'
            required
            value={name}
            name='name'
            onChange={handleOnChange}
            className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
            />

            <input 
            type="email" 
            placeholder='Email'
            required
            value={email}
            name='email'
            onChange={handleOnChange}
            className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
            />

            <input 
            type="text" 
            required
            value={message}
            name='message'
            onChange={handleOnChange}
            placeholder='Message'
            className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
            />

            <input 
            type="submit" 
            className='p-3 rounded-lg bg-green-500 text-white font-semibold outline-none focus:bg-green-600 duration-200 border border-green-500 w-full cursor-pointer hover:bg-green-600 transition-all'
            />
          </form>
        </motion.div>

        <motion.div
        className='flex items-center justify-center gap-5 mt-10'
        initial={{ y: 100, opacity: 0 }} // Initial position outside the viewport on the right
        animate={{ y: 0, opacity: 1, }}
        transition={{ duration: 1, delay: 0.2 }}
        >
          <div
          className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-all'
          onClick={() => window.open("https://instagram.com/nutrifymeals_")}
          >
            <InstagramIcon />
          </div>

          <div
          className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-all'
          onClick={() => window.open("https://wa.me/8097018816")}
          >
            <WhatsAppIcon />
            </div>
        </motion.div>
      </div>
  )
}

export default Contact