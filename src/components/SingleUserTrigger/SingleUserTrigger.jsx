import React from 'react';
import s from './SingleUserTrigger.module.sass'
import Button from "../UI/Button";

function SingleUserTrigger({nextUser, prevUser, currentUser}) {


    return (
        <div className={s.btn}>
            <Button onClick={prevUser}
                    // disabled={currentUser === 1}
            >
                prev
            </Button>
            <Button onClick={nextUser}
                    // disabled={currentUser === 12}
            >
                next
            </Button>
        </div>
    );
}

export default SingleUserTrigger;