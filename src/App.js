import './App.css';
import CardContainer from "./components/CardContainer";
import {useEffect, useState} from "react";
import Nav from "./components/Nav";
import PostContainer from "./components/PostContainer";
import {Context} from './context'
import UserContainer from "./components/UserContainer";

export default function App() {
    const [cards, _setCards] = useState([])

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

    const changeLanguage = (language) => {
        setCards(prev => prev.map(card => {
            card.state = language
            return card
        }))
    }

    const addCard = (card) => {
        setCards(prev => [...prev, card])
    }

    const closeCard = (id) => {
        setCards(prev => {
            return prev.filter(card => card.id !== id)
        })
    }

    return (
        <>
            <Context.Provider value={{changeLanguage, changeCardState, addCard, closeCard}}>
                <Nav/>
                <CardContainer cards={cards}/>
            </Context.Provider>
            <UserContainer/>
            <PostContainer/>
        </>
    );
}
