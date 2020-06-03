import {SET_CHECKED, SET_EMAIL, SET_PASSWORD} from "./LoginConstants";

export interface IState {
    email: string
    password: string
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

export type LoginActionType = ISetEmailAction | ISetPasswordAction | ISetCheckedAction