import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Signupformdiv, SignupNavdiv, SignupNavdivLogoDiv } from "./Signupcss";
import {v4 as uuid} from 'uuid'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { signupuser } from "../../redux/signup/action";
import { Loader } from "../loader/Loader";
import { useTranslation } from 'react-i18next';
import { changeLang } from "../../lang";

const signupinput ={
    signupemail:"",
    signuppassword:"",
    agreeterms: false,
    role:""
}

export const Signup = () => {

const dispatch = useDispatch();
const {signupLoading, signupAuth} = useSelector(state=>state.signup, shallowEqual);
const [query,setquery] = React.useState(signupinput);
const {t} = useTranslation()

const handlechange = (e)=>{
    const {name,value,type,checked} = e.target;
    let val = type === "checkbox" ? checked : value;
    setquery({
        ...query,
        [name]:val
    });
};
const splitusername = (value)=>{
    var str = "";
    for(let i =0; i<value.length; i++){
        if(value[i] === "@"){
             break;
        }
        else{
            str += value[i];
        }
    }
     return str;
}
const handlesignup = ()=>{
    if(query.signupemail !== "" && query.signuppassword !== "" && query.agreeterms !== false){
        let payload = {
            signupemail:query.signupemail,
            signuppassword:query.signuppassword,
            agreeterms:true,
            role: query.role,
            id:uuid(),
            username:splitusername(query.signupemail),
        }
        dispatch(signupuser(payload));
        
        setquery(signupinput);
    }
    else{
        if(query.agreeterms === false){
            alert("Please Agree Terms and Conditions")
        }
        else if (query.signupemail === ""){
            alert("Please Enter Your Email")
        }
        else if(query.signuppassword === ""){
            alert("Please Enter Your Password")
        }
        else if(query.role === ""){
            alert("Please Select Your Role")
        }
    }
}

if(signupLoading){
    return <Loader/>
}
    return !signupAuth ? (
        <>
            <SignupNavdiv>
                <SignupNavdivLogoDiv>
                    <Link to={`/`} style={{ textDecoration: "none" }}>
                        <img src="https://www.vitefintech.in/optimum/images/vitefintechd1.png" alt="vitefintech Logo" style={{ width: "60%", height: "100%", margin: "5% 0% 0% 30%" }} />
                    </Link>
                </SignupNavdivLogoDiv>
                <SignupNavdivLogoDiv>

                </SignupNavdivLogoDiv>
                <SignupNavdivLogoDiv>

                </SignupNavdivLogoDiv>
                <SignupNavdivLogoDiv>

                </SignupNavdivLogoDiv>
                <SignupNavdivLogoDiv>

                <div style={{display:'flex'}}>
                    <h1 style={{ fontSize: "1.8vw", margin: "15% 0% 0% 0" }}><Link  to={`/`} style={{ textDecoration: "none", color: "#FCBA59" }}>{t('LOG_IN')}</Link></h1>
                    <button onClick={changeLang('en')} style={{height:'2rem', margin:'3.4rem 1rem', border:'none', background:'#FAE057', color:'#000', fontWeight:'900', cursor:'pointer'}}>English</button>
                    <button onClick={changeLang('hi')} style={{height:'2rem', margin:'3.4rem 1rem', border:'none', background:'#FAE057', color:'#000', fontWeight:'900', cursor:'pointer'}}>Hindi</button>
                </div>
                </SignupNavdivLogoDiv>
            </SignupNavdiv>
            <Signupformdiv>
                <div style={{ flexBasis: "12%",marginTop:"10%", width:"80%",marginLeft:"10%",marginRight:"10%" }}>
                  <h1 style={{fontSize:"2vw", margin:"0%", color:'#FCBA59'}}>{t('Sign_Up')}</h1>
                </div>
                <div style={{ flexBasis: "12%", marginTop:"3%",width:"80%",marginLeft:"10%",marginRight:"10%" }}>
                     <input type="email" name="signupemail" value={query.signupemail} onChange={handlechange} required style={{width:"92%",height:"90%",paddingLeft:"5%", fontSize:'20px'}} placeholder={t('Enter_Email')} />
                </div>
                <div style={{ flexBasis: "12%",  marginTop:"5%",width:"80%",marginLeft:"10%",marginRight:"10%"  }}>
                    <input type="password" name="signuppassword" onChange={handlechange} value={query.signuppassword} required style={{width:"92%",height:"90%",paddingLeft:"5%", fontSize:'20px'}} placeholder={t('Enter_Password')} />
                </div>
                <div style={{ flexBasis: "12%",  marginTop:"5%",width:"80%",marginLeft:"10%",marginRight:"10%"  }}>
                    <select name="role" onChange={handlechange} required style={{width:"99%",height:"90%",paddingLeft:"5%", fontSize:'20px'}}>
                    <option value="">{t('Select_Role')}</option>
                        <option value="r1">{t('R1_as_admin')}</option>
                        <option value="r2">{t('R2_as_user')}</option>
                        <option value="r3">{t('R3_as_user')}</option>
                    </select>
                </div>
                <div style={{ flexBasis: "12%", marginTop:"1%",width:"80%",marginLeft:"10%",marginRight:"10%", display:"flex"}}>
                    <div style={{flexBasis:"10%", textAlign:"center"}}>
                         <input type="checkbox" name="agreeterms" checked={query.agreeterms} onChange={handlechange} style={{width:"50%",height:"40%",marginTop:"50%"}}/>
                    </div>
                    <div style={{flexBasis:"80%",textAlign:"left"}}>
                        <p style={{ marginTop:'7%', marginLeft:"2%"}}>{t('I_agree_to_the_terms_of_Use')}</p>
                    </div>
                </div>
                <div style={{ flexBasis: "12%",  marginTop:"1%",width:"80%",marginLeft:"10%",marginRight:"10%"}}>
                      <button style={{width:"100%",height:"100%",backgroundColor:"#FAE057", borderColor:"#FAE057",color:"#fff", fontSize:"1.1vw", fontWeight:'1000', borderRadius:"5px", outline:"none", cursor:'pointer'}} onClick={handlesignup}>{t('CREATE_FREE_ACCOUNT')}</button>
                </div>
            </Signupformdiv>
        </>
    ) : <Navigate  to= "/"/>
}