import React from 'react';
import './profilePersonal.scss'
import profileImg from "../../assets/img/profileImg.jpg"
import vk from "../../assets/img/vk.svg"
import gold from "../../assets/img/gold.png"
import gold2 from "../../assets/img/gold2.PNG"
import userImg from "../../assets/img/user-img.png"
import star from "../../assets/img/stars.svg"
import starp from "../../assets/img/starsp.svg"
import imgproduct from "../../assets/img/lenta-img2.png"
import otpravit from "../../assets/img/otpravit.svg"
import izoh from "../../assets/img/izoh.svg"
import close from "../../assets/img/close.svg"
import commit from "../../assets/img/commit.svg"
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const ProfilePersonal = () => {
    return (
        /*<ProfileLayout>
            <div className="header">
                <ul className="navbar">
                    <li className="nav-item">
                        <a href="" className="nav-link">Главнвя</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Аккаунты</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Пин коды</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Топ Юзеров</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Отзиви</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Гарантии</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Рулетки</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Форум</a>
                    </li>


                </ul>
                <div className="navbar-right">
                    <div className="call">
                        <span className="icon icon-call"/>
                    </div>
                    <div className="profile-menus">
                        <img src={profileImg} alt="profileImg"/>
                        <p>Shenderrro</p>
                        <span className="icon icon-bottom-arrow"/>
                    </div>
                </div>
            </div>
            <div className="textcenter">
                <div className="backImg">
                    <h3>Личный Профиле</h3>
                    <div className="line"></div>
                </div>
            </div>
        </ProfileLayout>*/
        <LayoutGeneral>

            <div className="profile-content">
                <div className="row">
                    <div className="col-4" style={{borderRight: "25px solid #F3F7FF"}}>
                        <div className="card">
                            <img src={profileImg} alt="profileImg"/>
                            <h3>
                                Shenderro
                                <img src={vk} alt="vk"/>
                            </h3>
                            <div className="online-users">
                                <div className="circle1">
                                    <div className="circle2"></div>
                                </div>
                                <p className="online-text">online</p>
                            </div>
                            <p className="kirish">Выйти из аккаунта</p>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row roww">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-3">
                                        <h3>Имя</h3>
                                        <p>Никита</p>
                                    </div>
                                    <div className="col-3">
                                        <h3 className="mediah3">Дата регистрации</h3>
                                        <p className="mediah3">22:12 27.12.2019</p>
                                    </div>
                                    <div className="col-3">
                                        <h3>Покупок</h3>
                                        <p>344</p>
                                    </div>
                                    <div className="col-3">
                                        <h3>Продаж</h3>
                                        <p>Продаж</p>
                                    </div>
                                    <div className="col-3">
                                        <h3>Группа</h3>
                                        <p>Легенда</p>
                                    </div>
                                    <div className="col-3">
                                        <h3 className="mediah3">Кол-во лайков</h3>
                                        <p>452</p>
                                    </div>
                                    <div className="col-6">
                                        <h3>Создано тем на форуме</h3>
                                        <p>2,938</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <h3>Рейтинг продавца</h3>
                                <div className="star">
                                    <div className="stars-count">
                                        <h1>4.8</h1>
                                        <p>из 5</p>
                                    </div>
                                    <div className="stars">
                                        <p>Всего 1555 отзывов</p>
                                        <div className="one-line">
                                            <div className="d-flex">
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                            </div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="two-line">
                                            <div className="ml-auto d-flex">
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                            </div>
                                            <div className="line2"></div>
                                        </div>
                                        <div className="three-line">
                                            <div className="ml-auto d-flex">
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>
                                            </div>
                                            <div className="line2"></div>
                                        </div>
                                        <div className="four-line">
                                            <div className="ml-auto d-flex">
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star2"></span>
                                                <span className="icon icon-star2"></span>

                                            </div>
                                            <div className="line2"></div>
                                        </div>
                                        <div className="five-line">
                                            <div className="ml-auto d-flex">
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star"></span>
                                                <span className="icon icon-star2"></span>
                                            </div>
                                            <div className="line2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="li"></div>
                        <div className="menus-footer">
                            <ul className="navbar">
                                <li className="nav-item">
                                    <a href="" className="nav-link">
                                        Комментарии о покупке
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">
                                        Созданные темы на форуме
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">
                                        Список покупок
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-content-two">
                <div className="row">
                    <div className="col-4" style={{borderRight: "25px solid #F3F7FF"}}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-head d-flex align-items-center justify-content-between">
                                    <p className="mediatext">Достижения</p>
                                    <span className="mediatext">Показать всё</span>
                                </div>

                                <div className="global-gold">
                                    <img src={gold} alt="gold"/>
                                    <div>
                                        <p>Global Gold</p>
                                        <span>Золотой глобус WF</span>
                                    </div>
                                </div>
                                <div className="global-gold">
                                    <img src={gold} alt="gold"/>
                                    <div>
                                        <p>Global Gold</p>
                                        <span>Золотой глобус WF</span>
                                    </div>
                                </div>
                                <div className="global-gold">
                                    <img src={gold} alt="gold"/>
                                    <div>
                                        <p>Global Gold</p>
                                        <span>Золотой глобус WF</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-head d-flex align-items-center justify-content-between">
                                    <p className="mediatext">Товары в продаже</p>
                                    <span className="mediatext">Показать всё</span>
                                </div>

                                <div className="global-gold">
                                    <img src={gold2} alt="gold"/>
                                    <div>
                                        <p>Akkaunt Warface</p>
                                        <div className="d-flex justify-content-between">
                                            <span>25 Ранг</span>
                                            <span>500₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="global-gold">
                                    <img src={gold2} alt="gold"/>
                                    <div>
                                        <p>Akkaunt Warface</p>
                                        <div className="d-flex justify-content-between">
                                            <span>25 Ранг</span>
                                            <span>500₽</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="otziv">
                            <p>800 отзывов</p>
                            <div className="button">
                                <p>Все отзывы</p>
                                <span className="icon icon-bottom-arrow"></span>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <div className="santachezz d-flex py-3">
                                    <img src={userImg} alt=""/>
                                    <div>
                                        <p>Santchezz</p>
                                        <p>01:05 27.12.2019</p>
                                        <div className="stars">
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={starp} alt="star"/>
                                        </div>
                                    </div>
                                    <div className="linevh"></div>
                                    <div className="product">
                                        <img className="lenta" src={imgproduct} alt="imgproduct"/>
                                        <p>Кейс FARM</p>
                                        <p>500₽</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7" style={{borderLeft: "25px solid #F3F7FF"}}>
                                <div className="doira">
                                    <div className="circle">
                                        <div className="circle1"></div>
                                    </div>
                                </div>
                                <div className="py-3 px-4">
                                    <p>Потрясный человек ! <br/> Без обманов, с реальным процентом полезных
                                        выигрышей,<br/>
                                        даже самое слабое из возможных оправдывает свои деньги!</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0">Показать ответ</p>
                                        <span className="d-flex align-items-center">
                                                    <p className="mb-0">Ответить</p>
                                                    <img className="m-lg-2" src={otpravit} alt="otpravit"/>
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-6"></div>
                            <div className="col-6 col66">
                                <img className="commit" src={commit} alt=""/>
                                <div className="commenties d-flex align-items-center justify-content-between">
                                    <img src={profileImg} alt=""/>
                                    <div className="content">
                                        <div className="sana">
                                            <p>Shenderro</p>
                                            <div>
                                                <span>12 Фев. 22:15</span>
                                                <img className="closes" src={close} alt=""/>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Потрясный человек ! Без обманов, с реальным процентом полезных
                                                выигрышей....</p>
                                            <img className="izoh" src={izoh} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <div className="santachezz d-flex py-3">
                                    <img src={userImg} alt=""/>
                                    <div>
                                        <p>Santchezz</p>
                                        <p>01:05 27.12.2019</p>
                                        <div className="stars">
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={starp} alt="star"/>
                                        </div>
                                    </div>
                                    <div className="linevh"></div>
                                    <div className="product">
                                        <img className="lenta" src={imgproduct} alt="imgproduct"/>
                                        <p>Кейс FARM</p>
                                        <p>500₽</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 bg-transparent"></div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <div className="santachezz d-flex py-3">
                                    <img src={userImg} alt=""/>
                                    <div>
                                        <p>Santchezz</p>
                                        <p>01:05 27.12.2019</p>
                                        <div className="stars">
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={star} alt="star"/>
                                            <img src={starp} alt="star"/>
                                        </div>
                                    </div>
                                    <div className="linevh"></div>
                                    <div className="product">
                                        <img className="lenta" src={imgproduct} alt="imgproduct"/>
                                        <p>Кейс FARM</p>
                                        <p>500₽</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7" style={{borderLeft: "25px solid #F3F7FF"}}>
                                <div className="doira">
                                    <div className="circle">
                                        <div className="circle1"></div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="py-3 px-4 mt-auto mb-auto d-block">
                                        <p className=" d-block">Отзыв без коментарии :(</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default ProfilePersonal;