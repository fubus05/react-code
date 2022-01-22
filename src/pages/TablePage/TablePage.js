import React from 'react';
import s from './TablePage.module.scss'
import Layout from "../../components/Layout/Layout";
import dstos from "../../assets/img/dsots.svg";
import {Tab, Tabs} from "react-bootstrap";
import TabContentWrapper from "../../components/TabContentWrapper/TabContentWrapper";
import CustomTable from "../../components/CustomTable/CustomTable";
import Pagination from "../../components/Pagination/Pagination";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const TablePage = () => {
    return (
        <LayoutGeneral>
            <div className={s.main}>

                <div className={s.header}>
                    <div className='titleBlock'>
                        <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                        <div className='title-titleBlock'>
                            <h1>Настройки профиля</h1>
                        </div>
                    </div>
                </div>

                <div className={s.body}>

                    <div className={`card ${s.formBox}`}>
                        <Tabs
                            defaultActiveKey="pin"
                            id="tab-form"
                            className={s.formTabs}>
                            <Tab
                                eventKey="account"
                                title="Заказать аккаунт"
                            >
                                <TabContentWrapper />
                            </Tab>
                            <Tab
                                eventKey="pin"
                                title="Заказать Пин-код"
                            >
                                <TabContentWrapper />
                            </Tab>
                        </Tabs>
                    </div>

                    <div className={`card ${s.table}`}>
                        <CustomTable />
                    </div>

                    <div className={s.paginationBlock}>
                        <Pagination />
                    </div>

                </div>

            </div>
        </LayoutGeneral>
    );
};

export default TablePage;