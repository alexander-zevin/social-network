import React, {FC, useEffect, useReducer} from 'react';
import TextField from '@material-ui/core/TextField';
import {CheckBoxContainer, LoginForm, LoginTitle} from "./LoginStyles";
import {Button} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {initialState, loginReducer} from "./LoginReducer";
import {setCheckedActionCreator, setEmailActionCreator, setPasswordActionCreator} from "./LoginActions";
import {FullScreenBox} from "../common/styles";
import {authAPI} from "../../api/api";
import {ILogin, ILoginProps} from "./LoginTypes";
import {useDispatch} from "react-redux";
import {setAuthActionCreator} from "../../store/actions/authActions";
import {Redirect, Route} from "react-router-dom";

export const Login: FC<ILoginProps> = ({isAuth}) => {

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(loginReducer, initialState);

    const login: ILogin = async (email, password, checked, captcha) => {
        const response = await authAPI.login(email, password, checked, captcha)
        if (response.data.resultCode === 0) {
            const userId = response.data.data.userId
            console.log('login: ' + userId + ', resultCode: ' + response.data.resultCode)
            dispatchRedux(setAuthActionCreator(true))
        }
    }
    if (isAuth) {
        return <Redirect to={'/'}/>
    }

    return (
        <FullScreenBox>
            <LoginForm>
                <LoginTitle>Log In</LoginTitle>
                <TextField
                    onChange={event => dispatch(setEmailActionCreator(event.target.value))}
                    value={state.email}
                    id='textFieldEmail'
                    label='Email'
                    fullWidth
                />
                <TextField
                    onChange={event => dispatch(setPasswordActionCreator(event.target.value))}
                    value={state.password}
                    id='textFieldPassword'
                    label='Password'
                    type='password'
                    fullWidth
                />
                <CheckBoxContainer>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checked}
                                onChange={event => dispatch(setCheckedActionCreator(event.target.checked))}
                                name='formCheckBox'
                                color='primary'
                            />
                        }
                        label='remember me'
                    />
                </CheckBoxContainer>
                <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={() => login(state.email, state.password, state.checked, false)}
                >
                    LOGIN
                </Button>
            </LoginForm>
        </FullScreenBox>
    );
}