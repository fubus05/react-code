import '../styles/FP.scss'
import '../styles/referals.scss'
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
import Aw4 from '../photo/Arrow4.png'
import offer from '../photo/Group123.png'
import Rank from '../photo/Rank.png'
import dstos from '../photo/dsots.svg'
import rankere from '../photo/Ротатер.svg'
import gun from '../photo/631e1465d7ef61dde713.png'
import avorite from '../photo/6e13cbbb50ab61951fab.svg'
import photo from '../photo/el.png'
import more from '../photo/487b5c72c244942cc36c.svg'
import headphon from '../photo/headphones.svg'
import mmail from '../photo/chat.svg'
import insta from '../photo/717b8dd2035235767fc2.svg'
import discord from '../photo/4958ce576e17636b4d3e.svg'
import vk from '../photo/6da4ba6803ebc97b8766.svg'
import you from '../photo/1dd35c3a942639272e7c.svg'
import titleBackground from '../photo/titleBG.svg'
import backArrow from '../photo/backArrow.svg'
import exlamationMark from '../photo/exclamation.png'
import smallDots from '../photo/dotsSecond.svg'
import bottomArrow from '../photo/arrowBottom.png'
import search from '../photo/search.png'
import circleGray from '../photo/circlePart.png'
import rankPicture from '../photo/rankImage.png'
import currentRank from '../photo/currentRank.png'
import avatar from '../photo/avatar.png'
import online from '../photo/online.png'
import favorites from '../photo/favorites.png'
import arrowLeft from '../photo/arrowLeft.png'
import arrowRight from '../photo/arrowRight.png'
import file from '../photo/fileImage.png'
import vkontakte from '../photo/vkImage.svg'
import arrowBottom from '../photo/arrowBottom.png'


const changeStyle = () =>{

}

const Referals = () =>{
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
                    <div className="referals-container">
                    <div className="referals-title">
                        <img className="title-background" src={titleBackground} alt="" />
                        <div className="referals-title_inscription">Реферальная система</div>
                    </div>
                    <div className="user-referals_block">
                        <div className="referals-percentage_block">
                            <div className="percentage_title">Количество %</div>
                            <div className="percentage_block percentage_block-first">
                                <div className="percentage_block-text">от 1 до 499 — 1%</div>
                            </div>
                            <div className="percentage_block percentage_block-second">
                                <div className="percentage_block-text">от 500 до 4999 - 5%</div>
                            </div>
                            <div className="percentage_block percentage_block-third">
                                <div className="percentage_block-text">от 5000 до 14999 - 15%</div>
                            </div>
                            <div className="percentage_block percentage_block-fourth">
                                <div className="percentage_block-text">от 15000 - 30%</div>
                            </div>
                        </div>
                        <div className="referal-link_block">
                            <div className="referal-link_title">РЕФЕРАЛЬНАЯ ССЫЛКА</div>
                            <div className="referal-link_inscription">
                                <div className="referal-link_text">https://warface.online/ref/38921</div>
                                <div className="referal-link_image">
                                    <img src={file} alt="" />
                                </div>
                            </div>
                            <div className="referal-link_share">
                                <div className="referal-link_share-text">Поделиться</div>
                                <div className="referal-link_share-image">
                                    <img src={vkontakte} alt="" />
                                </div>
                            </div>
                            <div className="referal-link_info">Бонусными средствами можно рассчитаться только при покупке рулеток</div>
                            <div className="circle_referals-decoration_block circle_referals-decoration_block-styles">
                                <div className="circle_referals-inside">         
                                    <div className="small-circle_referals_inside"></div>
                                </div>
                            </div>
                        </div>
                        <div className="referal-user_info-block">
                            <img className="referal_user-avatar" src={ava} alt="" />
                            <div className="user-nickname">Shenderro</div>
                            <div className="user-info_block">
                                <div className="user-info_block_invited">
                                    <div className="user_info-block_number">528</div>
                                    <div className="user_info-block_text">Приглашенных</div>
                                </div>
                                <div className="user-info_block_earned">
                                    <div className="user_info-block_number">118 523B</div>
                                    <div className="user_info-block_text">Заработано</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-list-referals_block">
                    <div className="option-referals-list">
                            <div className="option-referals-item first-referals-item">
                                Номер
                            </div>
                            <div className="option-referals-item second-referals-item">
                                Имя
                            </div>
                            <div className="option-referals-item third-referals-item">
                                
                            </div>
                            <div className="option-referals-item fourth-referals-item">
                                Дата регистрации
                                <img className="arrow-referals" src={arrowBottom} alt="" />
                            </div>
                    </div>
                    <table className="place-referals-table_block">
                            <thead>
                                <tr>
                                    <td>Номер</td>
                                    <td>Имя</td>
                                    <td></td>
                                    <td>Дата регистрации</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Номер">№25812</td>
                                    <td data-label="Имя">
                                        <div>
                                            <img src={ava} alt="" />
                                            Shenderro
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары"></td>
                                    <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="place-referals-table_block">
                            <thead>
                                <tr>
                                    <td>Номер</td>
                                    <td>Имя</td>
                                    <td></td>
                                    <td>Дата регистрации</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Номер">№25812</td>
                                    <td data-label="Имя">
                                        <div>
                                            <img src={ava} alt="" />
                                            Shenderro
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары"></td>
                                    <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="place-referals-table_block">
                            <thead>
                                <tr>
                                    <td>Номер</td>
                                    <td>Имя</td>
                                    <td></td>
                                    <td>Дата регистрации</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Номер">№25812</td>
                                    <td data-label="Имя">
                                        <div>
                                            <img src={ava} alt="" />
                                            Shenderro
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары"></td>
                                    <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="place-referals-table_block">
                            <thead>
                                <tr>
                                    <td>Номер</td>
                                    <td>Имя</td>
                                    <td></td>
                                    <td>Дата регистрации</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Номер">№25812</td>
                                    <td data-label="Имя">
                                        <div>
                                            <img src={ava} alt="" />
                                            Shenderro
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары"></td>
                                    <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="place-referals-table_block">
                            <thead>
                                <tr>
                                    <td>Номер</td>
                                    <td>Имя</td>
                                    <td></td>
                                    <td>Дата регистрации</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Номер">№25812</td>
                                    <td data-label="Имя">
                                        <div>
                                            <img src={ava} alt="" />
                                            Shenderro
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары"></td>
                                    <td data-label="Дата регистрации">15 Фев. в 22:12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pages-list_referals">
                            <div className="pages-list_arrow_referals">
                                <img src={arrowLeft} alt="" />
                            </div>
                            <a className="pages-list_item_referals pages-list_item-style_referals pages-list_item-color_referals pages-list_item-dimensions_referals pages-list_item-dimentions_second_referals pages-list_item-media_style_referals" href="">1</a>
                            <a className="pages-list_item_referals pages-list_item-style_referals pages-list_item-color_referals pages-list_item-dimensions_referals pages-list_item-dimentions_second_referals pages-list_item-media_style_referals" href="">2</a>
                            <a className="pages-list_item_referals pages-list_item-style_referals pages-list_item-color-different_referals pages-list_item-dimensions_referals pages-list_item-dimentions_second_referals pages-list_item-media_style_referals" href="">3</a>
                            <a className="pages-list_item_referals pages-list_item-style_referals pages-list_item-color_referals pages-list_item-dimensions_referals pages-list_item-dimentions_second_referals pages-list_item-media_style_referals" href="">334</a>
                            <div className="pages-list_arrow_referals">
                                <img src={arrowRight} alt="" />
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



export default Referals;
