import React, {useEffect} from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import {Route, Redirect, Switch} from 'react-router-dom'
import {Main} from "./components/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {IAuthState, IGetAuthUserData} from "./store/types/auth";
import {getAuthUserDataThunkCreator} from "./store/actions/auth";
import {RootStateType} from "./store/store";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";

export const App = () => {

    const {isAuth} = useSelector((state: RootStateType): IAuthState => state.auth)
    console.log('isAuth: ' + isAuth)

    const dispatch = useDispatch()

    const getAuthUserData: IGetAuthUserData = () => dispatch(getAuthUserDataThunkCreator())

    useEffect(() => {
        getAuthUserData()
    }, []);

    return (
        <div className="App">
            <Switch>
                <PrivateRoute exact path='/' isAuth={isAuth}>
                    <Main/>
                </PrivateRoute>
                <Route exact path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    );
}
