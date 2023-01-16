import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutSuccess } from '../../redux/login/action'
import { Marriage } from './Marriage'
import { MarriageForm } from './MarriageForm'
import { useTranslation } from 'react-i18next';
import { changeLang } from '../../lang'

export const Home = () => {

  const {role} = useSelector((state) => state.login)
  const dispatch = useDispatch()
  const {t} = useTranslation()

    const logout = () => {
        dispatch(logoutSuccess())
        localStorage.clear()
    }

  return (
    <div>
        <div style={{display: 'flex', background:'#FCBA59', color:'#fff', justifyContent:'center'}}>
            <h2 style={{margin:'1%'}} >{t('Marriage_Portal')}</h2>
            <h2 style={{marginLeft:'60%'}} >{t('Role')}: {role}</h2>
            <Link style={{marginLeft:'1%', color:'#fff', textDecoration:'none'}} onClick={logout} to='/'><h2>{t('Log_out')}</h2></Link>
            <button onClick={changeLang('en')} style={{height:'2rem', margin:'1rem 1rem', border:'none', background:'#FAE057', color:'#000', fontWeight:'900', cursor:'pointer'}}>English</button>
            <button onClick={changeLang('hi')} style={{height:'2rem', margin:'1rem 1rem', border:'none', background:'#FAE057', color:'#000', fontWeight:'900', cursor:'pointer'}}>Hindi</button>
        </div>
        {role === 'r1' ? <Marriage/> : <MarriageForm/> }
    </div>
  )
}
