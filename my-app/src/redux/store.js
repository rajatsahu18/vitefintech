import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import { signUpReducer } from "./signup/reducer"
import thunk from "redux-thunk"
import { loginReducer } from "./login/reducer";

var rootReducer = combineReducers({
 signup:signUpReducer,
 login:loginReducer,
});

export const store = legacy_createStore(rootReducer, 
    compose(applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()))