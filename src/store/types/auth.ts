import {SET_CHECKED, SET_EMAIL, SET_PASSWORD, SET_USER_DATA} from "../constants/auth";

export interface IAuthState {
    userId: number | null
    login: string
    email: string
    password: string
    checked: boolean
    isAuth: boolean
}

export interface IGetAuthUserData {
    (): void
}

export interface ISetUserDataAction {
    type: typeof SET_USER_DATA
    userId: number
    login: string
    email: string
}

export interface ISetEmailAction {
    type: typeof SET_EMAIL
    email: string
}

export interface ISetPasswordAction {
    type: typeof SET_PASSWORD
    password: string
}

export interface ISetCheckedAction {
    type: typeof SET_CHECKED
    checked: boolean
}

export type AuthActionType = ISetUserDataAction | ISetEmailAction | ISetPasswordAction | ISetCheckedAction