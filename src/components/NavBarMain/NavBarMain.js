import React, {useState} from 'react';
import s from './NavBarMain.module.scss'
import logo from "../../assets/img/5cb8035b29bc3566a317.svg";
import BtnGreen from "../UI/BtnGreen/BtnGreen";
import MainMenuModal from "./MainMenuModal/MainMenuModal";

const NavBarMain = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuOpenHandler = e => {
        setIsOpen(!isOpen)
    };

    return (
        <header className={s.navBarMain}>
            <div className={s.logoWrapper}>
                <img src={logo} className={s.logo} alt="logo"/>
            </div>
            <div className={s.rightSide}>
                <BtnGreen/>
                <span
                    className={s.burger}
                    onClick={menuOpenHandler}
                />
            </div>
            {
                isOpen && <MainMenuModal />
            }
        </header>
    );
};

export default NavBarMain;