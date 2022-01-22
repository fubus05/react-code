import React from 'react';
import '../HomePage/homePage.scss'
import './topUsers.scss'
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import titleBackground from '../../assets/img/titleBG.svg'
import avatar from '../../assets/img/avatar.png'
import topUserStar from '../../assets/img/topUserStar.svg'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";


const TopUsersPage = () => {
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
            <div className="top-users_container">
                <div className="top-users-title">
                    <img className="title-background" src={titleBackground} alt=""/>
                    <div className="top-users-title_inscription">Топ Юзеров</div>
                </div>
                <div className="top-users_section">
                    <div className="top-three-users_block">
                        <div className="top-three-users_block-section">
                                <div className="S7fM3qqOSU8eaVCaCCRO">
                                <div className="top-user-main_block-avatar_block">
                                    <img className="img-avatar" src={avatar} alt=""/>
                                    <div
                                        className="user-place_block-background user-place_block-background-styles_second">
                                        <img className="top-user_star-image" src={topUserStar} alt=""/>
                                        2 Место
                                    </div>
                                </div>
                                <div className="top-user-main_block-nickname_block">Santchezz</div>
                                <div className="top-user-main_block-info_block">
                                    <div className="bought-items_block">
                                        <div className="bought-items_count">34,281</div>
                                        <div className="bought-items_inscription">Купленные товары</div>
                                    </div>
                                    <div className="earned-items_block">
                                        <div className="bought-items_count">118,523₽</div>
                                        <div className="bought-items_inscription">Заработано</div>
                                    </div>
                                </div>
                                </div>
                                <div className="circle-decoration_block circle-decoration_block-styles dies-circle">
                                    <div className="circle-inside">
                                        <div className="small-circle_inside"></div>
                                    </div>
                                </div>

                        </div>
                        <div className="top-three-users_block-section">
                        <div className="circle-decoration_block circle-decoration-block-styles shower-circle left-shower-circle">
                                    <div className="circle-inside">
                                        <div className="small-circle_inside"></div>
                                    </div>
                                </div>
                                <div className="S7fM3qqOSU8eaVCaCCRO">
                                <div className="top-user-main_block-avatar_block">
                                    <img className="img-avatar" src={avatar} alt=""/>
                                    <div
                                        className="user-place_block-background user-place_block-background-styles_first">
                                        <img className="top-user_star-image" src={topUserStar} alt=""/>
                                        1 Место
                                    </div>
                                </div>
                                <div className="top-user-main_block-nickname_block">Santchezz</div>
                                <div className="top-user-main_block-info_block">
                                    <div className="bought-items_block">
                                        <div className="bought-items_count">34,281</div>
                                        <div className="bought-items_inscription">Купленные товары</div>
                                    </div>
                                    <div className="earned-items_block">
                                        <div className="bought-items_count">118,523₽</div>
                                        <div className="bought-items_inscription">Заработано</div>
                                    </div>
                                </div>
                                </div>
                                <div className="circle-decoration_block circle-decoration_block-styles aadapt-circle-style">
                                    <div className="circle-inside">
                                        <div className="small-circle_inside"></div>
                                    </div>
                                </div>
                        </div>
                        <div className="top-three-users_block-section">
                        <div className="circle-decoration_block circle-decoration-block-styles shower-circle left-shower-circle">
                                    <div className="circle-inside">
                                        <div className="small-circle_inside"></div>
                                    </div>
                                </div>
                                <div className="S7fM3qqOSU8eaVCaCCRO">
                                <div className="top-user-main_block-avatar_block">
                                    <img className="img-avatar" src={avatar} alt=""/>
                                    <div
                                        className="user-place_block-background user-place_block-background-styles_third">
                                        <img className="top-user_star-image" src={topUserStar} alt=""/>
                                        3 Место
                                    </div>
                                </div>
                                <div className="top-user-main_block-nickname_block">Santchezz</div>
                                <div className="top-user-main_block-info_block">
                                    <div className="bought-items_block">
                                        <div className="bought-items_count">34,281</div>
                                        <div className="bought-items_inscription">Купленные товары</div>
                                    </div>
                                    <div className="earned-items_block">
                                        <div className="bought-items_count">118,523₽</div>
                                        <div className="bought-items_inscription">Заработано</div>
                                    </div>
                                </div>
                                </div>
                                <div className="circle-decoration_block circle-decoration_block-styles shower-circle">
                                    <div className="circle-inside">
                                        <div className="small-circle_inside"></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="your-place_inscription-block">Ваше место</div>
                    <table className="QNZgUnVYen_F_ZqTb1W3">
                        <tbody>
                        <tr>
                            <td data-label="Место">4856</td>
                            <td data-label="Пользователь">
                                <div>
                                    <img src={avatar} alt=""/>
                                    Shenderro
                                </div>
                            </td>
                            <td data-label="Купленные товары">863</td>
                            <td data-label="Заработано">58 924₽</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className='QNZgUnVYen_F_ZqTb1W3'>
                    <thead>
                        <tr>
                            <td>Место</td>
                            <td>Пользователь</td>
                            <td>Купленные товары</td>
                            <td>Заработанно</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td data-label="Место">4</td>
                    <td data-label="Пользователь">
                    <div><img src={avatar} alt=""/>Evhen_823
                    </div>
                    </td>
                    <td data-label="Купленные товары">863</td>
                    <td data-label="Заработанно">58 924₽</td>
                    </tr>
                    <tr>
                    <td data-label="Место">5</td>
                    <td data-label="Пользователь">
                    <div>
                    <img src={avatar} alt=""/>Evhen_823</div>
                    </td><td data-label="Купленные товары">863</td>
                    <td data-label="Заработанно">58 924₽</td>
                    </tr>
                    <tr>
                    <td data-label="Место">6</td>
                    <td data-label="Пользователь">
                    <div><img src={avatar} alt=""/>Evhen_823</div>
                    </td>
                    <td data-label="Купленные товары">863</td>
                    <td data-label="Заработанно">58 924₽</td>
                    </tr>
                    <tr>
                    <td data-label="Место">7</td>
                    <td data-label="Пользователь"><div>
                    <img src={avatar} alt=""/>Evhen_823</div>
                    </td>
                    <td data-label="Купленные товары">863</td>
                    <td data-label="Заработанно">58 924₽</td>
                    </tr></tbody>
                    </table>
                    <div className="pages-list">
                        <div className="pages-list_arrow">
                            <img src={arrowLeft} alt=""/>
                        </div>
                        <a className="pages-list_item pages-list_item-style pages-list_item-color pages-list_item-dimensions pages-list_item-dimentions_second pages-list_item-media_style"
                           href="">1</a>
                        <a className="pages-list_item pages-list_item-style pages-list_item-color pages-list_item-dimensions pages-list_item-dimentions_second pages-list_item-media_style"
                           href="">2</a>
                        <a className="pages-list_item pages-list_item-style pages-list_item-color-different pages-list_item-dimensions pages-list_item-dimentions_second pages-list_item-media_style"
                           href="">3</a>
                        <a className="pages-list_item pages-list_item-style pages-list_item-color pages-list_item-dimensions pages-list_item-dimentions_second pages-list_item-media_style"
                           href="">334</a>
                        <div className="pages-list_arrow">
                            <img src={arrowRight} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default TopUsersPage;