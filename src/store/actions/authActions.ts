import {SET_USER_DATA} from "../constants/authContants";
import {ISetUserDataAction} from "../types/authTypes";
import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {initializedSuccessActionCreator} from "./appActions";
import {IInitializedSuccessAction} from "../types/appTypes";

export const setUserDataActionCreator = (userId: number, login: string, email: string): ISetUserDataAction =>
    ({type: SET_USER_DATA, userId, login, email})

export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch<ISetUserDataAction | IInitializedSuccessAction>) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {userId, login, email} = response.data.data
        dispatch(setUserDataActionCreator(userId, login, email))
    }
    dispatch(initializedSuccessActionCreator())
}
