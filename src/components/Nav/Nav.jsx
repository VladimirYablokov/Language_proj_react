import React, {useState} from 'react';
import Button from "../UI/Button";
import s from './Nav.module.sass'
import Modal from "../UI/Modal";
import AddWords from "../AddWords";

function Nav({changeLanguage, }) {
    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(()=>false)


    return (
        <nav className={s.navigation}>
            <Button onClick={()=> setModal(()=> true)}>добавить</Button>
            <Button onClick={()=> {changeLanguage('en')}}>английский</Button>
            <Button onClick={()=> {changeLanguage('ru')}}>русский</Button>
            {
                modal &&
                <Modal closeModal={closeModal}>
                    <AddWords />
                </Modal>
            }
        </nav>
    );
}

export default Nav;