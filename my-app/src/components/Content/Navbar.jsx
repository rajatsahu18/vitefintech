import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
 
export const Navbar = () => {

    const {loginAuth } = useSelector(state=>state.login)


  return (
    <div bg='#A6CE3A' display='flex'justifyContent='center' alignItems='center' gap='2rem' color='#fff' fontWeight='600'> 
        { loginAuth && <Link style={{textDecoration:'none', color:'#fff'}} to='/login' >Logout</Link> }
        { !loginAuth && <Link style={{textDecoration:'none', color:'#fff'}} to='/login'>Login</Link> }
        { !loginAuth && <Link style={{textDecoration:'none', color:'#fff'}} to='/signup'>Signup</Link>}
    </div>
  )
}