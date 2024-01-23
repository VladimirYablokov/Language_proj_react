import React, {useEffect, useState} from 'react';
import s from './SingleUserContainer.module.sass'
import SingleUser from "../SingleUser";
import SingleUserTrigger from "../SingleUserTrigger";


function SingleUserContainer() {
    const [user, setUser] = useState([]);
    let [currentUser, setCurrentUser] = useState(getRandom())


    const getUser = (id) => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then(data => data.json())
            .then(data => setUser(data.data))
    }
    useEffect(() => getUser(currentUser), [currentUser])

    function getRandom() {
        return Math.floor(Math.random() * 12) + 1;
    }

    const nextUser = () => {
        if (currentUser === 12) {
            currentUser = 0
        }
        setCurrentUser(currentUser + 1)
    }
    const prevUser = () => {
        if (currentUser === 1) {
            currentUser = 13
        }
        setCurrentUser(currentUser - 1)
    }

    return (
        <div className={s.outContainer}>
            <h1>Работа с асинхронностью(fetch-запросы)</h1>
            <h2>Пользователь:</h2>
            <div className={s.container}>
                {user && <SingleUser {...user}/>}
            </div>
            <SingleUserTrigger nextUser={nextUser}
                               prevUser={prevUser}
                               currentUser={currentUser}/>
        </div>
    );
}

export default SingleUserContainer;