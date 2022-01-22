import React from 'react';
import '../HomePage/homePage.scss'
import './faqPage.scss'
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import titleBackground from '../../assets/img/titleBG.svg'
import backArrow from '../../assets/img/backArrow.svg'
import exlamationMark from '../../assets/img/exclamation.png'
import smallDots from '../../assets/img/dotsSecond.svg'
import bottomArrow from '../../assets/img/arrowBottom.png'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const FaqPage = () => {
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
            <div className="faq-container">
                <div className="faq-title">
                    <div className="faq-back_arrow">
                        <img className="faq-back_arrow-image" src={backArrow} alt=""/>
                    </div>
                    <img className="title-background" src={titleBackground} alt=""/>
                    <div className="faq-title_inscription">Частые вопросы</div>
                </div>
                <div className="faq-section">
                    <div className="faq-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_faq" src={exlamationMark} alt=""/>
                            </div>
                            <img className="image-dots" src={smallDots} alt=""/>
                        </div>
                        <div className="section-block_text-faq">Пополнил счет, а деньги не пришли, что
                            делать ?
                        </div>
                        <img src={smallDots} className="second-dots"></img>
                        <div className="arrow-bottom_faq"><img src={bottomArrow} alt=""/></div>

                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_faq" src={exlamationMark} alt=""/>
                            </div>
                            <img className="image-dots" src={smallDots} alt=""/>
                        </div>
                        <div className="arrow-bottom_faq"><img src={bottomArrow} alt=""/></div>
                        <div className="section-block_text-faq">Пополнил счет, а деньги не пришли, что
                            делать ?
                        </div>
                        <img src={smallDots} className="second-dots"></img>
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_faq" src={exlamationMark} alt=""/>
                            </div>
                            <img className="image-dots" src={smallDots} alt=""/>
                        </div>
                        <div className="arrow-bottom_faq"><img src={bottomArrow} alt=""/></div>
                        <div className="section-block_text-faq">Пополнил счет, а деньги не пришли, что
                            делать ?
                        </div>
                        <img src={smallDots} className="second-dots"></img>
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_faq" src={exlamationMark} alt=""/>
                            </div>
                            <img className="image-dots" src={smallDots} alt=""/>
                        </div>
                        <div className="arrow-bottom_faq"><img src={bottomArrow} alt=""/></div>
                        <div className="section-block_text-faq">Пополнил счет, а деньги не пришли, что
                            делать ?
                        </div>
                        <img src={smallDots} className="second-dots"></img>
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_faq" src={exlamationMark} alt=""/>
                            </div>
                            <img className="image-dots" src={smallDots} alt=""/>
                        </div>
                        <div className="arrow-bottom_faq"><img src={bottomArrow} alt=""/></div>
                        <div className="section-block_text-faq">Пополнил счет, а деньги не пришли, что
                            делать ?
                        </div>
                        <img src={smallDots} className="second-dots"></img>
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_faq" src={exlamationMark} alt=""/>
                            </div>
                            <img className="image-dots" src={smallDots} alt=""/>
                        </div>
                        <div className="arrow-bottom_faq"><img src={bottomArrow} alt=""/></div>
                        <div className="section-block_text-faq">Пополнил счет, а деньги не пришли, что
                            делать ?
                        </div>
                        <img src={smallDots} className="second-dots"></img>
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-section_block">
                        <div className="section-block_image">
                            <div className="image_circle">
                                <img className="exclamation-mark_faq" src={exlamationMark} alt=""/>
                            </div>
                            <img className="image-dots" src={smallDots} alt=""/>
                        </div>
                        <div className="arrow-bottom_faq"><img src={bottomArrow} alt=""/></div>
                        <div className="section-block_text-faq">Пополнил счет, а деньги не пришли, что
                            делать ?
                        </div>
                        <img src={smallDots} className="second-dots"></img>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default FaqPage;