import React from 'react';
import s from './SingleUser.module.sass'

function SingleUser({email, first_name, last_name, avatar}) {
    return (
        <div className={s.single_user}>
            <img src={avatar} alt="avatar"/>
            <p>{first_name} {last_name}</p>
            <a href={"mailto:" + email}>{email}</a>
        </div>
    );
}

export default SingleUser;