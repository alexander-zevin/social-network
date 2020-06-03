import React, {useReducer} from 'react';
import TextField from '@material-ui/core/TextField';
import {CheckBoxContainer, FullScreenBox, LoginForm, LoginTitle} from "./LoginStyles";
import {Button} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {initialState, loginReducer} from "./LoginReducer";
import {setCheckedActionCreator, setEmailActionCreator, setPasswordActionCreator} from "./LoginActions";

export const Login = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

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
                <Button variant='contained' color='primary' size='large'>LOGIN</Button>
            </LoginForm>
        </FullScreenBox>
    );
}