import React, {useEffect} from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import {Route, Switch} from 'react-router-dom'
import {Main} from "./components/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {IAuthState, IGetAuthUserData} from "./store/types/authTypes";
import {getAuthUserDataThunkCreator} from "./store/actions/authActions";
import {RootStateType} from "./store/store";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {IAppState} from "./store/types/appTypes";
import {Preloader} from "./components/Preloader/Preloader";
import {NoMatch} from "./components/NoMatch/NoMatch";

export const App = () => {

    const dispatch = useDispatch()

    const {isAuth} = useSelector((state: RootStateType): IAuthState => state.auth)
    const {initialized} = useSelector((state: RootStateType): IAppState => state.app)

    const getAuthUserData: IGetAuthUserData = () => dispatch(getAuthUserDataThunkCreator())

    useEffect(() => {
        getAuthUserData()
    }, []);

    return (
        <div className="App">
            {
                initialized ?
                <Switch>
                    <PrivateRoute exact path='/' isAuth={isAuth}>
                        <Main/>
                    </PrivateRoute>
                    <Route exact path="/login">
                        <Login isAuth={isAuth}/>
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
                :
                <Preloader/>
            }
        </div>
    );
}
