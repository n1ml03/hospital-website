import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";

export const Navbar = () => {
    return (
        <>
            <div className="position-relative">
                <div data-w-id="3308f6cc-4683-2487-0f76-1e48bc67405e" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="header-wrapper bg-transparent w-nav">
                    <div className="container-default w-container">
                        <div data-w-id="3308f6cc-4683-2487-0f76-1e48bc674060" className="header-content-wrapper">
                            <div className="header-left-side">
                                <a href="/home" className="header-logo-link w-nav-brand"><img src="src/assets/icons/logo-web-white.svg" alt="" /></a>
                                    <nav role="navigation" className="header-nav-menu-wrapper w-nav-menu">
                                        <ul role="list" className="header-nav-menu-list">
                                            <li className="header-nav-list-item left"><a href="/home" className="header-nav-link white-link tablet w-nav-link">Home</a></li>
                                            <li className="header-nav-list-item left"><a href="/about" className="header-nav-link white-link tablet w-nav-link">About</a></li>
                                            <li className="header-nav-list-item left">
                                                <div data-hover="true" data-delay="0" data-w-id="3308f6cc-4683-2487-0f76-1e48bc67406d" className="dropdown-wrapper w-dropdown">
                                                    <nav className="dropdown-column-wrapper w-dropdown-list">
                                                        <div className="card dropdown-pd">
                                                            <div className="menu-main-wrapper">
                                                                <div data-w-id="c01e61eb-7cd3-dc5b-789c-8d58b55d5e9b" className="menu-wrapper">
                                                                    <div className="inner-container _300px">
                                                                        <div className="text-300 bold pages-title">Main pages</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </li>
                                            <li className="header-nav-list-item header-btn-show-on-tablet">
                                                <a href="/booking" className="btn-primary small w-button"><span className="doctr-custom-icon mg-right-4px text-medium"><IoCall/></span>Book an appointment</a>
                                            </li>
                                        </ul>
                                        <div className="header-right-side">
                                            <div className="social-media-flex-container gap-column-16px hidden-on-tablet">
                                                <a href="https://facebook.com/" target="_blank" className="social-icon-single white w-inline-block"><div className="social-icon-font font-size-20px-mbl"><ImFacebook /></div></a>
                                                <a href="https://twitter.com/" target="_blank" className="social-icon-single white w-inline-block"><div className="social-icon-font font-size-20px-mbl"><ImTwitter/></div></a>
                                                <a href="https://www.instagram.com/" target="_blank" className="social-icon-single white w-inline-block"><div className="social-icon-font font-size-20px-mbl"><RiInstagramFill/></div></a>
                                                <a href="https://www.linkedin.com/" target="_blank" className="social-icon-single white w-inline-block"><div className="social-icon-font font-size-20px-mbl"><ImLinkedin2/></div></a>
                                            </div>
                                            <div className="hidden-on-tablet">
                                                <div className="mg-right-20px">
                                                    <a href="/booking" className="btn-primary small w-button"><span className="doctr-custom-icon btn-icon-left small"><IoCall/></span>Book an appointment</a>
                                                </div>
                                            </div>
                                            {/* <div className="hamburger-menu-wrapper w-nav-button">
                                                <div className="hamburger-menu-bar top white-transparent"></div>
                                                <div className="hamburger-menu-bar bottom white-transparent"></div>
                                            </div> */}
                                        </div>
                                    </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


