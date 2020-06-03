import {IAuthState, ISetUserDataAction} from "../types/authTypes";
import {SET_USER_DATA} from "../constants/authContants";

export const initialState: IAuthState = {
    userId: null,
    login: '',
    email: '',
    isAuth: false
};

export const authReducer = (state = initialState, action: ISetUserDataAction): IAuthState => {
   if (action.type === SET_USER_DATA) {
       return {
            ...state,
            userId: action.userId,
            email: action.email,
            login: action.login,
            isAuth: true
        }
    } else return state
}
