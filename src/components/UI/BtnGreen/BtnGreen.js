import React from 'react';
import s from './BtnGreen.module.scss'

const BtnGreen = () => {
    return (
        <button className={`btn btn-success ${s.btnGreen}`}>
            войти
        </button>
    );
};

export default BtnGreen;