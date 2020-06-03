import {SET_USER_DATA} from "../constants/authContants";

export interface IAuthState {
    userId: number | null
    login: string
    email: string
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