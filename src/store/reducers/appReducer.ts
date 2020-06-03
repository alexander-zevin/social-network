import {INITIALIZED_SUCCESS} from "../constants/appContants";
import {IAppState, IInitializedSuccessAction} from "../types/appTypes";

const initialState: IAppState = {
    initialized: false
};

export const appReducer = (state = initialState, action: IInitializedSuccessAction): IAppState => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {...state, initialized: true}
    } else return state;
};