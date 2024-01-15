import React from 'react'
import Button from '../components/Button'
import axios from 'axios'

const Logout = () => {

    const handleClick = async () => {
        try {
            console.log("hiii");
            const result = await axios.get(`http://localhost:8000/api/v1/users/logout`,
            {credentials: "include"}
            )
            console.log(result);
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <>
    <Button
    onClick={handleClick}
    >
        Logout
    </Button>
    </>
  )
}

export default Logout