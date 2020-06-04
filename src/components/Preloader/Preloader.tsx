import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {FullScreenBox} from "../common/styles";

export const Preloader = () => {
    return (
        <FullScreenBox>
            <CircularProgress />
        </FullScreenBox>
    )
}