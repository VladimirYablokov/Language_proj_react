import React from 'react';
import s from './CloseButton.module.sass'

function CloseButton({handler}) {
    return (
        <div className={s.close}
             onClick={handler}>
            ❌
        </div>
    );
}

export default CloseButton;