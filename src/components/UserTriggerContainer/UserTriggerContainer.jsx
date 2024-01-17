import React from 'react';
import Button from "../UI/Button";
import s from './UserTriggerContainer.module.sass'

function UserTriggerContainer({count, getUser}) {
    const triggers = []

    for(let i = 0; i < count; i++){
        const index = i+1
        triggers.push(<Button onClick={()=>getUser(index)} key={i}>{index}</Button>)
    }

    return (
        <div className={s.btn}>
            {triggers}
        </div>
    );
}

export default UserTriggerContainer;