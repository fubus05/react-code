import React from 'react';
import '../../general.scss'
import s from './SettingPage.module.scss'
import dstos from "../../assets/img/dsots.svg";
import ava from '../../assets/img/ava.png'
import ic_camera from '../../assets/img/ic-devices-camera.png'
import ic_arrow from '../../assets/img/ic-setting-arrow.png'
import ic_edit from '../../assets/img/ic-contact-edit.png'
import ic_media from '../../assets/img/ic-media-volume.png'
import ic_controller from '../../assets/img/ic-devices-controller.png'
import ic_editor from '../../assets/img/ic-editor-attachment.png'
import ic_security from '../../assets/img/ic-security.png'
import {NavLink} from "react-router-dom";
import {HOME_PAGE} from "../../utils/consts";
import SettingItem from "../../components/SettingItem/SettingItem";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const SettingPage = () => {
    const menus = [
        {id: 1, title: 'НИКНЕЙМ:', content: 'Shenderro', icon: ic_edit, width: '18px', height: '18px'},
        {id: 2, title: 'ВКОНТАКТЕ', content: 'Отвязать страницу', icon: ic_controller, width: '22px', height: '14px'},
        {id: 3, title: 'УВЕДОМЛЕНИЯ ВК', content: 'Включить', icon: ic_media, width: '19px', height: '15px'},
        {id: 4, title: 'E-MAIL', content: 'shenderro@gmail.com', icon: ic_edit, width: '18px', height: '18px'},
        {id: 5, title: 'ПАРОЛЬ', content: '***********', icon: ic_edit, width: '18px', height: '18px'},
        {id: 6, title: 'РАССЫЛКА', content: 'Отписаться от рассылки', icon: ic_editor, width: '14px', height: '22px'},
        {id: 7, title: 'СЕКРЕТНОЕ СЛОВО', content: 'Sky*******bt', icon: ic_security, width: '18px', height: '19px'},
    ]

    return (
        <LayoutGeneral>
            <div className={s.content}>
                <div className={s.header}>

                    <NavLink to={HOME_PAGE} className={s.returnBox}>
                        <img src={ic_arrow} width="25px" alt="arrow"/>
                    </NavLink>

                    <div className='titleBlock'>
                        <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                        <div className='title-titleBlock'>
                            <h1>Настройки профиля</h1>
                        </div>
                    </div>
                </div>

                <div className={s.mainBlock}>
                    <div className={`card ${s.avatarBlock}`}>
                        <div className={s.photoBox}>
                            <img className={s.avatar} src={ava} alt="avatar"/>
                            <div className={s.cameraWrapper}>
                                <img src={ic_camera} alt="camera"/>
                            </div>
                        </div>
                        <h5 className={s.profileName}>
                            Shenderro
                        </h5>
                        <NavLink className={s.exit} to={HOME_PAGE}>Выйти из аккаунта</NavLink>
                    </div>

                    <div className={`card ${s.contentBlock}`}>
                        {
                            menus.map(item =>
                                <SettingItem key={item.id} data={item}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default SettingPage;