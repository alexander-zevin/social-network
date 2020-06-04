import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {IPrivateRoute} from "./PrivateRouteTypes";

export const PrivateRoute = ({ children, isAuth, ...rest }: IPrivateRoute) => {
    return (
        <Route
            {...rest}
            render={
                () => isAuth ? children : <Redirect to={{pathname: '/login'}} />
            }
        />
    )
}