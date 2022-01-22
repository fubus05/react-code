import React from 'react';
import '../HomePage/homePage.scss'
import './referals.scss'
import ava from '../../assets/img/ava.png'
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import titleBackground from '../../assets/img/titleBG.svg'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import file from '../../assets/img/fileImage.png'
import vkontakte from '../../assets/img/vkImage.svg'
import arrowBottom from '../../assets/img/arrowBottom.png'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";


const ReferalsPage = () => {
    return (
        <LayoutGeneral>

            <div className='block1'>
                <div className='activity'>
                    <div className='top-active'>
                        <div className="dot">
                            <div className="dot1"></div>
                            <div className="dot1"></div>
                            <div className="dot1"></div>
                        </div>
                        <div className="blockOnline">
                            <div className="greendot"></div>
                            <div className="stat">
                                <div className="numberOnline">2 381</div>
                                <div>Online</div>
                            </div>
                        </div>
                    </div>
                    <div className='botom-active'>
                        <div className='activeUser'>
                            <img src={onlc} alt={"bgc-logo"} className='onlcc'/>
                        </div>
                        <div className='boxBlock'>
                            <img src={gift} alt={"bgc-logo"} className='gift'/>
                        </div>
                    </div>
                </div>
                <div className='scroll'>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc..</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                    <div className='spg'>
                        <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                        <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                        <div className='nameOfBuyer'>
                            <div className='textOfBuyer'>Santc...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="referals-container">
                <div className="referals-title">
                    <img className="title-background" src={titleBackground} alt=""/>
                    <div className="referals-title_inscription">Реферальная система</div>
                </div>
                <div className="user-referals_block">
                    <div className="referals-percentage_block">
                        <div className="percentage_title">Количество %</div>
                        <div className="percentage_block percentage_block-first">
                            <div className="percentage_block-text">от 1 до 499 — 1%</div>
                        </div>
                        <div className="percentage_block percentage_block-second">
                            <div className="percentage_block-text">от 500 до 4999 - 5%</div>
                        </div>
                        <div className="percentage_block percentage_block-third">
                            <div className="percentage_block-text">от 5000 до 14999 - 15%</div>
                        </div>
                        <div className="percentage_block percentage_block-fourth">
                            <div className="percentage_block-text">от 15000 - 30%</div>
                        </div>
                    </div>
                    <div className="referal-link_block">
                        <div className="referal-link_title">РЕФЕРАЛЬНАЯ ССЫЛКА</div>
                        <div className="referal-link_inscription">
                            <div className="referal-link_text">https://warface.online/ref/38921</div>
                            <div className="referal-link_image">
                                <img src={file} alt=""/>
                            </div>
                        </div>
                        <div className="referal-link_share">
                            <div className="referal-link_share-text">Поделиться</div>
                            <div className="referal-link_share-image">
                                <img src={vkontakte} alt=""/>
                            </div>
                        </div>
                        <div className="referal-link_info">Бонусными средствами можно рассчитаться только
                            при покупке рулеток
                        </div>
                        <div
                            className="circle_referals-decoration_block circle_referals-decoration_block-styles">
                            <div className="circle_referals-inside">
                                <div className="small-circle_referals_inside"></div>
                            </div>
                        </div>
                    </div>
                    <div className="referal-user_info-block">
                        <img className="referal_user-avatar" src={ava} alt=""/>
                        <div className="user-nickname">Shenderro</div>
                        <div className="user-info_block">
                            <div className="user-info_block_invited">
                                <div className="user_info-block_number">528</div>
                                <div className="user_info-block_text">Приглашенных</div>
                            </div>
                            <div className="user-info_block_earned">
                                <div className="user_info-block_number">118 523B</div>
                                <div className="user_info-block_text">Заработано</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-list-referals_block">
                    <div className="option-referals-list">
                        <div className="option-referals-item first-referals-item">
                            Номер
                        </div>
                        <div className="option-referals-item second-referals-item">
                            Имя
                        </div>
                        <div className="option-referals-item third-referals-item">

                        </div>
                        <div className="option-referals-item fourth-referals-item">
                            Дата регистрации
                            <img className="arrow-referals" src={arrowBottom} alt=""/>
                        </div>
                    </div>
                    <table className="place-referals-table_block">
                        <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Имя</td>
                            <td></td>
                            <td>Дата регистрации</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Номер">№25812</td>
                            <td data-label="Имя">
                                <div>
                                    <img src={ava} alt=""/>
                                    Shenderro
                                </div>
                            </td>
                            <td data-label="Купленные товары"></td>
                            <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="place-referals-table_block">
                        <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Имя</td>
                            <td></td>
                            <td>Дата регистрации</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Номер">№25812</td>
                            <td data-label="Имя">
                                <div>
                                    <img src={ava} alt=""/>
                                    Shenderro
                                </div>
                            </td>
                            <td data-label="Купленные товары"></td>
                            <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="place-referals-table_block">
                        <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Имя</td>
                            <td></td>
                            <td>Дата регистрации</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Номер">№25812</td>
                            <td data-label="Имя">
                                <div>
                                    <img src={ava} alt=""/>
                                    Shenderro
                                </div>
                            </td>
                            <td data-label="Купленные товары"></td>
                            <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="place-referals-table_block">
                        <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Имя</td>
                            <td></td>
                            <td>Дата регистрации</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Номер">№25812</td>
                            <td data-label="Имя">
                                <div>
                                    <img src={ava} alt=""/>
                                    Shenderro
                                </div>
                            </td>
                            <td data-label="Купленные товары"></td>
                            <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="place-referals-table_block">
                        <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Имя</td>
                            <td></td>
                            <td>Дата регистрации</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Номер">№25812</td>
                            <td data-label="Имя">
                                <div>
                                    <img src={ava} alt=""/>
                                    Shenderro
                                </div>
                            </td>
                            <td data-label="Купленные товары"></td>
                            <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pages-list_referals">
                    <div className="pages-list_arrow_referals">
                        <img src={arrowLeft} alt=""/>
                    </div>
                    <a className="pages-list_item_referals pages-list_item-style_referals pages-list_item-color_referals pages-list_item-dimensions_referals pages-list_item-dimentions_second_referals pages-list_item-media_style_referals"
                       href="">1</a>
                    <a className="pages-list_item_referals pages-list_item-style_referals pages-list_item-color_referals pages-list_item-dimensions_referals pages-list_item-dimentions_second_referals pages-list_item-media_style_referals"
                       href="">2</a>
                    <a className="pages-list_item_referals pages-list_item-style_referals pages-list_item-color-different_referals pages-list_item-dimensions_referals pages-list_item-dimentions_second_referals pages-list_item-media_style_referals"
                       href="">3</a>
                    <a className="pages-list_item_referals pages-list_item-style_referals pages-list_item-color_referals pages-list_item-dimensions_referals pages-list_item-dimentions_second_referals pages-list_item-media_style_referals"
                       href="">334</a>
                    <div className="pages-list_arrow_referals">
                        <img src={arrowRight} alt=""/>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default ReferalsPage;