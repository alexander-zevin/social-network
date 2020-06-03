import {SET_CHECKED, SET_EMAIL, SET_PASSWORD, SET_USER_DATA} from "../constants/auth";
import {ISetCheckedAction, ISetEmailAction, ISetPasswordAction, ISetUserDataAction} from "../types/auth";
import {authAPI} from "../../api/api";
import {Action, Dispatch} from "redux";
import { ThunkAction } from 'redux-thunk'
import {RootStateType} from "../store";

export const setEmailActionCreator = (email: string): ISetEmailAction => ({ type: SET_EMAIL, email })

export const setPasswordActionCreator = (password: string): ISetPasswordAction => ({ type: SET_PASSWORD, password })

export const setCheckedActionCreator = (checked: boolean): ISetCheckedAction => ({ type: SET_CHECKED, checked })

export const setUserDataActionCreator = (userId: number, login: string, email: string): ISetUserDataAction =>
    ({type: SET_USER_DATA, userId, login, email});

export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch<ISetUserDataAction>) => {
    const response = await authAPI.me()
    console.log('resultCode: ' + response.data.resultCode)
    if (response.data.resultCode === 0) {
        const {userId, login, email} = response.data.data
        dispatch(setUserDataActionCreator(userId, login, email))
    }
};
