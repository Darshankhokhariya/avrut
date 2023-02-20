import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    const [show, setShow] = useState(null);

    return (
        <>

            <footer className="text-black dark:text-white  body-font">
                <div className="container px-20 lg:py-24 py-10 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-5">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-3xl mb-3 dark:text-white">Avrut</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 dark:text-white">info@avrut.com</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 dark:text-white">partner@avrut.com</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 ml-2 dark:text-white">Links</h2>

                            <div className=" mb-10 flex lg:justify-start md:justify-start  justify-center">
                                <Link to='/about' className='mx-2' OnClick={() => setShow(!show)}>About</Link>
                                <Link to='/service' className='mx-2'>Service</Link>
                                <Link to='/getintouch' className='mx-2'>Contact</Link>
                                <Link to='/careear' className='mx-2'>Career</Link>

                                {/* <li>
                                        <a className="text-gray-600 mx-2 hover:text-gray-800">Contacts</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 mx-2 hover:text-gray-800">Career</a>
                                    </li> */}
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 ml-2 dark:text-white">Follow Us</h2>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                <a className="text-gray-500 dark:text-white">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500 dark:text-white">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500 dark:text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500 dark:text-white">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 dark:text-white dark:bg-black">
                    <div className="container px-20 py-6 mx-auto flex items-center sm:flex-row flex-col" >

                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 dark:text-white">© 2023 —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1 dark:text-white" target="_blank">@Avrut infotech</a>
                        </p>

                    </div>
                </div>
            </footer>





        </>
    )
}

export default Footer