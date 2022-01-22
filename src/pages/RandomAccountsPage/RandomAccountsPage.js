import React from 'react';
import './RandomAcc.scss'
import profileImg from "../../assets/img/profileImg.jpg";
import akkauntWarface from "../../assets/img/akkaunt-warface.PNG";
import userImg from "../../assets/img/profileImg.jpg";
import wk from "../../assets/img/wk.svg";
import beaf from "../../assets/img/beautiful.png";
import dstos from "../../assets/img/dsots.svg";
import ProfileLayout from "../ProfilePersonalPage/ProfileLayout";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const RandomAccountsPage = () => {
    return (
        /*<ProfileLayout>

            <div className="random">
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
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="textcenter">
                            <div className='titleBlock mt-0'>
                                <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                                <div className='title-titleBlock'>
                                    Розыгрыш
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row pt-5">
                    <div className="col-10 offset-1">
                        <div className="row">
                            <div className="col-8 bg-white">
                                <div className="card px-4 py-2 border-0">
                                    <div className="row">
                                        <div className="col">
                                            <div className="akkaunt-warface">
                                                <img src={akkauntWarface} alt=""/>
                                                <div>
                                                    <h3>Аккаунт Warface</h3>
                                                    <p>25 Ранг</p>
                                                </div>
                                            </div>
                                            <h4>Чтобы принять участие Вы должны подписаться на наш ВК.</h4>
                                            <div className="btn-sp btn-primary-btn d-flex align-items-center justify-content-center">
                                                <p>Подписаться</p>
                                                <img src={wk} alt="" className='btn-primary-img-btn'/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h5>
                                                Осталось времени:
                                            </h5>
                                            <div className="times">
                                                <div className='time'>
                                                    <div className='timm backggg'>
                            <span className="ejOCg5z2IRYYBBwJgyaC">
                                    <div className='backgg'></div>
                                    <div className="nAzGKA_sSgU__7y1Sksv _Gd5nwCzqjVIpaqguPID">24</div>
                                    <div className="H_QXQHDLgbvpC9cx4OYU hlMDYlWE6LYBrsBIY2xY">Часа</div>
                            </span>
                                                    </div>
                                                    <div className='timm backgg'>
                            <span className="ejOCg5z2IRYYBBwJgyaC">
                                    <div className='backgg'></div>
                                    <div className="nAzGKA_sSgU__7y1Sksv _Gd5nwCzqjVIpaqguPID">44</div>
                                    <div className="H_QXQHDLgbvpC9cx4OYU hlMDYlWE6LYBrsBIY2xY">Минут</div>
                            </span>
                                                    </div>
                                                    <div className='timm backg'>
                            <span className="ejOCg5z2IRYYBBwJgyaC ">
                                    <div className="nAzGKA_sSgU__7y1Sksv _Gd5nwCzqjVIpaqguPID">05</div>
                                    <div className="H_QXQHDLgbvpC9cx4OYU hlMDYlWE6LYBrsBIY2xY">Секунд</div>
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btnws btn-primarys d-flex align-items-center justify-content-center">
                                                <p>Участвовать в акции</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card border-0">
                                    <div className="doira">
                                        <div className="circle">
                                            <div className="circle1"></div>
                                        </div>
                                    </div>
                                    <div className="pos">
                                        <img src={userImg} alt=""/>
                                    </div>
                                    <div className="body">
                                        <div className="btn-s btn-primary-btn">
                                            <p>Последний победитель</p>
                                        </div>
                                        <h3>Santchezz</h3>
                                        <div className="three">
                                            <div>
                                                <h3>34 2819</h3>
                                                <p>Открыл кейсов</p>
                                            </div>
                                            <div className="lineee"></div>
                                            <div>
                                                <h3>118 523₽</h3>
                                                <p>Заработанно</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="textcenter">
                            <div className="backImg">
                                <h3>Участники</h3>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="row mt-3">
                            <div className="col-4">
                                <div className="card p-3 border-0">
                                    <div className="d-flex align-items-center cardss">
                                        <img className="beaf" src={beaf} alt=""/>
                                        <div className="mx-2">
                                            <h3>Allice</h3>
                                            <p>Занял(a) место: #1287</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card p-3 border-0">
                                    <div className="d-flex align-items-center cardss">
                                        <img className="beaf" src={beaf} alt=""/>
                                        <div className="mx-2">
                                            <h3>Allice</h3>
                                            <p>Занял(a) место: #1287</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card p-3 border-0">
                                    <div className="d-flex align-items-center cardss">
                                        <img className="beaf" src={beaf} alt=""/>
                                        <div className="mx-2">
                                            <h3>Allice</h3>
                                            <p>Занял(a) место: #1287</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <div className="card p-3 border-0">
                                    <div className="d-flex align-items-center cardss">
                                        <img className="beaf" src={beaf} alt=""/>
                                        <div className="mx-2">
                                            <h3>Allice</h3>
                                            <p>Занял(a) место: #1287</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card p-3 border-0">
                                    <div className="d-flex align-items-center cardss">
                                        <img className="beaf" src={beaf} alt=""/>
                                        <div className="mx-2">
                                            <h3>Allice</h3>
                                            <p>Занял(a) место: #1287</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card p-3 border-0">
                                    <div className="d-flex align-items-center cardss">
                                        <img className="beaf" src={beaf} alt=""/>
                                        <div className="mx-2">
                                            <h3>Allice</h3>
                                            <p>Занял(a) место: #1287</p>
                                        </div>
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

export default RandomAccountsPage;