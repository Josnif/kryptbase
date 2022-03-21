import { useEffect, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import darkLogo from '../../images/logo_dark.png';
import lightLogo from '../../images/logo_light.png';

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}    
        </li>
    );
}

const Navbar = () => {
    const [toggelMenu, setToggleMenu] = useState(false);
    const [themeMode, setThemeMode] = useState(localStorage.getItem('theme'));

    const toggleTheme = () => {
        if (themeMode === 'dark') {
            window.localStorage.setItem('theme', 'light');
            setThemeMode('light');
            document.documentElement.classList.remove('dark');
        } else {
            window.localStorage.setItem('theme', 'dark');
            setThemeMode('dark');
            document.documentElement.classList.add('dark');
        }
    }

    useEffect(() => {
        if (typeof localStorage.getItem('theme') == 'object') {
            setThemeMode('dark');
            document.documentElement.classList.add('dark');
        } else if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setThemeMode('dark');
            document.documentElement.classList.add('dark');
        } else {
            setThemeMode('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);
    

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                { themeMode === 'dark' ? (
                    <img src={lightLogo} alt="logo" className="w-40 cursor-pointer" />
                    ) : (
                        <img src={darkLogo} alt="logo" className="w-40 cursor-pointer" />
                    )
                }
            </div>
            <ul className="dark:text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd">
                </li> */}
                <button onClick={toggleTheme} type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    { themeMode != 'dark' ? 
                        (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        )

                    }
                </button>
            </ul>
            <div className="flex relative">
                <button onClick={toggleTheme} type="button" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1 -mt-1.5">
                    { themeMode != 'dark' ? 
                        (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        )

                    }
                </button>
                {toggelMenu 
                    ?  <AiOutlineClose fontSize={28} className="dark:text-white md:hidden cursor-pointer mt-0.5" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="dark:text-white md:hidden cursor-pointer mt-0.5" onClick={() => setToggleMenu(true)} />
                }
                {toggelMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
                            flex flex-col justify-start items-end rounded=md blue-glassmorphism dark:text-white gray-900 animate-slide-in
                        "
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;