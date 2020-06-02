import {SET_CHECKED, SET_EMAIL, SET_PASSWORD} from "../constants/auth";

export interface IAuthState {
    email: null | string
    password: null | string
    checked: boolean
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

export type AuthActionType = ISetEmailAction | ISetPasswordAction | ISetCheckedAction