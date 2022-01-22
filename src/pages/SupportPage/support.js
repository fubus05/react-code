import '../styles/FP.scss'
import '../styles/support.scss'
import sellLogo from '../photo/cart.svg'
import favorite from '../photo/favorite.svg'
import history from '../photo/list.svg'
import heart from '../photo/heart.svg'
import sf from '../photo/warFace.svg'
import ve from '../photo/Vector.svg'
import alarm from '../photo/alarm.svg'
import ava from '../photo/ava.png'
import add from '../photo/2068204226775625365c.svg'
import onlc from '../photo/onlineLogocopy.svg'
import gift from '../photo/Shape.svg'
import imgLogo from '../photo/img.png'
import blueCas from '../photo/blueCase.png'
import headphon from '../photo/headphones.svg'
import mmail from '../photo/chat.svg'
import insta from '../photo/717b8dd2035235767fc2.svg'
import discord from '../photo/4958ce576e17636b4d3e.svg'
import vk from '../photo/6da4ba6803ebc97b8766.svg'
import you from '../photo/1dd35c3a942639272e7c.svg'
import titleBackground from '../photo/titleBG.svg'
import backArrow from '../photo/backArrow.svg'
import search from '../photo/search.png'
import vkImage from '../photo/vkImage.svg'
import mailImage from '../photo/mailImage.svg'
import closeImage from '../photo/close.svg'
import supportAvatar from '../photo/supportAvatar.png'
import supportHeadphones from '../photo/supportHeadphones.png'
import calendar from '../photo/calendar.png'
import filledArrow from '../photo/filledArrow.png'
import filledArrowTwo from '../photo/filledArrowTwo.png'
import closeButton from '../photo/closeButton.png'
import sendImage from '../photo/sendImage.svg'
import fileImage from '../photo/fileImage.svg'
import photoImage from '../photo/photoImage.svg'


const changeStyle = () =>{

}

