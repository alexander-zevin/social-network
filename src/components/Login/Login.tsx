import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {CheckBoxContainer, FullScreenBox, LoginForm, LoginTitle} from "./LoginStyles";
import {Button} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {useDispatch, useSelector} from "react-redux";
import {
    getAuthUserDataThunkCreator,
    setCheckedActionCreator,
    setEmailActionCreator,
    setPasswordActionCreator
} from "../../store/actions/auth";
import {ISetChecked, ISetEmail, ISetPassword} from "./LoginTypes";
import {RootStateType} from "../../store/store";
import {IAuthState, IGetAuthUserData} from "../../store/types/auth";

export const Login = () => {

    const {email, password, checked} = useSelector((state: RootStateType): IAuthState => state.auth)

    const dispatch = useDispatch()

    const setEmail: ISetEmail = email => dispatch(setEmailActionCreator(email))
    const setPassword: ISetPassword = password => dispatch(setPasswordActionCreator(password))
    const setChecked: ISetChecked = checked => dispatch(setCheckedActionCreator(checked))
    const getAuthUserData: IGetAuthUserData = () => dispatch(getAuthUserDataThunkCreator())

    useEffect(() => {
        getAuthUserData()
    }, []);

    return (
        <FullScreenBox>
            <LoginForm>
                <LoginTitle>Log In</LoginTitle>
                <TextField
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    id='textFieldEmail'
                    label='Email'
                    fullWidth
                />
                <TextField
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    id='textFieldPassword'
                    label='Password'
                    type='password'
                    fullWidth
                />
                <CheckBoxContainer>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={event => setChecked(event.target.checked)}
                                name='formCheckBox'
                                color='primary'
                            />
                        }
                        label='remember me'
                    />
                </CheckBoxContainer>
                <Button variant='contained' color='primary' size='large'>LOGIN</Button>
            </LoginForm>
        </FullScreenBox>
    );
}
