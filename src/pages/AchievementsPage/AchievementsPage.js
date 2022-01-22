import React from 'react';
import '../HomePage/homePage.scss'
import './dostijenia.scss'
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import achievementPicture from '../../assets/img/achievement.png'
import titleBackground from '../../assets/img/titleBG.svg'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";


const AchievementsPage = () => {
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
            <div className="dostijenia-container">
                <div className="dostijenia-title">
                    <img className="title-background" src={titleBackground} alt=""/>
                    <div className="dostijenia-title_inscription">Мои Достижения</div>
                </div>
                <div className="dostijenia-section">
                    <div className="dostijenia-item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                    <div className="dostijenia-item transparent-dostijenia_item">
                        <img className="dostijenia-item_picture" src={achievementPicture} alt=""/>
                        <div className="dostijenia-item_title">Global Gold</div>
                        <div className="dostijenia-item_inscription">Золотой глобус WF</div>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default AchievementsPage;