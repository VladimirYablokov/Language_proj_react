import React from 'react';
import s from './User.module.sass'

function User({email, first_name, last_name, avatar}) {
    return (
        <div className={s.user}>
            <img src={avatar} alt="avatar"/>
            <p>{first_name} {last_name}</p>
            <a href={"mailto:" + email}>{email}</a>
        </div>
    );
}

export default User;