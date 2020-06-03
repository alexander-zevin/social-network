import {INITIALIZED_SUCCESS} from "../constants/appContants";
import {IInitializedSuccessAction} from "../types/appTypes";

export const initializedSuccessActionCreator = (): IInitializedSuccessAction => ({ type: INITIALIZED_SUCCESS });