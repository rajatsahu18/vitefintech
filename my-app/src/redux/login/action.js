import axios from "axios";
import { Savelocaldata } from "../../utils/localstorage";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionType";

export const loginsuccess = (payload)=>({
 type:LOGIN_SUCCESS,
 payload
});

export const loginrequest = ()=>({
type:LOGIN_REQUEST
});

export const loginfailed = ()=>({
type:LOGIN_FAILED
});

export const loginuser = (payload)=>(dispatch)=>{
    dispatch(loginrequest());
    const config = {
        url:"https://json-mock-server-rajatsahu18.vercel.app/logindata",
        method:"get",
        params:{
           email:payload.email,
           password:payload.password,
           role: payload.role,
        }
    }
    axios(config).then(res=>{
        if(res.data.length === 0){
            alert("Email or Password Wrong");
            dispatch(loginfailed());
        }
        else if(res.data.length > 0){
            let data = res.data[0];
            dispatch(loginsuccess(data));
            if(payload.stay === true){
                let localdata = {
                    email:payload.email,
                    password:payload.password,
                    role: payload.role,
                    loginAuth:true,
                    id:data.id,
                    username:data.username
                }
                Savelocaldata("account",localdata);
            }
            alert("You Have Succesfully logged in");
        }
    }).catch(err=>{
        dispatch(loginfailed());
    })
}

export const logoutSuccess = () => (
    {
        type: LOGOUT_SUCCESS
    }
)