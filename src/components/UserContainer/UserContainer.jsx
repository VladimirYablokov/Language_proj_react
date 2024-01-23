import React from 'react';
import s from './UserContainer.module.sass'
import {useEffect, useState} from "react";
import User from "../User";
import UserTriggerContainer from "../UserTriggerContainer";

function UserContainer() {
    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState([]);
    const getUser = (id) => {
        fetch(`https://reqres.in/api/users?page=${id}`)
            .then(data => data.json())
            .then(data => {
                setUsers(data.data);
                setPages(data.total_pages);
            });
    };

    useEffect(()=> getUser(1), [])

    return (
        <div className={s.outContainer}>
            <h2>Пользователи:</h2>
            <div className={s.container}>
                {
                    (users.length === 0) ?
                        <p className={s.load}>данные грузятся...</p> :
                        users.map(user => <User {...user} key={user.id}/>)
                }
            </div>
            <UserTriggerContainer getUser={getUser} count={pages}/>
        </div>

    );
}

export default UserContainer;