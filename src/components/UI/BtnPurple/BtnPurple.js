import React from 'react';

const BtnPurple = ({width, text = `Присоединиться`}) => {
    return (
        <button
            className='btn btn-primary'
            style={{width: width}}>
            {text}
        </button>
    );
};

export default BtnPurple;