import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { reducer as loginReducer } from "./login/reducer";
import { reducer as signUpReducer } from "./signup/reducer"
import { reducer as marriageReducer } from "./getData/reducer"

var rootReducer = combineReducers({
 signup:signUpReducer,
 login:loginReducer,
 marriage:marriageReducer,
});

export const store = legacy_createStore(rootReducer, 
    compose(applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()))