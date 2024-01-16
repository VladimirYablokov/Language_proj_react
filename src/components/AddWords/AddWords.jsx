import React from 'react';
import s from './AddWords.module.sass'
import Button from "../UI/Button";
import Field from "../UI/Field";

function AddWords() {
    const submit = (event) => {
        const {en, ru} = event.target
        event.preventDefault()
        const word = {
            id: Date.now(),
            en: en.value,
            ru: ru.value,
            state: 'ru'
        }
        console.log(word)
    }


    return (
        <form className={s.addForm} onSubmit={submit}>
            <Field label={"на русском"} name={'ru'}/>
            <Field label={"на английском"} name={'en'}/>
            <Field/>
            <Button>Добавить</Button>
        </form>
    );
}

export default AddWords;