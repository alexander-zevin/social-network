import {RouteProps} from "react-router-dom";

export interface IPrivateRoute extends RouteProps{
    isAuth: boolean
}