import React from 'react';
// import '../HomePage/homePage.scss'
import './history-view.scss'
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import titleBackground from '../../assets/img/titleBG.svg'
import backArrow from '../../assets/img/backArrow.svg'
import bottomArrow from '../../assets/img/arrowBottom.png'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import eyeShape from '../../assets/img/eyeShape.svg'
import eyeInside from '../../assets/img/eyeInside.svg'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import search from '../../assets/img/search.png'

const HistoryView = () => {
    return (
        <LayoutGeneral>
            <div>
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
            <div className="history-view-container">
            <div class="titleBlock"><img src={titleBackground} alt="bgc-logo" class="dsot"/><div class="title-titleBlock">История просмотров</div></div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_history-view" src={eyeShape} alt=""/>
                                <img className="exclamation-mark-inside_history-view" src={eyeInside} alt=""/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription">Аккаунт Warface 2500 руб</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first">Краткая информация</div>
                                <div className="section-block_text-inscription_second">Чарли, 15 ранг, 45 ур...</div>
                            </div>
                            <div className="section-block_text-inscription_block-date">
                                <div className="section-block_text-inscription_first-date">Дата просмотра</div>
                                <div className="section-block_text-inscription_second-date">1 Ноя 2019 22:15 <span className="red-text">notrejour</span></div>
                            </div>
                        </div>
                        <div className="redirect-block">
                            <div className="redirect-block_text">Перейти</div>
                            <img className="redirect-block_arrow" src={backArrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_history-view" src={eyeShape} alt=""/>
                                <img className="exclamation-mark-inside_history-view" src={eyeInside} alt=""/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription">Профиль notrejour</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first">Краткая информация</div>
                                <div className="section-block_text-inscription_second">Чарли, 15 ранг, 45 ур...</div>
                            </div>
                            <div className="section-block_text-inscription_block-date">
                                <div className="section-block_text-inscription_first-date">Дата просмотра</div>
                                <div className="section-block_text-inscription_second-date">1 Ноя 2019 22:15 <span className="red-text">notrejour</span></div>
                            </div>
                        </div>
                        <div className="redirect-block">
                            <div className="redirect-block_text">Перейти</div>
                            <img className="redirect-block_arrow" src={backArrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_history-view" src={eyeShape} alt=""/>
                                <img className="exclamation-mark-inside_history-view" src={eyeInside} alt=""/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription">Пин-код Makmilan 1000 руб</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first">Краткая информация</div>
                                <div className="section-block_text-inscription_second">Чарли, 15 ранг, 45 ур...</div>
                            </div>
                            <div className="section-block_text-inscription_block-date">
                                <div className="section-block_text-inscription_first-date">Дата просмотра</div>
                                <div className="section-block_text-inscription_second-date">1 Ноя 2019 22:15 <span className="red-text">notrejour</span></div>
                            </div>
                        </div>
                        <div className="redirect-block">
                            <div className="redirect-block_text">Перейти</div>
                            <img className="redirect-block_arrow" src={backArrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_history-view" src={eyeShape} alt=""/>
                                <img className="exclamation-mark-inside_history-view" src={eyeInside} alt=""/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription">Форум раздел Warface</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first">Краткая информация</div>
                                <div className="section-block_text-inscription_second">Чарли, 15 ранг, 45 ур...</div>
                            </div>
                            <div className="section-block_text-inscription_block-date">
                                <div className="section-block_text-inscription_first-date">Дата просмотра</div>
                                <div className="section-block_text-inscription_second-date">1 Ноя 2019 22:15 <span className="red-text">notrejour</span></div>
                            </div>
                        </div>
                        <div className="redirect-block">
                            <div className="redirect-block_text">Перейти</div>
                            <img className="redirect-block_arrow" src={backArrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_history-view" src={eyeShape} alt=""/>
                                <img className="exclamation-mark-inside_history-view" src={eyeInside} alt=""/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription">Аккаунт Warface 45 уровень</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first">Краткая информация</div>
                                <div className="section-block_text-inscription_second">Чарли, 15 ранг, 45 ур...</div>
                            </div>
                            <div className="section-block_text-inscription_block-date">
                                <div className="section-block_text-inscription_first-date">Дата просмотра</div>
                                <div className="section-block_text-inscription_second-date">1 Ноя 2019 22:15 <span className="red-text">notrejour</span></div>
                            </div>
                        </div>
                        <div className="redirect-block">
                            <div className="redirect-block_text">Перейти</div>
                            <img className="redirect-block_arrow" src={backArrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_history-view" src={eyeShape} alt=""/>
                                <img className="exclamation-mark-inside_history-view" src={eyeInside} alt=""/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription">Аккаунт Warface 45 уровень</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first">Краткая информация</div>
                                <div className="section-block_text-inscription_second">Чарли, 15 ранг, 45 ур...</div>
                            </div>
                            <div className="section-block_text-inscription_block-date">
                                <div className="section-block_text-inscription_first-date">Дата просмотра</div>
                                <div className="section-block_text-inscription_second-date">1 Ноя 2019 22:15 <span className="red-text">notrejour</span></div>
                            </div>
                        </div>
                        <div className="redirect-block">
                            <div className="redirect-block_text">Перейти</div>
                            <img className="redirect-block_arrow" src={backArrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_history-view" src={eyeShape} alt=""/>
                                <img className="exclamation-mark-inside_history-view" src={eyeInside} alt=""/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription">Аккаунт Warface 45 уровень</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first">Краткая информация</div>
                                <div className="section-block_text-inscription_second">Чарли, 15 ранг, 45 ур...</div>
                            </div>
                            <div className="section-block_text-inscription_block-date">
                                <div className="section-block_text-inscription_first-date">Дата просмотра</div>
                                <div className="section-block_text-inscription_second-date">1 Ноя 2019 22:15 <span className="red-text">notrejour</span></div>
                            </div>
                        </div>
                        <div className="redirect-block">
                            <div className="redirect-block_text">Перейти</div>
                            <img className="redirect-block_arrow" src={backArrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_history-view" src={eyeShape} alt=""/>
                                <img className="exclamation-mark-inside_history-view" src={eyeInside} alt=""/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription">Аккаунт Warface 45 уровень</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first">Краткая информация</div>
                                <div className="section-block_text-inscription_second">Чарли, 15 ранг, 45 ур...</div>
                            </div>
                            <div className="section-block_text-inscription_block-date">
                                <div className="section-block_text-inscription_first-date">Дата просмотра</div>
                                <div className="section-block_text-inscription_second-date">1 Ноя 2019 22:15 <span className="red-text">notrejour</span></div>
                            </div>
                        </div>
                        <div className="redirect-block">
                            <div className="redirect-block_text">Перейти</div>
                            <img className="redirect-block_arrow" src={backArrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="pages-list_history-view">
                            <div className="pages-list_arrow_history-view">
                                <img src={arrowLeft} alt="" />
                            </div>
                            <a className="pages-list_item_history-view pages-list_item-style_history-view pages-list_item-color_history-view pages-list_item-dimensions_history-view pages-list_item-dimentions_second_history-view pages-list_item-media_style_history-view" href="">1</a>
                            <a className="pages-list_item_history-view pages-list_item-style_history-view pages-list_item-color_history-view pages-list_item-dimensions_history-view pages-list_item-dimentions_second_history-view pages-list_item-media_style_history-view" href="">2</a>
                            <a className="pages-list_item_history-view pages-list_item-style_history-view pages-list_item-color-different_history-view pages-list_item-dimensions_history-view pages-list_item-dimentions_second_history-view pages-list_item-media_style_history-view" href="">3</a>
                            <a className="pages-list_item_history-view pages-list_item-style_history-view pages-list_item-color_history-view pages-list_item-dimensions_history-view pages-list_item-dimentions_second_history-view pages-list_item-media_style_history-view" href="">334</a>
                            <div className="pages-list_arrow_history-view">
                                <img src={arrowRight} alt="" />
                            </div>
                        </div>
            </div>
            </div>
        </LayoutGeneral>
    );
};

export default HistoryView;