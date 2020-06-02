import {createStore, combineReducers, applyMiddleware} from 'redux';
import {authReducer} from "./reducers/auth";

const rootReducer = combineReducers({
    auth: authReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
