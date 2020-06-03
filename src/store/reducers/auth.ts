import {AuthActionType, IAuthState} from "../types/auth";
import {SET_CHECKED, SET_EMAIL, SET_PASSWORD, SET_USER_DATA} from "../constants/auth";

export const initialState: IAuthState = {
    userId: null,
    login: '',
    email: '',
    password: '',
    checked: true,
    isAuth: false
};

export const authReducer = (state = initialState, action: AuthActionType): IAuthState => {
    switch (action.type) {
        case SET_EMAIL:
            return Object.assign({}, state, {
                email: action.email
            })
        case SET_PASSWORD:
            return Object.assign({}, state, {
                password: action.password
            })
        case SET_CHECKED:
            return Object.assign({}, state, {
                checked: action.checked
            })
        case SET_USER_DATA:
            return Object.assign({}, state, {
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            })
        default:
            return state;
    }
};


