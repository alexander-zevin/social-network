import {SET_AUTH, SET_USER_DATA} from "../constants/authContants";
import {ISetAuthAction, ISetUserDataAction} from "../types/authTypes";
import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {initializedSuccessActionCreator} from "./appActions";
import {IInitializedSuccessAction} from "../types/appTypes";

export const setUserDataActionCreator = (userId: number, login: string, email: string): ISetUserDataAction =>
    ({type: SET_USER_DATA, userId, login, email})

export const setAuthActionCreator = (isAuth: boolean): ISetAuthAction =>
    ({type: SET_AUTH, isAuth})

export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch<ISetUserDataAction | IInitializedSuccessAction>) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setUserDataActionCreator(id, login, email))
    }
    dispatch(initializedSuccessActionCreator())
}
