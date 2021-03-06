import '../styles/forum.scss'
import BGImage from '../photo/BGImage.png'
import BGOverlay from '../photo/BGOverlay.png'
import leftGuy from '../photo/leftGuy.png'
import middleGuy from '../photo/middleGuy.png'
import rightGuy from '../photo/rightGuy.png'
import logo from '../photo/logo.png'
import grayLine from '../photo/grayLine.png'
import ava from '../photo/ava.png'
import arrowBottom from '../photo/arrowBottom.png'
import search from '../photo/search.png'
import lightning from '../photo/lightning.png'
import chatIcon from '../photo/chatIcon.png'
import chatSmallLine from '../photo/chatSmallLine.png'
import chatBigLine from '../photo/chatBigLine.png'
import like from '../photo/like.png'
import likeBefore from '../photo/likeBefore.png'
import likeWhite from '../photo/likeWhite.png'
import likeWhiteBefore from '../photo/likeWhiteBefore.png'
import devAva from '../photo/devAva.png'
import online from '../photo/online.png'
import triangle from '../photo/triangle.png'
import commentOverlay from '../photo/commentOverlay.png'
import commentPencil from '../photo/commentPencil.png'
import heartImage from '../photo/heartImage.png'
import rightArrow from '../photo/rightArrow.png'

const changeStyle = () =>{

}

