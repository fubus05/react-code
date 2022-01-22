import React from 'react';
import SideBar from "../../components/SideBar";
import TopMenu from "../../components/TopMenu/TopMenu";
import dstos from "../../assets/img/dsots.svg";
import Footer from "../../components/Footer";

const ErrorPage = () => {
    return (
        <div className='header-first-page'>
            <div className='dop'>
                <SideBar />
                <div className='right-side'>
                    <TopMenu />
                    <div className='titleBlock'>
                        <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                        <div className='title-titleBlock'>
                            <h1>404</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;