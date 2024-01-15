import './App.css';
import CardContainer from "./components/CardContainer";
import {useEffect, useState} from "react";


export default function App() {
    const [cards, _setCards] = useState([
        {
            id: 1,
            ru: 'Кошка',
            en: 'cat',
            state: 'ru',
        },
        {
            id: 2,
            ru: 'Собака',
            en: 'dog',
            state: 'en',

        },
        {
            id: 3,
            ru: 'Велик',
            en: 'bike',
            state: 'ru',
        },
    ])
    const setCards = (func) => {
        _setCards(pre => {
            const newState = func(pre)
            localStorage.setItem('cards', JSON.stringify(newState))
            return newState
        })
    }

    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem('cards')) ?? [];
        setCards(() => cards)
    }, []);

    const changeCardState = (id) => {
        setCards(prev => {
            return prev.map(word => {
                if (word.id === id) {
                    word.state = word.state === 'ru' ? 'en' : 'ru'
                }
                return word
            })
        })
    }

    return (
        <div>
            <CardContainer cards={cards} chanceCardState={changeCardState}/>
        </div>
    );
}
