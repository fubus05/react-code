import React from 'react';
import '../HomePage/homePage.scss'
import './review.scss'
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import dstos from '../../assets/img/dsots.svg'
import avatar from '../../assets/img/avatar.png'
import dots from '../../assets/img/dots.svg'
import leftArrow from '../../assets/img/leftArrow.svg'
import rightArrow from'../../assets/img/rightArrow.svg'
import dotsPicture from '../../assets/img/dots-picture.svg'
import sendReviewButton from '../../assets/img/sendReview.svg'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";


const ReviewsPage = () => {
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
            <div className="reviews-container">
                <div className='titleBlock'>
                    <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                    <div className='title-titleBlock'>
                        Отзывы
                    </div>
                    <div className="reviews-count">
                        <div className="reviews-count_text">Количество отзывов: 753</div>
                    </div>
                </div>
                <div className="reviews-section">
                    <div className="reviews">
                        <div className="reviews_user reviews_user-location">
                            <div className="user-general_info DL3Cwbhl7gbzUOzhc91A">
                                <div className="user-avatar"><img className="avatar" src={avatar} alt=""/>
                                </div>
                                <div className="user-info">
                                    <div>
                                        <div className="nickname">Santchezz</div>
                                        <div className="user-info_date">01:05 27.12.2019</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sphere-between own_PxAaPlmDzCGAFAhL">
                                <div className="sphere-between_circle">
                                    <div className="sphere-between_circle2"></div>
                                </div>
                        </div>
                        </div>
                        <div className="reviews_comment">
                            <div className="comment-text">Потрясный сайт! Без обманов, с реальным процентом
                                полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги!
                                Сделано потрясающе! Спасибо ребятам
                            </div>
                        </div>
                    </div>
                    <div className="reviews">
                        <div className="reviews_user reviews_user-location">
                            <div className="user-general_info">
                                <div className="user-avatar"><img className="avatar" src={avatar} alt=""/>
                                </div>
                                <div className="user-info">
                                    <div>
                                        <div className="nickname">Santchezz</div>
                                        <div className="user-info_date">01:05 27.12.2019</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sphere-between own_PxAaPlmDzCGAFAhL">
                                <div className="sphere-between_circle">
                                    <div className="sphere-between_circle2"></div>
                                </div>
                        </div>
                        </div>
                        <div className="reviews_comment">
                            <div className="comment-text">Потрясный сайт! Без обманов, с реальным процентом
                                полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги!
                                Сделано потрясающе! Спасибо ребятам
                            </div>
                        </div>
                    </div>
                    <div className="reviews">
                        <div className="reviews_user reviews_user-location">
                            <div className="user-general_info">
                                <div className="user-avatar"><img className="avatar" src={avatar} alt=""/>
                                </div>
                                <div className="user-info">
                                    <div>
                                        <div className="nickname">Santchezz</div>
                                        <div className="user-info_date">01:05 27.12.2019</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sphere-between own_PxAaPlmDzCGAFAhL">
                                <div className="sphere-between_circle">
                                    <div className="sphere-between_circle2"></div>
                                </div>
                        </div>
                        </div>
                        <div className="reviews_comment">
                            <div className="comment-text">Потрясный сайт! Без обманов, с реальным процентом
                                полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги!
                                Сделано потрясающе! Спасибо ребятам
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-comments">
                    <a className="more-comments_link more-comments_link-location more-comments_link-color"
                       href="">Показать еще 5
                        <img src={dots} alt=""/>
                    </a>
                </div>
                <div className="review-pages">
                    <div className="arrow"><img src={leftArrow} alt=""/></div>
                    <a className="page-number page-location page-color page-style page-options page-more_styles"
                       href="">1</a>
                    <a className="page-number page-location page-color page-style page-options page-more_styles"
                       href="">2</a>
                    <a className="page-number page-location page-color_gradient page-style page-options page-more_styles"
                       href="">3</a>
                    <a className="page-number page-location page-color page-style page-options page-more_styles"
                       href="">334</a>
                    <div className="arrow"><img src={rightArrow} alt=""/></div>
                </div>
                <div className="leave-review_title">
                    <img className="leave-review_image" src={dotsPicture} alt=""/>
                    <div className="leave-review_inscription">Оставить отзыв</div>
                </div>
                <div className="review-write_area">
                                <textarea rows="2" className="review-area_text" type="text"
                                          placeholder="Напишите свой отзыв"></textarea>
                    <div className="send-review">
                        <div className="send-review_button">
                            <img src={sendReviewButton} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="review-bottom_text">Спасибо. Ваш отзыв будет размещен в течение дня.</div>
            </div>
        </LayoutGeneral>
    );
};

export default ReviewsPage;