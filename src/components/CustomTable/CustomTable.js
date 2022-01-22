import React from 'react';
import s from './CustomTable.module.scss'
import {Table} from "react-bootstrap";

const CustomTable = () => {
    const data = [
        {id: 1, orderId: '№25812', name: 'Аккаунт Warface', content: 'Товар', term: '255 лет', amount: '675'},
        {id: 2, orderId: '№25812', name: 'Аккаунт Warface', content: 'Товар', term: '255 лет', amount: '675'},
        {id: 3, orderId: '№25812', name: 'Аккаунт Warface', content: 'Товар', term: '255 лет', amount: '675'},
    ]

    return (
        <Table
            hover
            className={s.table}
        >
            <thead className={s.tHead}>
            <tr className={s.tRow}>
                <th className={s.th}>Номер</th>
                <th className={s.th}>Название</th>
                <th className={s.th}>Содержимое</th>
                <th className={s.th}>Срок</th>
                <th className={s.th}>Количество</th>
            </tr>
            </thead>
            <tbody className={s.tBody}>
            {
                data.map(i => {
                    return (
                        <tr key={i.id} className={s.tRow}>
                            <td className={s.td}>{i.orderId}</td>
                            <td className={s.td}>{i.name}</td>
                            <td className={s.td}>{i.content}</td>
                            <td className={s.td}>{i.term}</td>
                            <td className={s.td}>{i.amount}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    );
};

export default CustomTable;