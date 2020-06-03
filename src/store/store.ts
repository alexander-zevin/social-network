import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {authReducer} from "./reducers/auth";

const middlewares = [thunk]

const rootReducer = combineReducers({
    auth: authReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
