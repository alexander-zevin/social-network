import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {authReducer} from "./reducers/authReducer";
import {appReducer} from "./reducers/appReducer";

const middlewares = [thunk]

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
