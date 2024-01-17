import React from 'react';
import s from './Modal.module.sass'

function Modal({closeModal, children}) {
    return (
        <div className={s.container}
             onClick={closeModal}
             onSubmit={closeModal}>
            <div className={s.modal}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;