const Support = () =>{
    return(
        <div className="general-block">
            <div className = 'header-first-page'>
            <div className = 'left-side'>
                <div className='left-side-logo'></div>
                <div className = 'stats'>
                    <div className = 'buy-stat'>
                        <div className='ssttaatter'></div>
                    </div>
                    <div className='buy-text'>
                        <p className='number-buy'>181 924 36</p>
                        <p className='stat-name'>Купленно товаров</p>
                    </div>
                    <div className = 'online-stat'>
                        <div className='onlineLoger'></div>
                    </div>
                    <div className='buy-text'>
                        <p className='number-buy'>486 532</p>
                        <p className='stat-name'>Пользователей</p>
                    </div>
                </div>
                <div className = 'section-button'>
                    <div className = 'sell-button'>
                        <div className = 'sell-logo'>
                        <img src={sellLogo} alt={"bgc-logo"}/>
                        </div>
                        <p className='txtButton'>Продать товар</p>
                    </div>
                    <div className = 'sell-button'>
                        <div className = 'sell-logo'>
                        <img src={favorite} alt={"bgc-logo"}/>
                        </div>
                        <p className='txtButton'>закладки</p>
                    </div>
                    <div className = 'sell-button'>
                        <div className = 'sell-logo'>
                        <img src={history} alt={"bgc-logo"}/>
                        </div>
                        <p className='txtButton'>история просмотра.</p>
                    </div>
                    <div className = 'sell-button'>
                        <div className = 'sell-logo'>
                        <img src={heart} alt={"bgc-logo"}/>
                        </div>
                        <p className='txtButton'>история покупок и продаж</p>
                    </div>
                </div>
                <div className='dwerrt'>
                <div className='select-sec'>
                    <div className='default-option'>
                        <img src={sf} alt={"bgc-logo"} className='wf-logo'/>
                        <p className='warppp'>warface</p>
                        <img src={ve} alt={"bgc-logo"} className='angel-down'/>
                    </div>
                </div>
                <div className='sec-support'>
                <div className='myMail'>
                    <img src={mmail} alt={"bgc-logo"} className='mmrai'/>
                    Мои Сообщения
                </div>
                <div className='mySp'>
                    <img src={headphon} alt={"bgc-logo"} className='mmrai'/>
                    Тех. Поддержка
                </div>
                </div>
                </div>
                </div>
            <div className='dop'>
                <div className='right-side'>
                <div className='menu-top'>
                    <div className='menu'>
                    <a className='menu-option' id='select' onClick={changeStyle} href='http://localhost:3000'>главная</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Аккаунты</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Пин-коды</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Топ Юзеров</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Отзывы</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Гарантии</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>случайные аккаунты</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Форум</a>
                    
                    </div>
                    <div className='kompani'>
                        <button className='alart'>
                            <img src={alarm} alt={"bgc-logo"}/>
                        </button>
                        <div className='sherder'>
                            <div className='banance'>
                                <button className='bBalance'>5 100B</button>
                                <button className='realBalance'>5 100₽ <img src={add} alt={"bgc-logo"} className='spit'/></button>
                            </div> 
                            <div className='TextName'>
                                <img src={ava} alt={"bgc-logo"} className='ttr'/>
                                Shenderro
                            </div>
                        </div> 
                    </div> 
                </div>
                <div className='block1'>
                        <div className='activity'>
                            <div className='top-active'>
                                <div className="dot">
                                    <div className="dot1"></div>
                                    <div className="dot1"></div>
                                    <div className="dot1"></div>
                                </div>
                                <div class="blockOnline">
                                    <div class="greendot"></div>
                                    <div class="stat">
                                        <div class="numberOnline">2 381</div>
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
                        <img className="title-background" src={titleBackground} alt="" />
                        <div className="support-title_inscription">Техническая поддержка</div>
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
                                    <a className="pages-list_item_support pages-list_item-style_support pages-list_item-color_support pages-list_item-dimensions_support pages-list_item-dimentions_second_support pages-list_item-media_style_support" href="">
                                        <img src={vkImage} alt="" />
                                    </a>
                                </div>
                                <div className="vkontakte-inscription_text">
                                    <div className="vkontakte-community_inscription">СООБЩЕСТВО:</div>
                                    <div className="vkontakte-name_inscription">ВКонтакте</div>
                                </div>
                            </div>
                            <div className="vkontakte-inscription_block">
                                <div>
                                    <a className="pages-list_item_support pages-list_item-style_support pages-list_item-color_support_mail pages-list_item-dimensions_support pages-list_item-dimentions_second_support pages-list_item-media_style_support" href="">
                                        <img src={mailImage} alt="" />
                                    </a>
                                </div>
                                <div className="vkontakte-inscription_text">
                                    <div className="vkontakte-community_inscription">ПОЧТА:</div>
                                    <div className="vkontakte-name_inscription">hello@warface.online</div>
                                </div>
                            </div>
                            <div className="vkontakte-inscription_block">
                                <div>
                                    <a className="pages-list_item_support pages-list_item-style_support pages-list_item-color_support_time pages-list_item-dimensions_support pages-list_item-dimentions_second_support pages-list_item-media_style_support" href="">
                                        <img src={mailImage} alt="" />
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
                                            <img src={closeImage} alt="" />
                                        </button>
                                        <div className="support-quick_access-block-first support-quick_access-block-second">Быстрый доступ</div>
                                        <div className="main-container_support_chat-first main-container_support_chat-second">
                                            <div className="main-container_support_chat-first_section main-container_support_chat-second_section">
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
                                                <div className="conversation_block-first conversation_block-second">
                                                    <div className="support_user-block">
                                                        <div className="support-user_profile">
                                                            <div className="support-user_profile-avatar">
                                                                <div className="support-user_avatar-item-first support-user_avatar-item-second">
                                                                    <img className="support_user-avatar_image" src={supportAvatar} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="support-user_username">Shenderro</div>
                                                        </div>
                                                        <div className="supported-image_block">
                                                            <div className="supported-block_image-circle">
                                                                <div className="supported-image_styles-first supported-image_styles-second supported-image_styles-third">
                                                                    <div className="supported_green-orb">
                                                                        <div className="supported_green-orb-count">+3</div>
                                                                    </div>
                                                                    <img className="supported-headphones_image-first supported-headphones_image-second" src={supportHeadphones} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="supported-headphones_inscription">Supported</div>
                                                        </div>
                                                    </div>
                                                    <div className="supported-big_line"></div>
                                                    <div className="conversation-support_main-section">
                                                        <div className="support-message_block">
                                                            <div className="supported-small_conversation-headphones">
                                                                <div className="supported-small_conversation-headphones-block">
                                                                    <img className="small-headphones_support-image" src={supportHeadphones} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="conversation-support_message-section">
                                                                <div className="conversation-support_message-block">
                                                                    <div className="conversation_message">
                                                                        <div className="conversation_message_date">
                                                                            <img className="calendar-message_image" src={calendar} alt="" />
                                                                            <div className="text-after_date">12.09.2019</div>
                                                                        </div>
                                                                        <div className="text-after_text">Привет, как дела ?</div>
                                                                    </div>
                                                                    <div className="conversation-text-after_block">
                                                                        <img src={filledArrow} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="user-conversation_message-section">
                                                            <div className="user-avatar_block">
                                                                <div className="user-avatar_item">
                                                                    <img className="user-avatar_item_image" src={supportAvatar} alt="" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="user-support_conversation-message_block">
                                                                    <div className="user-conversation_margin">
                                                                        <img src={filledArrowTwo} alt="" />
                                                                    </div>
                                                                    <div className="conversation-user_message-text">
                                                                        <div className="user-conversation_message_text">Привет, как дела ?</div>
                                                                        <div className="user-conversation_message-date">
                                                                            <img className="user-conversation_message-date_image" src={calendar} alt="" />
                                                                            <div className="user-conversation_message-date_inscription">12.09.2019</div>
                                                                        </div>
                                                                        <img className="close-button_user" src={closeButton} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="conversation-support_main-section">
                                                        <div className="support-message_block">
                                                            <div className="supported-small_conversation-headphones">
                                                                <div className="supported-small_conversation-headphones-block">
                                                                    <img className="small-headphones_support-image" src={supportHeadphones} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="conversation-support_message-section">
                                                                <div className="conversation-support_message-block">
                                                                    <div className="conversation_message">
                                                                        <div className="conversation_message_date">
                                                                            <img className="calendar-message_image" src={calendar} alt="" />
                                                                            <div className="text-after_date">12.09.2019</div>
                                                                        </div>
                                                                        <div className="text-after_text">Привет, как дела ?</div>
                                                                    </div>
                                                                    <div className="conversation-text-after_block">
                                                                        <img src={filledArrow} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="user-conversation_message-section">
                                                            <div className="user-avatar_block">
                                                                <div className="user-avatar_item">
                                                                    <img className="user-avatar_item_image" src={supportAvatar} alt="" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="user-support_conversation-message_block">
                                                                    <div className="user-conversation_margin">
                                                                        <img src={filledArrowTwo} alt="" />
                                                                    </div>
                                                                    <div className="conversation-user_message-text">
                                                                        <div className="user-conversation_message_text">Привет, как дела ?</div>
                                                                        <div className="user-conversation_message-date">
                                                                            <img className="user-conversation_message-date_image" src={calendar} alt="" />
                                                                            <div className="user-conversation_message-date_inscription">12.09.2019</div>
                                                                        </div>
                                                                        <img className="close-button_user" src={closeButton} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="conversation-support_main-section">
                                                        <div className="support-message_block">
                                                            <div className="supported-small_conversation-headphones">
                                                                <div className="supported-small_conversation-headphones-block">
                                                                    <img className="small-headphones_support-image" src={supportHeadphones} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="conversation-support_message-section">
                                                                <div className="conversation-support_message-block">
                                                                    <div className="conversation_message">
                                                                        <div className="conversation_message_date">
                                                                            <img className="calendar-message_image" src={calendar} alt="" />
                                                                            <div className="text-after_date">12.09.2019</div>
                                                                        </div>
                                                                        <div className="text-after_text">Привет, как дела ?</div>
                                                                    </div>
                                                                    <div className="conversation-text-after_block">
                                                                        <img src={filledArrow} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="user-conversation_message-section">
                                                            <div className="user-avatar_block">
                                                                <div className="user-avatar_item">
                                                                    <img className="user-avatar_item_image" src={supportAvatar} alt="" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="user-support_conversation-message_block">
                                                                    <div className="user-conversation_margin">
                                                                        <img src={filledArrowTwo} alt="" />
                                                                    </div>
                                                                    <div className="conversation-user_message-text">
                                                                        <div className="user-conversation_message_text">Привет, как дела ?</div>
                                                                        <div className="user-conversation_message-date">
                                                                            <img className="user-conversation_message-date_image" src={calendar} alt="" />
                                                                            <div className="user-conversation_message-date_inscription">12.09.2019</div>
                                                                        </div>
                                                                        <img className="close-button_user" src={closeButton} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-input_support-block">
                                                            <div className="user-conversation_input-textarea">
                                                            <textarea rows="2" class="textarea-input_user" type="text" placeholder="Введите сообщение..."></textarea>
                                                            <div className="user-input_menu">
                                                                <div className="user-input_menu-item">
                                                                    <img src={sendImage} alt="" />
                                                                </div>
                                                                <div className="user-input_menu-item">
                                                                    <img src={fileImage} alt="" />
                                                                </div>
                                                                <div className="user-input_menu-item">
                                                                    <img src={photoImage} alt="" />
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
                </div>
            </div>
        </div>
        <div className='footer'>
                <div className="basicClasser">
                    <div className='_PZP6NWvi7HMX5fjkcLy'>
                    <div className='whiter'>DealkGo.com</div> — Крупнейший проект по продажам цифровых
                            товаров.<br/>
                    </div> 
                    © 2020, Все права защищены.
                </div> 
                <ul className='contact'>
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
}



export default Support;
