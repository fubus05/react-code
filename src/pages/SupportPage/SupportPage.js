import React from 'react';
import '../HomePage/homePage.scss'
import './support.scss'
import onlc from '../../assets/img/onlineLogocopy.svg'
import gift from '../../assets/img/Shape.svg'
import imgLogo from '../../assets/img/img.png'
import blueCas from '../../assets/img/blueCase.png'
import titleBackground from '../../assets/img/titleBG.svg'
import backArrow from '../../assets/img/backArrow.svg'
import search from '../../assets/img/search.png'
import vkImage from '../../assets/img/vkImage.svg'
import mailImage from '../../assets/img/mailImage.svg'
import closeImage from '../../assets/img/close.svg'
import supportAvatar from '../../assets/img/supportAvatar.png'
import supportHeadphones from '../../assets/img/supportHeadphones.png'
import calendar from '../../assets/img/calendar.png'
import filledArrow from '../../assets/img/filledArrow.png'
import filledArrowTwo from '../../assets/img/filledArrowTwo.png'
import closeButton from '../../assets/img/closeButton.png'
import sendImage from '../../assets/img/sendImage.svg'
import fileImage from '../../assets/img/fileImage.svg'
import photoImage from '../../assets/img/photoImage.svg'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";


const SupportPage = () => {
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
            <div className="support-container">
                <div className="support-title">
                    <img className="title-background" src={titleBackground} alt=""/>
                    <div className="support-title_inscription">Техническая поддержка</div>
                </div>
                <div className="top-accounts_main-block">
                    <div className="shell-block">
                        <div className="support-back_arrow">
                            <img className="support-back_arrow-image" src={backArrow} alt=""/>
                        </div>
                    </div>
                    <div className="top-accounts_block">
                        <div className="top-accounts_inscription"></div>
                        <div className="top-pin-codes_inscription"></div>
                    </div>
                    <div className="shell-block_two">
                        <div className="search-main_block">
                            <img className="search-image" src={search} alt=""/>
                            <input className="search-input" type="search" placeholder="Поиск"/>
                        </div>
                    </div>
                </div>
                <div className="support-section">
                    <div className="support-section_item">
                        <div className="contact-info_inscription">
                            <div className="support-contact_inscription">
                                <span>Контактная информация</span>
                            </div>
                        </div>
                        <div className="vkontakte-inscription_block">
                            <div>
                                <a className="pages-list_item_support pages-list_item-style_support pages-list_item-color_support pages-list_item-dimensions_support pages-list_item-dimentions_second_support pages-list_item-media_style_support"
                                   href="">
                                    <img src={vkImage} alt=""/>
                                </a>
                            </div>
                            <div className="vkontakte-inscription_text">
                                <div className="vkontakte-community_inscription">СООБЩЕСТВО:</div>
                                <div className="vkontakte-name_inscription">ВКонтакте</div>
                            </div>
                        </div>
                        <div className="vkontakte-inscription_block">
                            <div>
                                <a className="pages-list_item_support pages-list_item-style_support pages-list_item-color_support_mail pages-list_item-dimensions_support pages-list_item-dimentions_second_support pages-list_item-media_style_support"
                                   href="">
                                    <img src={mailImage} alt=""/>
                                </a>
                            </div>
                            <div className="vkontakte-inscription_text">
                                <div className="vkontakte-community_inscription">ПОЧТА:</div>
                                <div className="vkontakte-name_inscription">hello@warface.online</div>
                            </div>
                        </div>
                        <div className="vkontakte-inscription_block">
                            <div>
                                <a className="pages-list_item_support pages-list_item-style_support pages-list_item-color_support_time pages-list_item-dimensions_support pages-list_item-dimentions_second_support pages-list_item-media_style_support"
                                   href="">
                                    <img src={mailImage} alt=""/>
                                </a>
                            </div>
                            <div className="vkontakte-inscription_text">
                                <div className="vkontakte-community_inscription">ВРЕМЯ РАБОТЫ:</div>
                                <div className="vkontakte-name_inscription">с 10:30 до 22:30</div>
                            </div>
                        </div>
                    </div>
                    <div className="support-section_main-item">
                        <div className="support-part_first support-part_second support-part_third">
                            <div className="support-section_part-first support-section_part-second">
                                <div className="support-section_inside">
                                    <button className="support-section_button" type="button">
                                        <img src={closeImage} alt=""/>
                                    </button>
                                    <div
                                        className="support-quick_access-block-first support-quick_access-block-second">Быстрый
                                        доступ
                                    </div>
                                    <div
                                        className="main-container_support_chat-first main-container_support_chat-second">
                                        <div
                                            className="main-container_support_chat-first_section main-container_support_chat-second_section">
                                            <div className="support-chat_block">
                                                <div className="support-chat_block-inscription">
                                                    <div>Чат с поддержкой</div>
                                                    <div className="inscription_underline-block"></div>
                                                </div>
                                                <div className="questions-block">
                                                    <div>Частые вопросы</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-conversation_block">
                                            <div
                                                className="conversation_block-first conversation_block-second">
                                                <div className="support_user-block">
                                                    <div className="support-user_profile">
                                                        <div className="support-user_profile-avatar">
                                                            <div
                                                                className="support-user_avatar-item-first support-user_avatar-item-second">
                                                                <img className="support_user-avatar_image"
                                                                     src={supportAvatar} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="support-user_username">Shenderro
                                                        </div>
                                                    </div>
                                                    <div className="supported-image_block">
                                                        <div className="supported-block_image-circle">
                                                            <div
                                                                className="supported-image_styles-first supported-image_styles-second supported-image_styles-third">
                                                                <div className="supported_green-orb">
                                                                    <div
                                                                        className="supported_green-orb-count">+3
                                                                    </div>
                                                                </div>
                                                                <img
                                                                    className="supported-headphones_image-first supported-headphones_image-second"
                                                                    src={supportHeadphones} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="supported-headphones_inscription">Supported
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="supported-big_line"></div>
                                                <div className="conversation-support_main-section">
                                                    <div className="support-message_block">
                                                        <div
                                                            className="supported-small_conversation-headphones">
                                                            <div
                                                                className="supported-small_conversation-headphones-block">
                                                                <img
                                                                    className="small-headphones_support-image"
                                                                    src={supportHeadphones} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="conversation-support_message-section">
                                                            <div
                                                                className="conversation-support_message-block">
                                                                <div className="conversation_message">
                                                                    <div
                                                                        className="conversation_message_date">
                                                                        <img
                                                                            className="calendar-message_image"
                                                                            src={calendar} alt=""/>
                                                                        <div
                                                                            className="text-after_date">12.09.2019
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-after_text">Привет,
                                                                        как дела ?
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="conversation-text-after_block">
                                                                    <img src={filledArrow} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="user-conversation_message-section">
                                                        <div className="user-avatar_block">
                                                            <div className="user-avatar_item">
                                                                <img className="user-avatar_item_image"
                                                                     src={supportAvatar} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                className="user-support_conversation-message_block">
                                                                <div className="user-conversation_margin">
                                                                    <img src={filledArrowTwo} alt=""/>
                                                                </div>
                                                                <div
                                                                    className="conversation-user_message-text">
                                                                    <div
                                                                        className="user-conversation_message_text">Привет,
                                                                        как дела ?
                                                                    </div>
                                                                    <div
                                                                        className="user-conversation_message-date">
                                                                        <img
                                                                            className="user-conversation_message-date_image"
                                                                            src={calendar} alt=""/>
                                                                        <div
                                                                            className="user-conversation_message-date_inscription">12.09.2019
                                                                        </div>
                                                                    </div>
                                                                    <img className="close-button_user"
                                                                         src={closeButton} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="conversation-support_main-section">
                                                    <div className="support-message_block">
                                                        <div
                                                            className="supported-small_conversation-headphones">
                                                            <div
                                                                className="supported-small_conversation-headphones-block">
                                                                <img
                                                                    className="small-headphones_support-image"
                                                                    src={supportHeadphones} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="conversation-support_message-section">
                                                            <div
                                                                className="conversation-support_message-block">
                                                                <div className="conversation_message">
                                                                    <div
                                                                        className="conversation_message_date">
                                                                        <img
                                                                            className="calendar-message_image"
                                                                            src={calendar} alt=""/>
                                                                        <div
                                                                            className="text-after_date">12.09.2019
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-after_text">Привет,
                                                                        как дела ?
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="conversation-text-after_block">
                                                                    <img src={filledArrow} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="user-conversation_message-section">
                                                        <div className="user-avatar_block">
                                                            <div className="user-avatar_item">
                                                                <img className="user-avatar_item_image"
                                                                     src={supportAvatar} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                className="user-support_conversation-message_block">
                                                                <div className="user-conversation_margin">
                                                                    <img src={filledArrowTwo} alt=""/>
                                                                </div>
                                                                <div
                                                                    className="conversation-user_message-text">
                                                                    <div
                                                                        className="user-conversation_message_text">Привет,
                                                                        как дела ?
                                                                    </div>
                                                                    <div
                                                                        className="user-conversation_message-date">
                                                                        <img
                                                                            className="user-conversation_message-date_image"
                                                                            src={calendar} alt=""/>
                                                                        <div
                                                                            className="user-conversation_message-date_inscription">12.09.2019
                                                                        </div>
                                                                    </div>
                                                                    <img className="close-button_user"
                                                                         src={closeButton} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="conversation-support_main-section">
                                                    <div className="support-message_block">
                                                        <div
                                                            className="supported-small_conversation-headphones">
                                                            <div
                                                                className="supported-small_conversation-headphones-block">
                                                                <img
                                                                    className="small-headphones_support-image"
                                                                    src={supportHeadphones} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="conversation-support_message-section">
                                                            <div
                                                                className="conversation-support_message-block">
                                                                <div className="conversation_message">
                                                                    <div
                                                                        className="conversation_message_date">
                                                                        <img
                                                                            className="calendar-message_image"
                                                                            src={calendar} alt=""/>
                                                                        <div
                                                                            className="text-after_date">12.09.2019
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-after_text">Привет,
                                                                        как дела ?
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="conversation-text-after_block">
                                                                    <img src={filledArrow} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="user-conversation_message-section">
                                                        <div className="user-avatar_block">
                                                            <div className="user-avatar_item">
                                                                <img className="user-avatar_item_image"
                                                                     src={supportAvatar} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                className="user-support_conversation-message_block">
                                                                <div className="user-conversation_margin">
                                                                    <img src={filledArrowTwo} alt=""/>
                                                                </div>
                                                                <div
                                                                    className="conversation-user_message-text">
                                                                    <div
                                                                        className="user-conversation_message_text">Привет,
                                                                        как дела ?
                                                                    </div>
                                                                    <div
                                                                        className="user-conversation_message-date">
                                                                        <img
                                                                            className="user-conversation_message-date_image"
                                                                            src={calendar} alt=""/>
                                                                        <div
                                                                            className="user-conversation_message-date_inscription">12.09.2019
                                                                        </div>
                                                                    </div>
                                                                    <img className="close-button_user"
                                                                         src={closeButton} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-input_support-block">
                                                        <div className="user-conversation_input-textarea">
                                                                        <textarea rows="2"
                                                                                  className="textarea-input_user"
                                                                                  type="text"
                                                                                  placeholder="Введите сообщение..."></textarea>
                                                            <div className="user-input_menu">
                                                                <div className="user-input_menu-item">
                                                                    <img src={sendImage} alt=""/>
                                                                </div>
                                                                <div className="user-input_menu-item">
                                                                    <img src={fileImage} alt=""/>
                                                                </div>
                                                                <div className="user-input_menu-item">
                                                                    <img src={photoImage} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default SupportPage;