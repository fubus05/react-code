import React from 'react';
import "./profilePersonal.scss"
import sellLogo from "../../assets/img/cart.svg";
import logo from "../../assets/img/heads.png"
import user from "../../assets/img/user.png"
import lentaImg1 from "../../assets/img/lenta-img1.png"
import lentaImg2 from "../../assets/img/lenta-img2.png"
import userImg from  "../../assets/img/user-img.png"
const ProfileLayout = (props) => {
    return (
        <div className="profile">
            <div className="profile-layout-left">
               <div className="row">
                   <div className="col-8">
                       <div className="menu">
                           <img src={logo} alt="logo" className="logo"/>
                           <div className="menus">
                               <div>
                                   <div className = 'sell-button'>
                                       <div className = 'sell-logo'>
                                           <img src={sellLogo} alt={"bgc-logo"}/>
                                       </div>
                                       <p className='txtButton'>Продать товар</p>
                                   </div>
                                   <div className = 'sell-button'>
                                       <div className = 'sell-logo'>
                                           <img src={sellLogo} alt={"bgc-logo"}/>
                                       </div>
                                       <p className='txtButton'>Продать товар</p>
                                   </div>
                                   <div className = 'sell-button'>
                                       <div className = 'sell-logo'>
                                           <img src={sellLogo} alt={"bgc-logo"}/>
                                       </div>
                                       <p className='txtButton'>Продать товар</p>
                                   </div>
                                   <div className = 'sell-button'>
                                       <div className = 'sell-logo'>
                                           <img src={sellLogo} alt={"bgc-logo"}/>
                                       </div>
                                       <p className='txtButton'>Продать товар</p>
                                   </div>
                                   <div className = 'sell-button'>
                                       <div className = 'sell-logo'>
                                           <img src={sellLogo} alt={"bgc-logo"}/>
                                       </div>
                                       <p className='txtButton'>Продать товар</p>
                                   </div>
                                   <div className = 'sell-button'>
                                       <div className = 'sell-logo'>
                                           <img src={sellLogo} alt={"bgc-logo"}/>
                                       </div>
                                       <p className='txtButton'>Продать товар</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-4">
                       <div className="products">
                           <div className="online-users">
                               <div className="circle1">
                                   <div className="circle2">

                                   </div>
                               </div>
                               <div>
                                   <p>2 381</p>
                               </div>
                           </div>
                           <div className="user-gift">
                               <img src={user} alt="user" className="user"/>
                               <div className="gift">
                                   <span className="icon icon-gift"></span>
                               </div>
                           </div>

                           <div className="lenta">
                               <img src={lentaImg1} alt="lentaImg1"/>
                               <div className="comment">
                                    <p>Santc...</p>
                                   <img src={userImg} alt="userImg"/>
                               </div>
                           </div>
                           <div className="lenta">
                               <img src={lentaImg2} alt="lentaImg1"/>
                               <div className="comment">
                                   <p>Santc...</p>
                                   <img src={userImg} alt="userImg"/>
                               </div>
                           </div>
                           <div className="lenta">
                               <img src={lentaImg1} alt="lentaImg1"/>
                               <div className="comment">
                                   <p>Santc...</p>
                                   <img src={userImg} alt="userImg"/>
                               </div>
                           </div>
                           <div className="lenta">
                               <img src={lentaImg2} alt="lentaImg1"/>
                               <div className="comment">
                                   <p>Santc...</p>
                                   <img src={userImg} alt="userImg"/>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>

            <div className="profile-layout-right">
                {props.children}
            </div>

        </div>
    );
};

export default ProfileLayout;