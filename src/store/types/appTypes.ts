import {INITIALIZED_SUCCESS} from "../constants/appContants";

export interface IInitializedSuccessAction {
    type: typeof INITIALIZED_SUCCESS
}

export interface IAppState {
    initialized: boolean
}