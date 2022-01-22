import React, {useState} from 'react';
import s from './NavBarGeneral.module.scss'
import bg from '../../assets/img/mob-bg.png'
import logo from "../../assets/img/main-logo.png";
import BtnGreen from "../UI/BtnGreen/BtnGreen";
import MainMenuModal from "../NavBarMain/MainMenuModal/MainMenuModal";
import BtnRoundGreen from "../UI/BtnRoundGreen/BtnRoundGreen";
import alarm from "../../assets/img/alarm.svg";
import profile from "../../assets/img/onlineLogo.svg";
import BtnRoundOrange from "../UI/BtnRoundOrange/BtnRoundOrange";
import sellLogo from "../../assets/img/cart.svg";
import favorite from "../../assets/img/favorite.svg";
import history from "../../assets/img/list.svg";
import heart from "../../assets/img/heart.svg";
import PopupAcc from '../PopupAcc/PopupAcc';
import PopupList from '../PopupList/PopupList';

const NabBarGeneral = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuOpenHandler = e => {
        setIsOpen(!isOpen)
    };

    return (
        <header className={s.container}>
            <img className={s.back} src={bg} alt="bg"/>
            <div className={`card`}>
                <div className={s.navBarMain}>
                    <div className={s.logoWrapper}>
                        <img src={logo} className={s.logo} alt="logo"/>
                    </div>
                    <div className={s.rightSide}>
                        <BtnRoundGreen>
                            <img src={alarm} alt="alarm"/>
                        </BtnRoundGreen>
                        <BtnRoundOrange>
                            <img src={profile} alt="profile"/>
                        </BtnRoundOrange>

                        <span
                            className={s.burger}
                            onClick={menuOpenHandler}
                        />
                    </div>
                </div>
            </div>

            {
                isOpen &&
                <MainMenuModal>
                    <div className='section-button'>
                        <div className='sell-button'>
                            <div className='sell-logo'>
                                <img src={sellLogo} alt={"bgc-logo"}/>
                            </div>
                            <p className='txtButton'>Продать товар</p>
                        </div>
                        <div className='sell-button'>
                            <div className='sell-logo'>
                                <img src={favorite} alt={"bgc-logo"}/>
                            </div>
                            <p className='txtButton'>закладки</p>
                        </div>
                        <div className='sell-button'>
                            <div className='sell-logo'>
                                <img src={history} alt={"bgc-logo"}/>
                            </div>
                            <p className='txtButton'>история просмотра.</p>
                        </div>
                        <div className='sell-button'>
                            <div className='sell-logo'>
                                <img src={heart} alt={"bgc-logo"}/>
                            </div>
                            <p className='txtButton'>история покупок и продаж</p>
                        </div>
                    </div>
                </MainMenuModal>
            }
        </header>
    );
};

export default NabBarGeneral;