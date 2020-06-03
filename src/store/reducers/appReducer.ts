import {INITIALIZED_SUCCESS} from "../constants/appContants";
import {IAppState} from "../types/appTypes";

const initialState: IAppState = {
    initialized: false
};

export const appReducer = (state = initialState, action: any): IAppState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true};
        default:
            return state;
    }
};