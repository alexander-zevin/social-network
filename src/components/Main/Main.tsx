import React, {Fragment, useState} from 'react';
import {usersAPI} from "../../api/api";
import {IGetUsers, IUser, IUsers} from "./MainTypes";
import {Button} from "@material-ui/core";

export const Main = () => {

    const [users, setUsers] = useState<Array<IUser> | null>(null)

    const getUsers: IGetUsers = async (currentPage, pageSize) => {
        const response = await usersAPI.getUsers(currentPage, pageSize);
        console.log(response.data.items)
        setUsers(response.data.items)
    }

    return (
        <>
            <Button
                variant='contained'
                color='primary'
                onClick={() => getUsers(1, 5)}
            >
                Get users
            </Button>
            {
                users && users.map((item, index) =>
                    <Fragment key={'main-users-list' + index}>
                        <span>{item.name}</span><br/>
                        <span>{item.status}</span><br/>
                    </Fragment>
                )
            }

        </>
    )
}