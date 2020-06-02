import {SET_CHECKED, SET_EMAIL, SET_PASSWORD} from "../constants/auth";
import {ISetCheckedAction, ISetEmailAction, ISetPasswordAction} from "../types/auth";

export const setEmailActionCreator = (email: string): ISetEmailAction => ({ type: SET_EMAIL, email })
export const setPasswordActionCreator = (password: string): ISetPasswordAction => ({ type: SET_PASSWORD, password })
export const setCheckedActionCreator = (checked: boolean): ISetCheckedAction => ({ type: SET_CHECKED, checked })