import React from 'react';
import './forum.scss'
import dstos from "../../assets/img/dsots.svg";
import chatIcon from '../../assets/img/chatIcon.png'
import chatSmallLine from '../../assets/img/chatSmallLine.png'
import chatBigLine from '../../assets/img/chatBigLine.png'
import like from '../../assets/img/like.png'
import likeBefore from '../../assets/img/likeBefore.png'
import likeWhite from '../../assets/img/likeWhite.png'
import likeWhiteBefore from '../../assets/img/likeWhiteBefore.png'
import devAva from '../../assets/img/devAva.png'
import online from '../../assets/img/online.png'
import triangle from '../../assets/img/triangle.png'
import commentOverlay from '../../assets/img/commentOverlay.png'
import commentPencil from '../../assets/img/commentPencil.png'
import heartImage from '../../assets/img/heartImage.png'
import rightArrow from '../../assets/img/rightArrow.png'
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const ForumPage = () => {
    return (
        <LayoutGeneral>
            <div className='titleBlock'>
                <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                <div className='title-titleBlock'>
                    <h1>ForumPage</h1>
                </div>
            </div>
            <div className="forum_main-section">
                <div className="first-section_block">
                    <div className="project-info_block">
                        <div className="project-info_block-title_block">
                            <div className="project-info_block-title">Все о проекте</div>
                        </div>
                        <div className="project-info_block-item">
                            <div className="forum_chat_block">
                                <div className="forum_chat_icon-block">
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-icon_image" src={chatIcon} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-small-line_image" src={chatSmallLine} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-big-line_image" src={chatBigLine} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="forum-rules_inscription">Правила форума</div>
                            <div className="forum-comments_block">
                                <div className="forum-comments_count-text">Комментариев</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">Дата и автор</div>
                                <div className="forum-date_and_author-date">1 Ноя 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
                            </div>
                            <div className="forum-likes_block">
                                <img className="forum-like_before-image" src={likeBefore} alt="" />
                                <img className="forum-like-image" src={like} alt="" />
                                <div className="forum-likes_count">14 567</div>
                            </div>
                        </div>
                        <div className="project-info_block-item forum-info_different-color">
                            <div className="forum_chat_block">
                                <div className="forum_chat_icon-block">
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-icon_image" src={chatIcon} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-small-line_image" src={chatSmallLine} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-big-line_image" src={chatBigLine} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="forum-rules_inscription">Правила форума</div>
                            <div className="forum-comments_block">
                                <div className="forum-comments_count-text">Комментариев</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">Дата и автор</div>
                                <div className="forum-date_and_author-date">1 Ноя 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
                            </div>
                            <div className="forum-likes_block forum-likes_block-different_color">
                                <img className="forum-like_before-image z-index" src={likeWhiteBefore} alt="" />
                                <img className="forum-like-image z-index" src={likeWhite} alt="" />
                                <div className="forum-likes_count forum-likes_count-different_color">14 567</div>
                            </div>
                        </div>
                        <div className="forum-dev-info_block">
                            <div className="forum-dev-info_item"></div>
                            <div className="forum-avatar_item-block">
                                <div className="forum-item-block_avatar">
                                    <img className="forum-item-block_avatar-image" src={devAva} alt="" />
                                    <img className="forum-item-block_avatar-status" src={online} alt="" />
                                </div>
                                <div className="forum-description_item-block">Alexey_Smirnov</div>
                                <div className="forum-description_item-block-second">Разработчик</div>
                            </div>
                            <div className="forum-dev-top_block">
                                <div className="forum-dev-top_block-text">В Топ</div>
                                <img src={triangle} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-section_block">Друзья!
                        Если вы хотите влиться в команду для поднятия высокой лиги или ищете бойца в уже <br/> сформировавшийся коллектив, то эта тема специально для вас! <br/>
                        <br/>
                        <br/>
                        Здесь вы можете оставить соответствующее объявление. <br/>
                        Формат подачи: <br/>
                        1. Ваш игровой ник, сервер, желательно юзербар <br/>
                        2. Удобное вам время для игры и ежедневной активности <br/>
                        3. Прочая информация по желанию
                    </div>
                    <div className="forum-line"></div>
                    <div className="forum-comment-likes_block">
                        <div className="forum-comment-likes_block-inscription">
                            <img className="comment-image_overlay" src={commentOverlay} alt="" />
                            <img className="comment-image_pencil" src={commentPencil} alt="" />
                            <div className="comment-inscription_text">Коментировать</div>
                        </div>
                        <div className="forum-comment-likes_block-count">
                            <img className="forum-comment-likes-image" src={heartImage} alt="" />
                            <div className="forum-comment-likes-count">14 567</div>
                        </div>
                    </div>
                    <textarea className="forum-comment-textarea" cols="80" rows="5" placeholder="Напишите свой комментарий..."></textarea>
                    <img className="forum-comment-textarea-arrow_image" src={rightArrow} alt="" />
                    <div className="forum-games-info_block">
                        <div className="project-info_block-title_block">
                            <div className="project-info_block-title">Все игры</div>
                        </div>
                        <div className="project-info_block-item">
                            <div className="forum_chat_block">
                                <div className="forum_chat_icon-block">
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-icon_image" src={chatIcon} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-small-line_image" src={chatSmallLine} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-big-line_image" src={chatBigLine} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="forum-rules_inscription">Warface</div>
                            <div className="forum-comments_block">
                                <div className="forum-comments_count-text">Созданные  темы</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">Дата и автор</div>
                                <div className="forum-date_and_author-date">1 Ноя 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
                            </div>
                            <div className="forum-likes_block">
                                <img className="forum-like_before-image" src={likeBefore} alt="" />
                                <img className="forum-like-image" src={like} alt="" />
                                <div className="forum-likes_count">14 567</div>
                            </div>
                        </div>
                        <div className="project-info_block-item">
                            <div className="forum_chat_block">
                                <div className="forum_chat_icon-block">
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-icon_image" src={chatIcon} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-small-line_image" src={chatSmallLine} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-big-line_image" src={chatBigLine} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="forum-rules_inscription">Counter-Strike: Global Offensive</div>
                            <div className="forum-comments_block">
                                <div className="forum-comments_count-text">Созданные  темы</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">Дата и автор</div>
                                <div className="forum-date_and_author-date">1 Ноя 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
                            </div>
                            <div className="forum-likes_block">
                                <img className="forum-like_before-image" src={likeBefore} alt="" />
                                <img className="forum-like-image" src={like} alt="" />
                                <div className="forum-likes_count">14 567</div>
                            </div>
                        </div>
                        <div className="project-info_block-item">
                            <div className="forum_chat_block">
                                <div className="forum_chat_icon-block">
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-icon_image" src={chatIcon} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-small-line_image" src={chatSmallLine} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-big-line_image" src={chatBigLine} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="forum-rules_inscription">Grand Theft Auto V</div>
                            <div className="forum-comments_block">
                                <div className="forum-comments_count-text">Созданные  темы</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">Дата и автор</div>
                                <div className="forum-date_and_author-date">1 Ноя 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
                            </div>
                            <div className="forum-likes_block">
                                <img className="forum-like_before-image" src={likeBefore} alt="" />
                                <img className="forum-like-image" src={like} alt="" />
                                <div className="forum-likes_count">14 567</div>
                            </div>
                        </div>
                        <div className="project-info_block-item">
                            <div className="forum_chat_block">
                                <div className="forum_chat_icon-block">
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-icon_image" src={chatIcon} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-small-line_image" src={chatSmallLine} alt="" />
                                    </div>
                                    <div className="forum_chat-icon">
                                        <img className="forum_chat-big-line_image" src={chatBigLine} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="forum-rules_inscription">World of Tanks</div>
                            <div className="forum-comments_block">
                                <div className="forum-comments_count-text">Созданные  темы</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">Дата и автор</div>
                                <div className="forum-date_and_author-date">1 Ноя 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
                            </div>
                            <div className="forum-likes_block">
                                <img className="forum-like_before-image" src={likeBefore} alt="" />
                                <img className="forum-like-image" src={like} alt="" />
                                <div className="forum-likes_count">14 567</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-section_block">
                    <div className="forum-team_online-block">
                        <div className="forum-team_online-title_block">
                            <div className="forum-team_online-title_inscription">Команда онлайн</div>
                        </div>
                        <div className="forum-avatar_item-block-team">
                            <div className="forum-item-block_avatar-team">
                                <img className="forum-item-block_avatar-image-team" src={devAva} alt="" />
                                <img className="forum-item-block_avatar-status-team" src={online} alt="" />
                            </div>
                            <div className="forum-description_item-block-team">Alexey_Smirnov</div>
                            <div className="forum-description_item-block-second-team">Разработчик</div>
                        </div>
                        <div className="forum-avatar_item-block-team">
                            <div className="forum-item-block_avatar-team">
                                <img className="forum-item-block_avatar-image-team" src={devAva} alt="" />
                                <img className="forum-item-block_avatar-status-team" src={online} alt="" />
                            </div>
                            <div className="forum-description_item-block-team">Alexey_Smirnov</div>
                            <div className="forum-description_item-block-second-team">Разработчик</div>
                        </div>
                        <div className="forum-avatar_item-block-team">
                            <div className="forum-item-block_avatar-team">
                                <img className="forum-item-block_avatar-image-team" src={devAva} alt="" />
                                <img className="forum-item-block_avatar-status-team" src={online} alt="" />
                            </div>
                            <div className="forum-description_item-block-team">Alexey_Smirnov</div>
                            <div className="forum-description_item-block-second-team">Разработчик</div>
                        </div>
                    </div>
                    <div className="forum-users_online-block">
                        <div className="forum-users_online-title_block">
                            <div className="forum-users_online-title_inscription">Пользователи онлайн</div>
                        </div>
                        <div className="forum-users-online_list-block">
                            <div className="forum-users-online_list">
                                Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                                Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                                Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                                Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                                Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                                Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231..
                                <span> и еще 159.</span>
                            </div>
                        </div>
                        <div className="forum-users-online_general-info-block">
                            <div className="forum-users-online_general-info">Всего: 278 (пользователей: 209, <br/> гостей: 69)</div>
                        </div>
                    </div>
                    <div className="forum_stat-block">
                        <div className="forum-stat-title_block">
                            <div className="forum-stat-title_inscription">Статистика форума</div>
                        </div>
                        <div className="forum_stat-block-section">
                            <div className="forum_stat-block-item">
                                <div className="forum_stat-block-item-option">Темы:</div>
                                <div className="forum_stat-block-item-info">139.196</div>
                            </div>
                            <div className="forum_stat-block-item">
                                <div className="forum_stat-block-item-option">Сообщения:</div>
                                <div className="forum_stat-block-item-info">723.364</div>
                            </div>
                            <div className="forum_stat-block-item">
                                <div className="forum_stat-block-item-option">Пользователи:</div>
                                <div className="forum_stat-block-item-info">138.614</div>
                            </div>
                            <div className="forum_stat-block-item">
                                <div className="forum_stat-block-item-option">Новый пользователь:</div>
                                <div className="forum_stat-block-item-info">Alex_Kostrov...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default ForumPage;