import React from 'react'
import './PopupList.scss'

function PopupList(props) {
    return (props.trigger) ? (
        <div className='popupList popupList2'>
                { props.children }
        </div>
    ) : ""; 
}

export default PopupList