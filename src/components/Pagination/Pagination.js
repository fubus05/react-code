import React from 'react';
import s from './Pagination.module.scss'
import arrowLeft from '../../assets/img/left-arrow.svg'
import arrowRight from '../../assets/img/right-arrow.svg'

const Pagination = () => {
    return (
        <div className={s.pagination}>
            <img src={arrowLeft} alt="arrow"/>
            <div className={s.page} >1</div>
            <div className={s.page} >2</div>
            <div className={`${s.page} ${s.active}`} >3</div>
            <div className={s.page} >334</div>
            <img src={arrowRight} alt="arrow"/>
        </div>
    );
};

export default Pagination;