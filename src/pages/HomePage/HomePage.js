import React from 'react';
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import dstos from '../../assets/img/dsots.svg'
import Aw4 from "../../assets/img/Arrow4.png";
import offer from "../../assets/img/Group123.png";
import Rank from "../../assets/img/Rank.png";
import gun from "../../assets/img/631e1465d7ef61dde713.png";
import rankere from "../../assets/img/Ротатер.svg";
import avorite from "../../assets/img/6e13cbbb50ab61951fab.svg";
import photo from "../../assets/img/el.png";
import more from "../../assets/img/487b5c72c244942cc36c.svg";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";


const HomePage = () => {
    const colorSwitcher = () => {
        let element = document.getElementById('activeUser')
        element.setState({
            backgroundColor: 'linear-gradient(36.87deg, #B139FE 18.57%, #1E61EB 80.26%)',
            borderRadius: '100px'
        })
    }
    
    const colorSwitcherSecond = () => {

    }
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
                                <div className='activeUser' onClick={colorSwitcher} id='activeUser'>
                                    <img src={onlc} alt={"bgc-logo"} className='onlcc'/>
                                </div>
                                <div className='boxBlock' onClick={colorSwitcherSecond}>
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
                    <div className='block2 beQI6fBNXl0BcMX2Wfp_ HGMr3Lwqvk4yRQpKeFYC'>
                        <div className='nik4UFOYz78R0BvLjhV9 ZoKCDNSt9kFZMk_ugLCB'>
                                <button className='button-left'>
                                    <img src={Aw4} alt={"bgc-logo"}/>
                                </button>
                                <div className='imgforconnectinserv'>
                                <img src={offer} alt={"bgc-logo"} className='wZXjvtSBmGMqG2HeNyiK dcxxIwxiILPhG0jw8Kei'/>
                                </div>
                                <div className='rang'>
                                        <img src={Rank} alt={"bgc-logo"} className='rank-photo'/>
                                </div>
                                <div className="EAYhiqFEQ7_r9an3yuV_">
                                    <div className="iD3a5zO_VWeTwFAGEMvx _6dj9N8TTW53yC_L9paP">Аккаунт Warface</div>
                                    <div className="kqH7bI0w70d_M3Z3Y70y cESq0tVMDVyW_FnduiLN">25 Ранг</div>
                                </div>
                                <a className="GLW2mbSD7kIKpK_u1OXW kwTCKEzB9tIvCcFC_esk LbduNOgFRYXA9fe1vwxm PLC9B1yvYNyJveHTrbi5 p3gB5XwXCk2DkmDyaDSm _mAvubYps97TAT6RYRxD">
                                    Присоединиться
                                </a>
                            <div className='time OIgQEtuXQYKtKBIzoFY4'>
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
                                    <div className="nAzGKA_sSgU__7y1Sksv _Gd5nwCzqjVIpaqguPID">24</div>
                                    <div className="H_QXQHDLgbvpC9cx4OYU hlMDYlWE6LYBrsBIY2xY">Минут</div>
                            </span>
                                </div>
                                <div className='timm backg'>
                            <span className="ejOCg5z2IRYYBBwJgyaC ">
                                    <div className="nAzGKA_sSgU__7y1Sksv _Gd5nwCzqjVIpaqguPID">24</div>
                                    <div className="H_QXQHDLgbvpC9cx4OYU hlMDYlWE6LYBrsBIY2xY">Секунд</div>
                            </span>
                                </div>
                            </div>

                        </div>
                        <div className='E9DJsfsxMnEBd5X4reA3 UMV_vsH1QiDCeZJmXVTN'></div>
                    </div>
                    <div className='titleBlock'>
                        <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                        <div className='title-titleBlock'>
                            Популярные кейсы
                        </div>
                    </div>
                    <div className='BmQR_GrXJqDVsHa63vSs _oWo1JfTcQwaG35LDRVm'>
                        <div className='_dD3jgY6CJ5dbTfGcFA2 afBTXln8ynWWLw8NOh0x farm'>
                            <div className='nQTbEzMhKL1Zhp_hayh8'>
                                <img src={blueCas} alt={"bgc-logo"}
                                    className="xcbLgsTnzYak_KVLe6yb V4nEEf_xQlGY7Ct4vleU"/>
                                <div className='T1GgDPSiFB_oKMBywQIc OHeP6o_YKe_j2atU1IXD'>
                            <span
                                className='GLW2mbSD7kIKpK_u1OXW kwTCKEzB9tIvCcFC_esk LbduNOgFRYXA9fe1vwxm YeJe45ggUSeMr7my_u5y vxqFl1dmWXpF2LtdZD6G'>
                                <div className='YhxNJcHzJWzqRADto3jo C_sKUa7Sk_ACpKK_vx_m'>15%</div>1990₽
                                <div className='qp8vN54AuhkLZFz7HKMQ uCeIyzA5mOsPDDP_H3sx'>1990B</div>
                            </span>
                                    <div className='_0iYGhElgFZsaF_PDRBp _T3905nh9EoMFKjvNT6M'>Рулетка</div>
                                    <div className='a1dYl_0Fu7KYxV16bH3y ybw0KWHpNiN92RgA_Bxn'>FARM</div>
                                    <div
                                        className='GLW2mbSD7kIKpK_u1OXW kwTCKEzB9tIvCcFC_esk dlZgEGqUKFU7Ig_PNtzz _1SEPqxzF99CTOyKrxLh osK6c0k6nKW4ou1EUbki'>Крутить
                                        рулетку
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='_dD3jgY6CJ5dbTfGcFA2 afBTXln8ynWWLw8NOh0x yello'>
                            <div className='nQTbEzMhKL1Zhp_hayh8'>
                                <img src={blueCas} alt={"bgc-logo"}
                                     className="xcbLgsTnzYak_KVLe6yb V4nEEf_xQlGY7Ct4vleU"/>
                                <div className='T1GgDPSiFB_oKMBywQIc OHeP6o_YKe_j2atU1IXD'>
                            <span
                                className='GLW2mbSD7kIKpK_u1OXW kwTCKEzB9tIvCcFC_esk LbduNOgFRYXA9fe1vwxm YeJe45ggUSeMr7my_u5y vxqFl1dmWXpF2LtdZD6G'>
                                <div className='YhxNJcHzJWzqRADto3jo C_sKUa7Sk_ACpKK_vx_m'>15%</div>1990₽
                                <div className='qp8vN54AuhkLZFz7HKMQ uCeIyzA5mOsPDDP_H3sx'>1990B</div>
                            </span>
                                    <div className='_0iYGhElgFZsaF_PDRBp _T3905nh9EoMFKjvNT6M'>Рулетка</div>
                                    <div className='a1dYl_0Fu7KYxV16bH3y ybw0KWHpNiN92RgA_Bxn'>YELLO</div>
                                    <div
                                        className='GLW2mbSD7kIKpK_u1OXW kwTCKEzB9tIvCcFC_esk dlZgEGqUKFU7Ig_PNtzz _1SEPqxzF99CTOyKrxLh osK6c0k6nKW4ou1EUbki'>Крутить
                                        рулетку
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='_dD3jgY6CJ5dbTfGcFA2 afBTXln8ynWWLw8NOh0x rose'>
                            <div className='nQTbEzMhKL1Zhp_hayh8'>
                                <img src={blueCas} alt={"bgc-logo"}
                                    className="xcbLgsTnzYak_KVLe6yb V4nEEf_xQlGY7Ct4vleU"/>
                                <div className='T1GgDPSiFB_oKMBywQIc OHeP6o_YKe_j2atU1IXD'>
                            <span
                                className='GLW2mbSD7kIKpK_u1OXW kwTCKEzB9tIvCcFC_esk LbduNOgFRYXA9fe1vwxm YeJe45ggUSeMr7my_u5y vxqFl1dmWXpF2LtdZD6G'>
                                <div className='YhxNJcHzJWzqRADto3jo C_sKUa7Sk_ACpKK_vx_m'>15%</div>1990₽
                                <div className='qp8vN54AuhkLZFz7HKMQ uCeIyzA5mOsPDDP_H3sx'>1990B</div>
                            </span>
                                    <div className='_0iYGhElgFZsaF_PDRBp _T3905nh9EoMFKjvNT6M'>Рулетка</div>
                                    <div className='a1dYl_0Fu7KYxV16bH3y ybw0KWHpNiN92RgA_Bxn'>ROSE</div>
                                    <div
                                        className='GLW2mbSD7kIKpK_u1OXW kwTCKEzB9tIvCcFC_esk dlZgEGqUKFU7Ig_PNtzz _1SEPqxzF99CTOyKrxLh osK6c0k6nKW4ou1EUbki'>Крутить
                                        рулетку
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='topPin'>
                        <div className='blockPin'>
                            <div className='topPiners'>Топ Аккаунтов</div>
                            <div className='topAcc colorAcc'>
                                Топ Пин-кодов
                            </div>
                        </div>
                    </div>
                    <div className='salerBlock'>
                        <div className='blockSale'>
                            <div className='informSale'>
                                <div className='headerSaler'>
                                    <div className='textSaler'>new</div>
                                </div>
                                <div className='bodySaler'>
                                    <div>
                                        <div className='basewh'>
                                    <span className='rankeree'>
                                        <img src={gun} alt={"bgc-logo"} className='guner'/>
                                        <img src={rankere} alt={"bgc-logo"} className='rrrrr'/>

                                    </span>
                                        </div>
                                    </div>
                                    <div className='textMac'>
                                        <div className='blcText'>Makmilan Gr-23</div>
                                        <div className='wwcText'>Тип: Оружие</div>
                                        <div className='wwcText'>Кол: 33</div>
                                        <div className='wwcText'>Продажа от: 33 шт</div>
                                        <div className='wwcText'>Срок: Навсегда</div>
                                    </div>
                                    <div className='favorute'>
                                        <img src={avorite} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                                <div className='footerSaler'>
                                    <div className='legoBlock'>
                                        <div className='logoBlock'>
                                            <img src={photo} alt={"bgc-logo"} className='oi8'/>
                                            <div className='onlineDot'></div>
                                        </div>
                                        <div className='nameOfUser'>Alice</div>
                                    </div>
                                    <button className='butonwithPrice'>
                                        <span className='tagPrice'>Цена</span>
                                        <span className='price'>120.00₽</span>
                                    </button>
                                    <div className='morebutton'>
                                        <img src={more} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                            </div>
                            <div className='informSale'>
                                <div className='headerSaler'>
                                    <div className='textSaler'>new</div>
                                </div>
                                <div className='bodySaler'>
                                    <div>
                                        <div className='basewh'>
                                    <span className='rankeree'>
                                        <img src={gun} alt={"bgc-logo"} className='guner'/>
                                        <img src={rankere} alt={"bgc-logo"} className='rrrrr'/>

                                    </span>
                                        </div>
                                    </div>
                                    <div className='textMac'>
                                        <div className='blcText'>Makmilan Gr-23</div>
                                        <div className='wwcText'>Тип: Оружие</div>
                                        <div className='wwcText'>Кол: 33</div>
                                        <div className='wwcText'>Продажа от: 33 шт</div>
                                        <div className='wwcText'>Срок: Навсегда</div>
                                    </div>
                                    <div className='favorute'>
                                        <img src={avorite} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                                <div className='footerSaler'>
                                    <div className='legoBlock'>
                                        <div className='logoBlock'>
                                            <img src={photo} alt={"bgc-logo"} className='oi8'/>
                                            <div className='onlineDot'></div>
                                        </div>
                                        <div className='nameOfUser'>Alice</div>
                                    </div>
                                    <button className='butonwithPrice'>
                                        <span className='tagPrice'>Цена</span>
                                        <span className='price'>120.00₽</span>
                                    </button>
                                    <div className='morebutton'>
                                        <img src={more} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                            </div>
                            <div className='informSale'>
                                <div className='headerSaler'>
                                    <div className='textSaler'>new</div>
                                </div>
                                <div className='bodySaler'>
                                    <div>
                                        <div className='basewh'>
                                    <span className='rankeree'>
                                        <img src={gun} alt={"bgc-logo"} className='guner'/>
                                        <img src={rankere} alt={"bgc-logo"} className='rrrrr'/>

                                    </span>
                                        </div>
                                    </div>
                                    <div className='textMac'>
                                        <div className='blcText'>Makmilan Gr-23</div>
                                        <div className='wwcText'>Тип: Оружие</div>
                                        <div className='wwcText'>Кол: 33</div>
                                        <div className='wwcText'>Продажа от: 33 шт</div>
                                        <div className='wwcText'>Срок: Навсегда</div>
                                    </div>
                                    <div className='favorute'>
                                        <img src={avorite} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                                <div className='footerSaler'>
                                    <div className='legoBlock'>
                                        <div className='logoBlock'>
                                            <img src={photo} alt={"bgc-logo"} className='oi8'/>
                                            <div className='onlineDot'></div>
                                        </div>
                                        <div className='nameOfUser'>Alice</div>
                                    </div>
                                    <button className='butonwithPrice'>
                                        <span className='tagPrice'>Цена</span>
                                        <span className='price'>120.00₽</span>
                                    </button>
                                    <div className='morebutton'>
                                        <img src={more} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                            </div>
                            <div className='informSale'>
                                <div className='headerSaler'>
                                    <div className='textSaler'>new</div>
                                </div>
                                <div className='bodySaler'>
                                    <div>
                                        <div className='basewh'>
                                    <span className='rankeree'>
                                        <img src={gun} alt={"bgc-logo"} className='guner'/>
                                        <img src={rankere} alt={"bgc-logo"} className='rrrrr'/>

                                    </span>
                                        </div>
                                    </div>
                                    <div className='textMac'>
                                        <div className='blcText'>Makmilan Gr-23</div>
                                        <div className='wwcText'>Тип: Оружие</div>
                                        <div className='wwcText'>Кол: 33</div>
                                        <div className='wwcText'>Продажа от: 33 шт</div>
                                        <div className='wwcText'>Срок: Навсегда</div>
                                    </div>
                                    <div className='favorute'>
                                        <img src={avorite} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                                <div className='footerSaler'>
                                    <div className='legoBlock'>
                                        <div className='logoBlock'>
                                            <img src={photo} alt={"bgc-logo"} className='oi8'/>
                                            <div className='onlineDot'></div>
                                        </div>
                                        <div className='nameOfUser'>Alice</div>
                                    </div>
                                    <button className='butonwithPrice'>
                                        <span className='tagPrice'>Цена</span>
                                        <span className='price'>120.00₽</span>
                                    </button>
                                    <div className='morebutton'>
                                        <img src={more} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                            </div>
                            <div className='informSale'>
                                <div className='headerSaler'>
                                    <div className='textSaler'>new</div>
                                </div>
                                <div className='bodySaler'>
                                    <div>
                                        <div className='basewh'>
                                    <span className='rankeree'>
                                        <img src={gun} alt={"bgc-logo"} className='guner'/>
                                        <img src={rankere} alt={"bgc-logo"} className='rrrrr'/>

                                    </span>
                                        </div>
                                    </div>
                                    <div className='textMac'>
                                        <div className='blcText'>Makmilan Gr-23</div>
                                        <div className='wwcText'>Тип: Оружие</div>
                                        <div className='wwcText'>Кол: 33</div>
                                        <div className='wwcText'>Продажа от: 33 шт</div>
                                        <div className='wwcText'>Срок: Навсегда</div>
                                    </div>
                                    <div className='favorute'>
                                        <img src={avorite} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                                <div className='footerSaler'>
                                    <div className='legoBlock'>
                                        <div className='logoBlock'>
                                            <img src={photo} alt={"bgc-logo"} className='oi8'/>
                                            <div className='onlineDot'></div>
                                        </div>
                                        <div className='nameOfUser'>Alice</div>
                                    </div>
                                    <button className='butonwithPrice'>
                                        <span className='tagPrice'>Цена</span>
                                        <span className='price'>120.00₽</span>
                                    </button>
                                    <div className='morebutton'>
                                        <img src={more} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                            </div>
                            <div className='informSale'>
                                <div className='headerSaler'>
                                    <div className='textSaler'>new</div>
                                </div>
                                <div className='bodySaler'>
                                    <div>
                                        <div className='basewh'>
                                    <span className='rankeree'>
                                        <img src={gun} alt={"bgc-logo"} className='guner'/>
                                        <img src={rankere} alt={"bgc-logo"} className='rrrrr'/>

                                    </span>
                                        </div>
                                    </div>
                                    <div className='textMac'>
                                        <div className='blcText'>Makmilan Gr-23</div>
                                        <div className='wwcText'>Тип: Оружие</div>
                                        <div className='wwcText'>Кол: 33</div>
                                        <div className='wwcText'>Продажа от: 33 шт</div>
                                        <div className='wwcText'>Срок: Навсегда</div>
                                    </div>
                                    <div className='favorute'>
                                        <img src={avorite} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                                <div className='footerSaler'>
                                    <div className='legoBlock'>
                                        <div className='logoBlock'>
                                            <img src={photo} alt={"bgc-logo"} className='oi8'/>
                                            <div className='onlineDot'></div>
                                        </div>
                                        <div className='nameOfUser'>Alice</div>
                                    </div>
                                    <button className='butonwithPrice'>
                                        <span className='tagPrice'>Цена</span>
                                        <span className='price'>120.00₽</span>
                                    </button>
                                    <div className='morebutton'>
                                        <img src={more} alt={"bgc-logo"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </LayoutGeneral>
    );
};

export default HomePage;