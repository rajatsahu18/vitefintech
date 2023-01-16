import React from 'react';
import { Loginformdiv, LoginNavdiv, LoginNavdivLogoDiv } from './Logincss';
import { Link, Navigate } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../../redux/login/action';
import { Loader } from '../loader/Loader';

const logininput = {
  loginemail:"",
  loginpassword:"",
  stay:false
}; 

export const Login = () => {
const [query,setquery] = React.useState(logininput);
const dispatch = useDispatch();
const {loginLoading, loginAuth, id, username } = useSelector(state=>state.login, shallowEqual)
const handlechangelogin = (e)=>{
    const {name,value,type,checked} = e.target;
    let val = type === "checkbox" ? checked : value;

    setquery({
        ...query,
        [name]: val
    })
}

const handlelogin = ()=>{
    if(query.loginemail !== "" && query.loginpassword !== ""){
          let payload = {
              email:query.loginemail,
              password:query.loginpassword,
              stay:query.stay
          }
          dispatch(loginuser(payload));
          setquery(logininput);
    }
    else{
        if(query.loginemail === ""){
            alert("Please Enter Email")
        }
        else if(query.loginpassword === ""){
            alert("Please Enter Password");
        }
    }
}
if(loginLoading){
    return <Loader/>
}
    return !loginAuth ? (
        <>
            <LoginNavdiv>
                <LoginNavdivLogoDiv>
                <Link to={`/`} style={{ textDecoration: "none" }}>
                    <img src="https://www.vitefintech.in/optimum/images/vitefintechd1.png" alt="vitefintech Logo" style={{ width: "60%", height: "100%", margin: "5% 0% 0% 30%" }} />
                    </Link>
                </LoginNavdivLogoDiv>
                <LoginNavdivLogoDiv>

                </LoginNavdivLogoDiv>
                <LoginNavdivLogoDiv>

                </LoginNavdivLogoDiv>
                <LoginNavdivLogoDiv>
                    <h1 style={{ fontSize: "1.3vw", margin: "17% 0% 0% 32%", color: "grey" }}>Dont have an Account?</h1>
                </LoginNavdivLogoDiv>
                <LoginNavdivLogoDiv>
            
                    <h1 style={{ fontSize: "1.8vw", margin: "15% 0% 0% 0%" }}><Link to={`/signup`}   style={{ textDecoration: "none", color: "#FCBA59" }}>Sign Up</Link></h1>
                    
                </LoginNavdivLogoDiv>
            </LoginNavdiv>
            <Loginformdiv>
                <div style={{ flexBasis: "12%", marginTop: "10%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <h1 style={{ fontSize: "2vw", margin: "0%", color:'#FCBA59' }}>Log in</h1>
                </div>
                <div style={{ flexBasis: "12%", marginTop: "3%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <input type="email" name="loginemail" value={query.loginemail} onChange={handlechangelogin} required style={{ width: "92%", height: "90%", paddingLeft: "5%", fontSize:'20px' }} placeholder="Enter Email" />
                </div>
                <div style={{ flexBasis: "12%", marginTop: "5%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <input type="password" name="loginpassword" onChange={handlechangelogin} value={query.loginpassword} required style={{ width: "92%", height: "90%", paddingLeft: "5%", fontSize:'20px' }} placeholder="Enter Password" />
                </div>
                <div style={{ flexBasis: "12%", marginTop: "1%", width: "80%", marginLeft: "10%", marginRight: "10%", display: "flex" }}>
                    <div style={{ flexBasis: "10%", textAlign: "center" }}>
                        <input type="checkbox" name="stay" onChange={handlechangelogin} checked={query.stay} style={{ width: "50%", height: "40%", marginTop: "50%" }} />
                    </div>
                    <div style={{ flexBasis: "80%", textAlign: "left" }}>
                        <p style={{ marginTop:'7%', marginLeft: "2%", color: "#FCBA59", fontWeight: "bold" }}> Stay Logged in</p>
                    </div>
                </div>
                <div style={{ flexBasis: "12%", marginTop: "1%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <button style={{ width: "100%", height: "100%", backgroundColor: "#FAE057", borderColor: "#FAE057", color: "#fff", fontSize: "1.5vw", fontWeight:'1000', borderRadius: "5px", outline: "none" }} onClick={handlelogin}>LOG IN</button>
                </div>
            </Loginformdiv>
        </>
    ) : <Navigate to = '/home' />
}