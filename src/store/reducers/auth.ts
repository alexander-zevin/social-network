import {AuthActionType, IAuthState} from "../types/auth";
import {SET_CHECKED, SET_EMAIL, SET_PASSWORD} from "../constants/auth";

export const initialState: IAuthState = {
    email: null,
    password: null,
    checked: true
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
        default:
            return state;
    }
};


