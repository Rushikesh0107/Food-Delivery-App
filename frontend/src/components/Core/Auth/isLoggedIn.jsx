import react from 'react'
import { useSelector } from 'react-redux'

const isLoggedin = () => {
    const { accessToken } = useSelector(state => state.auth);

    return (
        accessToken ? true : false
    )
} 

export default isLoggedin