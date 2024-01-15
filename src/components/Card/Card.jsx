import React from 'react';
import s from './Card.module.sass'

export default function Card({id, ru, en, state, chanceCardState}) {
    const style = {
        backgroundColor: (state === 'ru' ? '#9b5986' : '#2ecc71')
    }
    return (
        <div className={s.card} style={style} onClick={()=> chanceCardState(id)}>
            {state === 'ru' ? ru : en}
        </div>
    );
}