const Forum = () =>{
    return(
        <div className="forum-general-block">
            <div className="forum-header">
                <div className="forum-header-bg">
                    <img className="forum-bg_image" src={BGImage} alt="" />
                    <img className="forum-bg_overlay" src={BGOverlay} alt="" />
                    <div className="forum-guys_image-bg">
                        <img className="forum-bg-guy_overlay" src={leftGuy} alt="" />
                        <img className="forum-bg-guy_overlay" src={middleGuy} alt="" />
                        <img className="forum-bg-guy_overlay" src={rightGuy} alt="" />
                    </div>
                </div>
                <div className="forum-header-info">
                    <div className="forum-header_logo">
                        <img src={logo} alt="" />
                        <img className="forum-grayline_top" src={grayLine} alt="" />
                        <img className="forum-grayline_bottom" src={grayLine} alt="" />
                    </div>
                    <div className="forum-header_options">
                        <a className="forum-option_item" href="#">??????????</a>
                        <a href="#">????????????????</a>
                        <a href="#">??????-????????</a>
                        <a href="#">?????? ????????????</a>
                        <a href="#">????????????</a>
                        <a href="#">????????????????</a>
                        <a href="#">??????????????</a>
                    </div>
                    <div className="forum-header_user">
                        <img className="forum-header_avatar" src={ava} alt="" />
                        <div className="forum-header_nickname">Shenderro</div>
                        <img className="forum-header_arrow-image" src={arrowBottom} alt="" />
                    </div>
                </div>
            </div>
            <div className="forum-search_block">
                <div className="forum-search_section">
                    <div className="forum-search_section-options">  
                        <div className="forum-search_section-options_forum">??????????</div>
                        <div className="forum-search_section-options_users">????????????????????????</div>
                        <img className="forum-search_section-options_arrow" src={arrowBottom} alt="" />
                    </div>
                    <div className="forum-search_section-search_block">
                        <img className="search-block_image" src={search} alt="" />
                        <input className="search-block_text" type="text" placeholder="??????????" />
                    </div>
                </div>
            </div>
            <div className="forum-title_block">
                <div className="forum-title_section">
                    <div className="forum-title">??????????</div>
                    <div className="forum-theme_button-block">
                        <img className="forum-theme_lightning-image" src={lightning} alt="" />
                        <div className="forum-theme_inscription">???????????????? ????????</div>
                    </div>
                </div>
            </div>
            <div className="forum_main-section">
                <div className="first-section_block">
                    <div className="project-info_block">
                        <div className="project-info_block-title_block">
                            <div className="project-info_block-title">?????? ?? ??????????????</div>
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
                            <div className="forum-rules_inscription">?????????????? ????????????</div>
                            <div className="forum-comments_block">
                                <div className="forum-comments_count-text">????????????????????????</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">???????? ?? ??????????</div>
                                <div className="forum-date_and_author-date">1 ?????? 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
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
                            <div className="forum-rules_inscription">?????????????? ????????????</div>
                            <div className="forum-comments_block">
                                <div className="forum-comments_count-text">????????????????????????</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">???????? ?? ??????????</div>
                                <div className="forum-date_and_author-date">1 ?????? 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
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
                            <div className="forum-description_item-block-second">??????????????????????</div>
                        </div>
                        <div className="forum-dev-top_block">
                            <div className="forum-dev-top_block-text">?? ??????</div>
                            <img src={triangle} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="text-section_block">????????????!
                        ???????? ???? ???????????? ?????????????? ?? ?????????????? ?????? ???????????????? ?????????????? ???????? ?????? ?????????? ?????????? ?? ?????? <br/> ???????????????????????????????? ??????????????????, ???? ?????? ???????? ???????????????????? ?????? ??????! <br/>
                        <br/>
                        <br/>
                        ?????????? ???? ???????????? ???????????????? ?????????????????????????????? ????????????????????. <br/>
                        ???????????? ????????????: <br/>
                        1. ?????? ?????????????? ??????, ????????????, ???????????????????? ?????????????? <br/>
                        2. ?????????????? ?????? ?????????? ?????? ???????? ?? ???????????????????? ???????????????????? <br/>
                        3. ???????????? ???????????????????? ???? ??????????????
                    </div>
                    <div className="forum-line"></div>
                    <div className="forum-comment-likes_block">
                        <div className="forum-comment-likes_block-inscription">
                            <img className="comment-image_overlay" src={commentOverlay} alt="" />
                            <img className="comment-image_pencil" src={commentPencil} alt="" />
                            <div className="comment-inscription_text">??????????????????????????</div>
                        </div>
                        <div className="forum-comment-likes_block-count">
                            <img className="forum-comment-likes-image" src={heartImage} alt="" />
                            <div className="forum-comment-likes-count">14 567</div>
                        </div>
                    </div>
                        <textarea className="forum-comment-textarea" cols="80" rows="5" placeholder="???????????????? ???????? ??????????????????????..."></textarea>
                        <img className="forum-comment-textarea-arrow_image" src={rightArrow} alt="" />
                    <div className="forum-games-info_block">
                    <div className="project-info_block-title_block">
                            <div className="project-info_block-title">?????? ????????</div>
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
                                <div className="forum-comments_count-text">??????????????????  ????????</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">???????? ?? ??????????</div>
                                <div className="forum-date_and_author-date">1 ?????? 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
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
                                <div className="forum-comments_count-text">??????????????????  ????????</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">???????? ?? ??????????</div>
                                <div className="forum-date_and_author-date">1 ?????? 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
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
                                <div className="forum-comments_count-text">??????????????????  ????????</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">???????? ?? ??????????</div>
                                <div className="forum-date_and_author-date">1 ?????? 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
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
                                <div className="forum-comments_count-text">??????????????????  ????????</div>
                                <div className="forum-comments_count-number">16.293</div>
                            </div>
                            <div className="forum-date_and_author-block">
                                <div className="forum-date_and_author-text">???????? ?? ??????????</div>
                                <div className="forum-date_and_author-date">1 ?????? 2019 <a className="forum-date_and_author-date_link" href="#">notrejour</a></div>
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
                            <div className="forum-team_online-title_inscription">?????????????? ????????????</div>
                        </div>
                        <div className="forum-avatar_item-block-team">
                            <div className="forum-item-block_avatar-team">
                                <img className="forum-item-block_avatar-image-team" src={devAva} alt="" />
                                <img className="forum-item-block_avatar-status-team" src={online} alt="" />
                            </div>
                            <div className="forum-description_item-block-team">Alexey_Smirnov</div>
                            <div className="forum-description_item-block-second-team">??????????????????????</div>
                        </div>
                        <div className="forum-avatar_item-block-team">
                            <div className="forum-item-block_avatar-team">
                                <img className="forum-item-block_avatar-image-team" src={devAva} alt="" />
                                <img className="forum-item-block_avatar-status-team" src={online} alt="" />
                            </div>
                            <div className="forum-description_item-block-team">Alexey_Smirnov</div>
                            <div className="forum-description_item-block-second-team">??????????????????????</div>
                        </div>
                        <div className="forum-avatar_item-block-team">
                            <div className="forum-item-block_avatar-team">
                                <img className="forum-item-block_avatar-image-team" src={devAva} alt="" />
                                <img className="forum-item-block_avatar-status-team" src={online} alt="" />
                            </div>
                            <div className="forum-description_item-block-team">Alexey_Smirnov</div>
                            <div className="forum-description_item-block-second-team">??????????????????????</div>
                        </div>
                    </div>
                    <div className="forum-users_online-block">
                        <div className="forum-users_online-title_block">
                            <div className="forum-users_online-title_inscription">???????????????????????? ????????????</div>
                        </div>
                        <div className="forum-users-online_list-block">
                            <div className="forum-users-online_list">
                            Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                            Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                            Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                            Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                            Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231,
                            Vasya338, Alex4800, AndreyKo231, SashaCastom32, Vanysakl, <span className="red-user">Admin2</span>, Staroy233, Vasya338, Alex4800, AndreyKo231..
                            <span> ?? ?????? 159.</span>
                            </div>
                        </div>
                        <div className="forum-users-online_general-info-block">
                            <div className="forum-users-online_general-info">??????????: 278 (??????????????????????????: 209, <br/> ????????????: 69)</div>
                        </div>
                    </div>
                    <div className="forum_stat-block">
                    <div className="forum-stat-title_block">
                            <div className="forum-stat-title_inscription">???????????????????? ????????????</div>
                    </div>
                    <div className="forum_stat-block-section">
                    <div className="forum_stat-block-item">
                        <div className="forum_stat-block-item-option">????????:</div>
                        <div className="forum_stat-block-item-info">139.196</div>
                    </div>
                    <div className="forum_stat-block-item">
                        <div className="forum_stat-block-item-option">??????????????????:</div>
                        <div className="forum_stat-block-item-info">723.364</div>
                    </div>
                    <div className="forum_stat-block-item">
                        <div className="forum_stat-block-item-option">????????????????????????:</div>
                        <div className="forum_stat-block-item-info">138.614</div>
                    </div>
                    <div className="forum_stat-block-item">
                        <div className="forum_stat-block-item-option">?????????? ????????????????????????:</div>
                        <div className="forum_stat-block-item-info">Alex_Kostrov...</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Forum;