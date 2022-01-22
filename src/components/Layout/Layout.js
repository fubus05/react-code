import React from 'react';
import ProfileLayout from "../../pages/ProfilePersonalPage/ProfileLayout";
import Footer from "../Footer";
import TopMenu from "../TopMenu/TopMenu";
import ic_chat from "../../assets/img/ic_chat.png";

const Layout = ({children}) => {
    const chatBtnHandler = e => {
        console.log('chat')
    };
    return (
        <main>
            <ProfileLayout>
                <TopMenu/>
                {children}
                <img
                    src={ic_chat}
                    className="float-button"
                    onClick={chatBtnHandler}
                />
            </ProfileLayout>
            <Footer/>
        </main>
    );
};

export default Layout;