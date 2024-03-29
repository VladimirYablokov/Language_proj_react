import React, {useContext, useState} from 'react';
import Button from "../UI/Button";
import s from './Nav.module.sass'
import Modal from "../UI/Modal";
import AddWords from "../AddWords";
import {Context} from "../../context";

function Nav() {
    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(() => false);
    const {changeLanguage} = useContext(Context);

    return (
        <div className={s.outContainer}>
            <h1 className={s.h1}>Карточки: Русский \ Английский</h1>
            <nav className={s.navigation}>
                <Button onClick={() => setModal(() => true)}>добавить</Button>
                <Button onClick={() => {
                    changeLanguage('en')
                }}>английский</Button>
                <Button onClick={() => {
                    changeLanguage('ru')
                }}>русский</Button>
                {
                    modal &&
                    <Modal closeModal={closeModal}>
                        <AddWords/>
                    </Modal>
                }
            </nav>
        </div>

    );
}

export default Nav;