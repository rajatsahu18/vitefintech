import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutSuccess } from '../../redux/login/action'
import { Marriage } from './Marriage'
import { MarriageForm } from './MarriageForm'

export const Home = () => {

  const {role} = useSelector((state) => state.login)
  const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutSuccess())
        localStorage.clear()
    }

  return (
    <div>
        <div style={{display: 'flex', background:'#FCBA59', color:'#fff', justifyContent:'center'}}>
            <h2 style={{margin:'1%'}} >Marriage Portal</h2>
            <h2 style={{marginLeft:'70%'}} >Role: {role}</h2>
            <Link style={{marginLeft:'1%', color:'#fff', textDecoration:'none'}} onClick={logout} to='/'><h2>Log out</h2></Link>
        </div>
        {role === 'r1' ? <Marriage/> : <MarriageForm/> }
    </div>
  )
}
