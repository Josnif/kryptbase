import React, { useState, useEffect } from 'react';
import darkLogo from '../../images/logo_dark.png';
import lightLogo from '../../images/logo_light.png';

const Footer = () => {
    const [themeMode, setThemeMode] = useState(localStorage.getItem('theme'));
    
    // set a global state for the theme mode change instead of the line below
    setInterval(() => {
        setThemeMode(localStorage.getItem('theme'));
    }, 1000);
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    { themeMode === 'dark' ? (
                        <img src={lightLogo} alt="logo" className="w-40 cursor-pointer" />
                        ) : (
                            <img src={darkLogo} alt="logo" className="w-40 cursor-pointer" />
                        )
                    }
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full ">
                    <p className="dark:text-white text-base text-center mx-2 cursor-pointer">Market</p>
                    <p className="dark:text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
                    <p className="dark:text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
                    <p className="dark:text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="dark:text-white text-sm text-center">Come join us</p>
                <p className="dark:text-white text-sm text-center">jotwebstudio@gmail.com</p>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "></div>
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="dark:text-white text-sm text-center">@kryptobase 2022</p>
                <p className="dark:text-white text-sm text-center">All right reserved.</p>
            </div>
        </div>
    );
}

export default Footer;