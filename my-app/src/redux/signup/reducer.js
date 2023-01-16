import { SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

const signupinitstate = {
    signupAuth: false,
    signupLoading: false,
    signupError: false,
    role: "",
    email: "",
    id: ""
}

export const reducer = (state = signupinitstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupAuth: true,
                signupLoading: false,
                email: payload.email,
                role: payload.role,
                id: payload.id,
            };
        case SIGNUP_REQUEST:
            return {
                ...state,
                signupLoading: true
            };
        case SIGNUP_FAILED:
            return {
                ...state,
                signupAuth: false,
                signupError: true,
                signupLoading: false,
                email: "",
                password: "",
                role:"",
                id: ""
            };
        default:
            return state
    }
}