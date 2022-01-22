import React from 'react';
import s from './BtnRoundOrange.module.scss'

const BtnRoundOrange = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};

export default BtnRoundOrange;