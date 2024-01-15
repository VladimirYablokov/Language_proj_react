import './App.css';
import CardContainer from "./components/CardContainer";
import {useEffect, useState} from "react";


function App() {
    const [cards, setCards] = useState([
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

    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem('cards')) ?? [];
        setCards(cards)
    }, []);

    const changeCardState = (id) => {
        setCards(prev => {
                const newState = prev.map(word => {
                    if (word.id === id) {
                        word.state = word.state === 'ru' ? 'en' : 'ru'
                    }
                    return word
                })
                localStorage.setItem('cards', JSON.stringify(newState))
                return newState
            }
        )
    }

    return (
        <div>
            <CardContainer cards={cards} chanceCardState={changeCardState}/>
        </div>
    );
}

export default App;
