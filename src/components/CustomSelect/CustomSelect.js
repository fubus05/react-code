import React from 'react';
import s from './CustomSelect.module.scss'
import {FormSelect} from "react-bootstrap"
import autoImg from '../../assets/img/automat.png'

const CustomSelect = ({data}) => {
    return (
        <div className={s.wrapper}>
            <h4 className={s.title}>{data.title}</h4>
            <FormSelect aria-label="Default select example">
                {/*<option>Open this select menu</option>
                <option value="1">One</option>*/}
                {
                    data.options.map((i, index) =>
                        <option
                            className={s.option}
                            key={index}
                            value={index}
                        >
                             {i.name}
                        </option>
                    )
                }
                {/*<option value="2">Two</option>
                <option value="3">Three</option>*/}
            </FormSelect>
        </div>
    );
};

export default CustomSelect;