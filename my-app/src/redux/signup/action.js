import axios from "axios";
import { SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

export const signupsuccess = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload
});

export const signupfailed = (payload) => ({
    type: SIGNUP_FAILED,
    payload
});

export const signuprequest = () => ({
    type: SIGNUP_REQUEST
});

export const signupuser = (payload) => (dispatch) => {
    axios.get("https://json-mock-server-rajatsahu18.vercel.app/logindata", {
        q: payload.signupemail
    }).then(res => {
        if (res.data.length === 0) {
            dispatch(signuprequest());
            const config = {
                url: "https://json-mock-server-rajatsahu18.vercel.app/logindata",
                method: "post",
                data: {
                    email: payload.signupemail,
                    password: payload.signuppassword,
                    id: payload.id,
                    username:payload.username,
                    agreeterms: true
                },
                header: {
                    "Content-type": "application/json",
                }
            }
            axios.post("https://json-mock-server-rajatsahu18.vercel.app/postDataToCart", {
                    id: payload.id,
                    username: payload.username,
                    projects: [],
                    clients: []
                })
            axios(config).then(res => {
                dispatch(signupsuccess(res.data));
                alert("You Have Successfully Signed Up")
            }).catch(err => {
                dispatch(signupfailed(err));
            })
        }
        else if (res.data.length > 0) {
            var check = false;
            var next = res.data.map(el => el.email === payload.signupemail ? check = true : null);
            if (check === true) {
                alert("User Already Register");
            }
            
            else if (check === false) {
                dispatch(signuprequest());
                const config = {
                    url: "https://json-mock-server-rajatsahu18.vercel.app/logindata",
                    method: "post",
                    data: {
                        email: payload.signupemail,
                        password: payload.signuppassword,
                        id: payload.id,
                        username:payload.username,
                        agreeterms: true
                    },
                    header: {
                        "Content-type": "application/json",
                    }
                }
                axios.post("https://json-mock-server-rajatsahu18.vercel.app/postDataToCart", {
                    id: payload.id,
                    username: payload.username,
                    projects: [],
                    clients: []
                })
                axios(config).then(res => {
                    dispatch(signupsuccess(res.data));
                    alert("You Have Successfully Signed Up")
                }).catch(err => {
                    dispatch(signupfailed(err));
                })
            }
        }
    })
};
