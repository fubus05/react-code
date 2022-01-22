import React from 'react';
import '../HomePage/homePage.scss'
import './history-store.scss'
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import titleBackground from '../../assets/img/titleBG.svg'
import backArrow from '../../assets/img/backArrow.svg'
import search from '../../assets/img/search.png'
import rankPicture from '../../assets/img/rankImage.png'
import currentRank from '../../assets/img/currentRank.png'
import avatar from '../../assets/img/avatar.png'
import online from '../../assets/img/online.png'
import favorites from '../../assets/img/favorites.png'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import chatIcon from '../../assets/img/chatIcon.png'
import chatSmallLine from '../../assets/img/chatSmallLine.png'
import chatBigLine from '../../assets/img/chatBigLine.png'
import openCase from '../../assets/img/case.png'
import adminAvatar from '../../assets/img/adminAvatar.png'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const HistoryPage = () => {
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
            <div className="zakladky-container">
                <div className="zakladky-title">
                    <img className="title-background" src={titleBackground} alt=""/>
                    <div className="zakladky-title_inscription">История покупок и продаж</div>
                </div>
                <div className="top-accounts_main-block">
                    <div className="shell-block">
                        <div className="zakladky-back_arrow">
                            <img className="zakladky-back_arrow-image" src={backArrow} alt=""/>
                        </div>
                    </div>
                    <div className="top-accounts_block">
                        <div className="top-accounts_inscription">Мои покупки</div>
                        <div className="top-pin-codes_inscription">Мои продажи</div>
                    </div>
                    <div className="shell-block_two">
                        <div className="search-main_block">
                            <img className="search-image" src={search} alt=""/>
                            <input className="search-input" type="search" placeholder="Поиск"/>
                        </div>
                    </div>
                </div>
                <div className="zakladky-section">
                    <div className="zakladky-section_item">
                        <div className="rank-avatar_item-block">
                            <div className="rank_item-block">
                                <div className="circle-rank_block circle-rank_block-styles">
                                    <div className="circle_rank-inside">
                                    </div>
                                    <div className="circle_rank-inside_second">
                                    </div>
                                    <div className="circle_rank-inside_gray">
                                    </div>
                                    <div className="small-circle-rank_inside"></div>
                                </div>
                                <img className="rank-image" src={rankPicture} alt=""/>
                                <img className="currentRank-image" src={currentRank} alt=""/>
                            </div>
                            <div className="avatar_item-block">
                                <div className="item-block_avatar">
                                    <img className="item-block_avatar-image" src={avatar} alt=""/>
                                    <img className="item-block_avatar-status" src={online} alt=""/>
                                </div>
                                <div className="description_item-block">Allice</div>
                            </div>
                        </div>
                        <div className="info-price_item-block">
                            <div className="info-price_item-block_title">
                                <div className="info-price_title">Аккаунт Warface</div>
                                <div className="image-block_favorite"><img className="favorites-image"
                                                                           src={favorites} alt=""/></div>
                                <div className="id-number">#23141</div>
                            </div>
                            <div className="info-price_general-info">Сервер: Альфа</div>
                            <div className="info-price_general-info">Донат: 251</div>
                            <div className="info-price_general-info">Ранг: 25</div>
                            <div className="info-price_general-info">Тип: Перепродажа</div>
                            <div className="price-info_block">
                                <div className="price-info_block-section_first">
                                    <div className="price-info_value">Цена <span
                                        className="price_value">120.00₽</span></div>
                                    <div className="more-info_block">
                                        <div className="more-info_dots-block">
                                            <div className="more-info_dots"></div>
                                            <div className="more-info_dots"></div>
                                            <div className="more-info_dots"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info_block-section_second">
                                    <div className="chat_block">
                                        <div className="chat_icon-block">
                                            <div className="chat-icon">
                                                <img className="chat-icon_image" src={chatIcon} alt=""/>
                                            </div>
                                            <div className=".chat-icon">
                                                <img className="chat-small-line_image" src={chatSmallLine}
                                                     alt=""/>
                                            </div>
                                            <div className=".chat-icon">
                                                <img className="chat-big-line_image" src={chatBigLine}
                                                     alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="zakladky-section_item">
                        <div className="rank-avatar_item-block">
                            <div className="rank_item-block">
                                <div className="circle-rank_block circle-rank_block-styles">
                                    <div className="circle_rank-inside">
                                    </div>
                                    <div className="circle_rank-inside_second">
                                    </div>
                                    <div className="circle_rank-inside_gray">
                                    </div>
                                    <div className="small-circle-rank_inside"></div>
                                </div>
                                <img className="rank-image" src={rankPicture} alt=""/>
                                <img className="currentRank-image" src={currentRank} alt=""/>
                            </div>
                            <div className="avatar_item-block">
                                <div className="item-block_avatar">
                                    <img className="item-block_avatar-image" src={avatar} alt=""/>
                                    <img className="item-block_avatar-status" src={online} alt=""/>
                                </div>
                                <div className="description_item-block">Allice</div>
                            </div>
                        </div>
                        <div className="info-price_item-block">
                            <div className="info-price_item-block_title">
                                <div className="info-price_title">Makmilan</div>
                                <div className="image-block_favorite"><img className="favorites-image"
                                                                           src={favorites} alt=""/></div>
                                <div className="id-number">#23141</div>
                            </div>
                            <div className="info-price_general-info">Тип: Оружие</div>
                            <div className="info-price_general-info">Кол: 251</div>
                            <div className="info-price_general-info">Продажа от: 25 шт</div>
                            <div className="info-price_general-info">Срок: Навсегда</div>
                            <div className="price-info_block">
                                <div className="price-info_block-section_first">
                                    <div className="price-info_value">Цена <span
                                        className="price_value">120.00₽</span></div>
                                    <div className="more-info_block">
                                        <div className="more-info_dots-block">
                                            <div className="more-info_dots"></div>
                                            <div className="more-info_dots"></div>
                                            <div className="more-info_dots"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info_block-section_second">
                                    <div className="chat_block">
                                        <div className="chat_icon-block">
                                            <div className="chat-icon">
                                                <img className="chat-icon_image" src={chatIcon} alt=""/>
                                            </div>
                                            <div className=".chat-icon">
                                                <img className="chat-small-line_image" src={chatSmallLine}
                                                     alt=""/>
                                            </div>
                                            <div className=".chat-icon">
                                                <img className="chat-big-line_image" src={chatBigLine}
                                                     alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="zakladky-section_item">
                        <div className="rank-avatar_item-block">
                            <div className="rank_item-block">
                                <div className="circle-rank_block circle-rank_block-styles">
                                    <div className="circle_rank-inside">
                                    </div>
                                    <div className="circle_rank-inside_second">
                                    </div>
                                    <div className="circle_rank-inside_gray">
                                    </div>
                                    <div className="small-circle-rank_inside_two"></div>
                                </div>
                                <img className="rank-image" src={rankPicture} alt=""/>
                                <img className="currentRank-image" src={currentRank} alt=""/>
                            </div>
                            <div className="avatar_item-block">
                                <div className="item-block_avatar">
                                    <img className="item-block_avatar-image_different" src={openCase}
                                         alt=""/>
                                    <img className="item-block_avatar-status" src={online} alt=""/>
                                </div>
                                <div className="description_item-block_different">Warface</div>
                            </div>
                        </div>
                        <div className="info-price_item-block">
                            <div className="info-price_item-block_title">
                                <div className="info-price_title">Услуга сайта</div>
                                <div className="image-block_favorite"><img className="favorites-image"
                                                                           src={favorites} alt=""/></div>
                                <div className="id-number">#23141</div>
                            </div>
                            <div className="info-price_general-info">Сервер: Браво</div>
                            <div className="info-price_general-info">Привяз: Без</div>
                            <div className="info-price_general-info">Ранг: 25</div>
                            <div className="info-price_general-info">Тип: Случайный аккаунт</div>
                            <div className="price-info_block">
                                <div className="price-info_block-section_first">
                                    <div className="price-info_value">Цена <span
                                        className="price_value">120.00₽</span></div>
                                    <div className="more-info_block">
                                        <div className="more-info_dots-block">
                                            <div className="more-info_dots"></div>
                                            <div className="more-info_dots"></div>
                                            <div className="more-info_dots"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info_block-section_second">
                                    <div className="chat_block">
                                        <div className="chat_icon-block">
                                            <div className="chat-icon">
                                                <img className="chat-icon_image" src={chatIcon} alt=""/>
                                            </div>
                                            <div className=".chat-icon">
                                                <img className="chat-small-line_image" src={chatSmallLine}
                                                     alt=""/>
                                            </div>
                                            <div className=".chat-icon">
                                                <img className="chat-big-line_image" src={chatBigLine}
                                                     alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="zakladky-section_item">
                        <div className="rank-avatar_item-block">
                            <div className="rank_item-block">
                                <div className="circle-rank_block circle-rank_block-styles">
                                    <div className="circle_rank-inside">
                                    </div>
                                    <div className="circle_rank-inside_second">
                                    </div>
                                    <div className="circle_rank-inside_gray">
                                    </div>
                                    <div className="small-circle-rank_inside"></div>
                                </div>
                                <img className="rank-image" src={rankPicture} alt=""/>
                                <img className="currentRank-image" src={currentRank} alt=""/>
                            </div>
                            <div className="avatar_item-block">
                                <div className="item-block_avatar">
                                    <img className="item-block_avatar-image" src={adminAvatar} alt=""/>
                                    <img className="item-block_avatar-status" src={online} alt=""/>
                                </div>
                                <div className="description_item-block_different">Admin</div>
                            </div>
                        </div>
                        <div className="info-price_item-block">
                            <div className="info-price_item-block_title">
                                <div className="info-price_title">Аккаунт Warface</div>
                                <div className="image-block_favorite"><img className="favorites-image"
                                                                           src={favorites} alt=""/></div>
                                <div className="id-number">#23141</div>
                            </div>
                            <div className="info-price_general-info">Закрепление темы на форуме</div>
                            <div className="info-price_general-info"></div>
                            <div className="info-price_general-info"></div>
                            <div className="info-price_general-info"></div>
                            <div className="price-info_block">
                                <div className="price-info_block-section_first">
                                    <div className="price-info_value">Цена <span
                                        className="price_value">120.00₽</span></div>
                                    <div className="more-info_block">
                                        <div className="more-info_dots-block">
                                            <div className="more-info_dots"></div>
                                            <div className="more-info_dots"></div>
                                            <div className="more-info_dots"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info_block-section_second">
                                    <div className="chat_block">
                                        <div className="chat_icon-block">
                                            <div className="chat-icon">
                                                <img className="chat-icon_image" src={chatIcon} alt=""/>
                                            </div>
                                            <div className=".chat-icon">
                                                <img className="chat-small-line_image" src={chatSmallLine}
                                                     alt=""/>
                                            </div>
                                            <div className=".chat-icon">
                                                <img className="chat-big-line_image" src={chatBigLine}
                                                     alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages-list_zakladky">
                    <div className="pages-list_arrow_zakladky">
                        <img src={arrowLeft} alt=""/>
                    </div>
                    <a className="pages-list_item_zakladky pages-list_item-style_zakladky pages-list_item-color_zakladky pages-list_item-dimensions_zakladky pages-list_item-dimentions_second_zakladky pages-list_item-media_style_zakladky"
                       href="">1</a>
                    <a className="pages-list_item_zakladky pages-list_item-style_zakladky pages-list_item-color_zakladky pages-list_item-dimensions_zakladky pages-list_item-dimentions_second_zakladky pages-list_item-media_style_zakladky"
                       href="">2</a>
                    <a className="pages-list_item_zakladky pages-list_item-style_zakladky pages-list_item-color-different_zakladky pages-list_item-dimensions_zakladky pages-list_item-dimentions_second_zakladky pages-list_item-media_style_zakladky"
                       href="">3</a>
                    <a className="pages-list_item_zakladky pages-list_item-style_zakladky pages-list_item-color_zakladky pages-list_item-dimensions_zakladky pages-list_item-dimentions_second_zakladky pages-list_item-media_style_zakladky"
                       href="">334</a>
                    <div className="pages-list_arrow_zakladky">
                        <img src={arrowRight} alt=""/>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default HistoryPage;