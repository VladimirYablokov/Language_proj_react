import React from 'react';
import s from './CardContainer.module.sass'
import Card from "../Card/Card";


export default function CardContainer({cards}) {

    return (
        <div className={s.card_container}>
            {cards.map(elem => <Card key={elem.id}{...elem} />)}
        </div>
    );
}

