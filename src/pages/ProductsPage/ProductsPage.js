import React from 'react';
import profileImg from "../../assets/img/profileImg.jpg";
import vip from "../../assets/img/vip.PNG";
import search from "../../assets/img/search.svg";
import bottomArrow from "../../assets/img/bottom-arrow.png";
import vse from "../../assets/img/vse.svg";
import shtru from "../../assets/img/shturmovik.svg";
import medik from "../../assets/img/medik.svg";
import injener from "../../assets/img/injener.svg";
import snay from "../../assets/img/snayper.svg";
import uzkon from "../../assets/img/uzkon12_gold.png";
import user from "../../assets/img/profileImg.jpg";
import savat from "../../assets/img/savat.svg";
import message from "../../assets/img/message.svg";
import ProfileLayout from "../ProfilePersonalPage/ProfileLayout";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const ProductsPage = () => {
    return (
        /*<ProfileLayout>

            <div className="products">
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
            </div>

        </ProfileLayout>*/
        <LayoutGeneral>

            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="row">
                            <div className="col-12">
                                <div className="row pb-5">
                                    <div className="col-4 offset-4">
                                        <div className="card p-3 border-0 cardo">
                                            <div className="new">
                                                <p>new</p>
                                            </div>
                                            <img src={vip} alt=""/>
                                            <h3>Аккаунт Warface</h3>
                                            <p>28.02.20 в 22:34</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 bg-white">
                                <div className="card border-0 cardoo">
                                    <p className="ended">Последняя редакция в 22:15</p>
                                    <div className="d-flex align-items-center">

                                        <div className="alfas">
                                            Альфа
                                        </div>
                                        <div className="alfas">
                                            Браво
                                        </div>
                                        <div className="alfas">
                                            Чарли
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-4">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Номер ранга</span>
                                                <h4>25</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Сервер</span>
                                                <h4>Браво</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Кол-во доната</span>
                                                <h4>185</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Тип аккаунта</span>
                                                <h4>Личный</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Тип аккаунта</span>
                                                <h4>Личный</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Номер ранга</span>
                                                <h4>25</h4>
                                            </div>
                                        </div>
                                        {/*<div className="col-2">*/}
                                        {/*   <div className="mt-auto h-100">*/}
                                        {/*       <span>3 699 <sup>РУБ.</sup></span>*/}
                                        {/*   </div>*/}
                                        {/*</div>*/}
                                        <div className="col">
                                            <div className="profiles">
                                                <div className="position-relative">
                                                    <img src={user} alt=""/>
                                                    <div className="online"></div>
                                                </div>
                                                <div>
                                                    <span className="mx-2 spans">Shenderro</span>
                                                    <p className="mx-2 psss">РЕЙТИНГ ПРОДАВЦА</p>
                                                    <div className="star mt-2">
                                                        <div className="stars-count">
                                                            <h1>4.8</h1>
                                                            <p>из 5</p>
                                                        </div>
                                                        <div className="stars">
                                                            <p className="end-p">Всего 1555 отзывов</p>
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
                                            <div className="buttons px-4">
                                                <span className="prices">3 699 <sup>РУБ.</sup></span>
                                                <button className="btn btn-info d-flex align-items-center">
                                                    <p className="mb-0">Купить</p>
                                                    <img src={savat} alt=""/>
                                                </button>
                                                <div className="message">
                                                    <img src={message} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 bg-white">
                                <div className="card border-0 p-5">
                                    <h3>Описание</h3>
                                    <p className="mt-4">
                                        Лос-Сантос – некогда великолепный городок, попасть в который мечтали
                                        миллионы. Сегодня он стал просто пристанищем вышедших в тираж звезд. Здесь
                                        мало интересных событий и планомерно текущая жизнь.
                                    </p>
                                    <p>
                                        Хотите отравить существование обеспеченных жителей и заставить забыть о
                                        покое всю местную полицию? Тогда вам стоит купить Grand Theft Auto V на
                                        steampay.com! То, что предложили в этой серии разработчики, гарантировано
                                        приведёт вас в неописуемый восторг. Так что не теряйте времени даром и
                                        начните играть прямо сейчас!

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 bg-white">
                                <div className="card border-0 p-5">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h3>Доната</h3>
                                            <div className="linesss"></div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text h-100" id="basic-addon1"><img src={search} alt=""/></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Поиск"
                                                       aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                            <div className="select">
                                                <p>Все</p>
                                                <img src={bottomArrow} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <div className="end-card">
                                                <img src={vse} alt=""/>
                                                <p className="mb-0">Все</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card">
                                                <img src={shtru} alt=""/>
                                                <p className="mb-0">Штурмовик</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card">
                                                <img src={medik} alt=""/>
                                                <p className="mb-0">Медик</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card">
                                                <img src={injener} alt=""/>
                                                <p className="mb-0">Инженер</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card">
                                                <img src={snay} alt=""/>
                                                <p className="mb-0">Снайпер</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamat"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamat"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamat"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamaty"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamaty"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamaty"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamat"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamatk"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamat"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="end-card2">
                                                <div className="lineaftamat"></div>
                                                <img src={uzkon} alt=""/>
                                                <p>Золотой  Uzkon UNG-12</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"></div>
                                        <div className="col-4">
                                            <button className="btn btn-success">
                                                Показать еще 10
                                            </button>
                                        </div>
                                        <div className="col-4"></div>
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

export default ProductsPage;