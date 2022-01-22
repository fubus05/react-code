import React from 'react'
import './PopupAcc.scss'

function PopupAcc(props) {
    return (props.trigger) ? (
        <div className='popupAcc popupAcc2'>
                { props.children }
        </div>
    ) : ""; 
}

export default PopupAcc