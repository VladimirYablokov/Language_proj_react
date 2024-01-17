import React, {useContext} from 'react';
import s from './Card.module.sass'
import {Context} from "../../context";
import CloseButton from "../UI/CloseButton";

export default function Card({id, ru, en, state}) {

    const {changeCardState, closeCard} = useContext(Context);

    const style = {
        backgroundColor: (state === 'ru' ? '#9b5986' : '#2ecc71')
    }
    return (
        <div className={s.card}
             style={style}
             onClick={()=> changeCardState(id)}>

            <CloseButton handler={()=>closeCard(id)}/>
            {state === 'ru' ? ru : en}
        </div>
    );
}
