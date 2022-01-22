import React from 'react';
import s from './MainPage.module.scss'
import dots from '../../assets/img/main-dots.png'
import logo from '../../assets/img/main-logo.png'
import MainMenu from "../../components/MainMenu/MainMenu";
import SocialButton from "../../components/UI/SocialButton/SocialButton";
import BtnGreen from "../../components/UI/BtnGreen/BtnGreen";
import BtnPurple from "../../components/UI/BtnPurple/BtnPurple";
import MainCard from "../../components/UI/MainCard/MainCard";
import NavBarMob from "../../components/NavBarMob/NavBarMob";
import NavBarMain from "../../components/NavBarMain/NavBarMain";

const MainPage = () => {
    const data = [
        {
            id: 1,
            title: 'Выгодные предложения',
            content: 'Гарантия безопасной сделки, а также удобная система реферальных бонусов! '
        },
        {id: 2, title: 'Выгодные предложения', content: 'Ежедневно бесплатные розыгрыши для наших пользователей!'},
        {
            id: 3,
            title: 'Выгодные предложения',
            content: 'Полезная информация на форуме и бронирование запросов на товары! '
        },
    ]

    return (
        <div className={s.main}>
            <div className={s.navBarMain}>
                <NavBarMain />
            </div>
            {/*<div className={s.navBarMob}>
                <NavBarMob />
            </div>*/}
            <div className="waiter">
                <img src={dots} className={s.dots} alt="dots"/>
                <div className={`card ${s.content}`}>



                    <div className={s.header}>
                        <img src={logo} className={s.logo} alt="logo"/>
                        <div className={s.menuWrapper}>
                            <MainMenu/>
                        </div>
                        <div className={s.btnWrapper}>
                            <SocialButton/>
                            <BtnGreen/>
                        </div>
                    </div>

                    <div className={s.body}>
                        <div className={s.leftSide}>
                            <span className={s.onlineDeal}>
                                сделка онлаин
                            </span>
                            <div className={`card ${s.contentBlock}`}>
                                <h1 className={s.title}>
                                    DealkGo.com — совершайте безопасную сделку сейчас !
                                </h1>
                                <div className={s.greenLine}/>
                                <p className={s.description}>
                                    Присоединяйтесь к нам прямо сейчас, и получите 15 бонусов на счёт при первом
                                    пополении своего баланса.
                                </p>
                                <BtnPurple width={`275px`}/>
                            </div>
                        </div>
                        <div className={s.rightSide}>
                            <div className={s.cardWrapper}>
                            <div className='    n'>
                                {
                                    data.map((i, index) =>
                                        <MainCard key={index} data={i}/>
                                    )
                                }
                            </div>
                            </div>
                            <div className={s.vWrapper}>
                                <div className={s.verticalBox}>
                                    
                                    <div className={`card ${s.whyContent}`}>
                                        <div className={s.vLine}/>
                                        <p className={s.vText}>ПОЧЕМУ МЫ ?</p>
                                    </div>
                                    <span className={s.whyBg}>ПОЧЕМУ МИ</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.footer}>
                        <p className={s.copyRight}>
                            DealkGo.com — Крупнейший проект по продажам цифровых товаров. © 2020, Все права защищены.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;