import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMarriagedata, toggleData } from '../../redux/getData/action';

export const Marriage = () => {
    
    const dispatch = useDispatch();

    const {marriage, isLoading, error} = useSelector((state) => state.marriage, shallowEqual)
    const {role} = useSelector((state) => state.login)
    const [pending, setPending] = useState(false)

    console.log(marriage)
    useEffect(() => {
        getData();
    }, [dispatch])

    const getData = () => {
        dispatch(getMarriagedata())
    }
    
    const toggle = () => {
      setPending(!pending)
    }
    
   
  return (
    <div>
      {marriage.map((item) => (
        <div key={item.id} style={{ display:'flex', border:'1px solid black', margin:'2% 35%', justifyContent:'center' }}>
          <h4 style={{ padding:'1rem', width:'15rem'}} >{item.title}</h4>
          <h4 style={{ width:'4rem', marginRight:'1rem'}} >{pending ? <p style={{color:'green'}}>Approved</p>: <p style={{color:'red'}}>Pending</p> }</h4>
          <button style={{ height:'2rem', marginTop:'2rem'}} onClick={toggle}>Toggle</button>
        </div>
      ))}
    </div>
  )
}
