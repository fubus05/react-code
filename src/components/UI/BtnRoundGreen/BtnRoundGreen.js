import React from 'react';
import s from './BtnRoundGreen.module.scss'

const BtnRoundGreen = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};

export default BtnRoundGreen;