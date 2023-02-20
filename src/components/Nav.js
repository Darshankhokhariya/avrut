
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdClear, MdDarkMode, MdLightMode } from "react-icons/md";
import { BsBehance, BsDribbble, BsFacebook, BsInstagram } from "react-icons/bs";


function Nav() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [theme, settheme] = useState("dark");
    const [icon, seticon] = useState("true")
    const [logo, setlogo] = useState("true")


    useEffect(() => {

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }

    }, [theme]);

    useEffect(() => {

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }

    }, [theme]);

    const hswitch = () => {
        settheme(theme === "dark" ? "light" : "dark");
        seticon(!icon);
        setlogo(!logo);
        window.scrollTo(0, 0);

    }

    const handleClick = () => {
        window.scrollTo(0, 0);
        setMobileNavOpen(!mobileNavOpen)
    };




    return (
        <>
            {/* Page Container */}
            <div id="page-container" className="flex flex-col mx-auto w-full  sticky top-0 z-10  ">
                {/* Page Header */}
                <header id="page-header" className="flex flex-none items-center z-20  w-full ">
                    <div className="container mx-auto" >
                        <div className="flex justify-between px-4 bg-white bg-transparent ">
                            {/* Left Section */}
                            <div className="flex items-center">
                                {/* Logo */}
                                <Link to='/'>
                                    <a href="#" className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-700 active:text-gray-700 no-underline" onClick={hswitch}>
                                        <span>
                                            {logo ?
                                                <img src={require('../images/logo3.png')} alt="" width='120px' className='mx-3' />
                                                : <img src={require('../images/logo3.png')} alt="" width='120px' className='mx-3' />
                                            }
                                        </span>
                                    </a>
                                </Link>
                                {/* END Logo */}
                            </div>
                            {/* END Left Section */}

                            {/* Right Section */}
                            <div className="flex items-center space-x-1 lg:space-x-5">

                                {/* Toggle Mobile Navigation */}
                                <div className="dark:text-white text-black">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 font-semibold focus:outline-none px-3 py-2 leading-6 rounded"
                                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                    >
                                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-menu inline-block w-7  h-7 text-black dark:text-white"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    </button>
                                    <button className='text-3xl  text-black dark:text-white' onClick={hswitch}>
                                        {icon ? <MdLightMode /> : <MdDarkMode />}
                                    </button>
                                </div>
                                {/* END Toggle Mobile Navigation */}
                            </div>
                            {/* END Right Section */}
                        </div>

                        {/* Mobile Navigation */}
                        <div
                            className={` ${mobileNavOpen ? "hideen" : "hidden"
                                }`}
                        >
                            <nav className="flex flex-col absolute w-full top-0 left-0  py-8 border-t bg-white dark:bg-black lg:px-10 px-4 h-[800px] animate__animated animate__fadeInLeft">

                                <div className="flex justify-between">
                                    <div className=''>
                                        <img src={require('../images/logo1.png')} alt="" width='60px' className='mx-3' />
                                    </div>
                                    <div className="dark:text-white text-black">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center items-center space-x-2 font-semibold focus:outline-none px-3 py-2 text-3xl leading-6 rounded"
                                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                        >
                                            <MdClear />
                                        </button>
                                    </div>

                                </div>

                                <div className="grid grid-cols-3 justify-items-center dark:text-white">
                                    <div className='mt-10 justify-self-start '>
                                        <Link to='/'>
                                            <a href="#" onClick={handleClick} className="lg:text-3xl sm:text-lg font-medium flex items-center space-x-2 px-3 no-underline py-2 rounded ">
                                                <span>Home</span>
                                            </a>
                                        </Link>
                                        <Link to='/about'>
                                            <a href="#" onClick={handleClick} className="lg:text-3xl sm:text-lg font-medium flex items-center space-x-2 px-3 no-underline lg:py-4 py-2 rounded ">
                                                <span>About</span>
                                            </a>
                                        </Link>
                                        <Link to='/service'>
                                            <a href="#" onClick={handleClick} className="lg:text-3xl sm:text-lg font-medium flex items-center space-x-2 px-3 no-underline lg:py-4 py-2 rounded ">
                                                <span>Services</span>
                                            </a>
                                        </Link>
                                        <Link to='/portfolio'>
                                            <a href="#" onClick={handleClick} className="lg:text-3xl sm:text-lg font-medium flex items-center space-x-2 px-3 no-underline lg:py-4 py-2 rounded ">
                                                <span>Portfolio</span>
                                            </a>
                                        </Link>
                                        <Link to='/careear'>
                                            <a href="#" onClick={handleClick} className="lg:text-3xl sm:text-lg font-medium flex items-center space-x-2 px-3 no-underline lg:py-4 py-2 rounded ">
                                                <span>Career</span>
                                            </a>
                                        </Link>
                                        <Link to='/getintouch'>
                                            <a href="#" onClick={handleClick} className="lg:text-3xl sm:text-lg font-medium flex items-center space-x-2 px-3 no-underline lg:py-4 py-2 rounded ">
                                                <span>Get in touch</span>
                                            </a>
                                        </Link>
                                    </div>



                                    <div className='mt-10 ml-20 lg:text-start text-center text-black dark:text-white'>
                                        <h3 className='font-semibold text-2xl'>Address</h3>
                                        <div className='leading-10'>India (Head Office)</div>
                                        <p className='leading-10'>309 Ambevally arcade , Surat, Gujarat, India 395006</p>
                                        <div className='dark:text-white text-3xl flex  mt-7 justify-start'>
                                            <BsInstagram className='text-white lg:mr-3  mx-2' />
                                            <BsFacebook className='text-white lg:mx-3 mx-2' />
                                            <BsBehance className='text-white lg:mx-3 mx-2' />
                                            <BsDribbble className='text-white lg:mx-3 mx-2' />
                                        </div>
                                    </div>

                                </div>

                            </nav>
                        </div>
                        {/* END Mobile Navigation */}
                    </div>
                </header>
            </div>

        </>
    )
}

export default Nav


