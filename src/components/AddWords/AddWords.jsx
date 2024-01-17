import React, {useContext} from 'react';
import s from './AddWords.module.sass'
import Button from "../UI/Button";
import Field from "../UI/Field";
import {Context} from "../../context";

function AddWords({closeModal}) {
    const {addCard} = useContext(Context);
    const submit = (event) => {
        const {en, ru} = event.target
        event.preventDefault()
        addCard({
            id: Date.now(),
            en: en.value,
            ru: ru.value,
            state: 'ru'
        })
    }

    return (
        <form className={s.addForm} onSubmit={submit}>
            <Field label={"на русском"} name={'ru'}/>
            <Field label={"на английском"} name={'en'}/>
            <Button onClick={closeModal}>Добавить</Button>
        </form>
    );
}

export default AddWords;