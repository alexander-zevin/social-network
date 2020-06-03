import {IState, LoginActionType} from "./LoginTypes";
import {SET_CHECKED, SET_EMAIL, SET_PASSWORD} from "./LoginConstants";

export const initialState = {
    email: '',
    password: '',
    checked: true
};

export const loginReducer = (state: IState, action: LoginActionType): IState => {
    switch (action.type) {
        case SET_EMAIL: return {...state, email: action.email}
        case SET_PASSWORD: return {...state, password: action.password}
        case SET_CHECKED: return {...state, checked: action.checked}
        default: return state;
    }
}