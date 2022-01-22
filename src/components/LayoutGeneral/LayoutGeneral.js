import React from 'react';
import '../../pages/HomePage/homePage.scss'
import s from './LayoutGeneral.module.scss'
import SideBar from "../SideBar";
import TopMenu from "../TopMenu/TopMenu";
import Footer from "../Footer";
import NavBarMob from "../NavBarMob/NavBarMob";
import NabBarGeneral from "../NabBarGeneral/NabBarGeneral";

const LayoutGeneral = ({children}) => {
    return (
        <div className={s.layout}>
            <div className={`header-first-page ${s.desktop}`}>
                <div className='dop'>
                    <SideBar />
                    <div className='right-side'>
                        <TopMenu />
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
                <Footer />
            </div>
            <div className={s.mobile}>
                <NabBarGeneral />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default LayoutGeneral;