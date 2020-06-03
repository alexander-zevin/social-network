import React from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import {Main} from "./components/Main/Main";
import {useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {IAuthState} from "./store/types/auth";

export const App = () => {

    const {isAuth} = useSelector((state: RootStateType): IAuthState => state.auth)

    return (
        <div className="App">
            <Router>
                <Route exact path="/">
                    {!isAuth ? <Redirect to="/login" /> : <Main />}
                </Route>
                <Route exact path="/login" component={Login} />
            </Router>
        </div>
    );
}
