import React from 'react';
import insta from "../assets/img/717b8dd2035235767fc2.svg";
import discord from "../assets/img/4958ce576e17636b4d3e.svg";
import vk from "../assets/img/6da4ba6803ebc97b8766.svg";
import you from "../assets/img/1dd35c3a942639272e7c.svg";

const Footer = () => {
    return (
        <div className='zDnNllK7UIYDNkSMMRAg'>
            <div className='ZDVq86Q3j1v7HmgAYqBW'>
            <div className="basicClasser">
                <div className='_PZP6NWvi7HMX5fjkcLy'>
                    <div className='whiter'>DealkGo.com</div>
                    — Крупнейший проект по продажам цифровых
                    товаров.<br/>
                </div>
                © 2020, Все права защищены.
            </div>
            <ul className='contact X3Ei3bgJmVmcRN4pnUG5'>
                <li>Пользовательское соглашение</li>
                <li>Контакты</li>
                <li>Частые вопросы</li>
            </ul>
            <div className='socialicon'>
                <img src={insta} alt={"bgc-logo"}/>
                <img src={discord} alt={"bgc-logo"}/>
                <img src={vk} alt={"bgc-logo"}/>
                <img src={you} alt={"bgc-logo"}/>
            </div>
            </div>
        </div>
    );
};

export default Footer;