export const Navbar = () => {
    return (
        <>
            <nav role="navigation" className="header-nav-menu-wrapper w-nav-menu">
                <ul role="list" className="header-nav-menu-list">
                    <li className="header-nav-list-item left"><a href="/home-pages/home-v1" className="header-nav-link white-link tablet w-nav-link">Home</a></li>
                    <li className="header-nav-list-item left"><a href="/about" className="header-nav-link white-link tablet w-nav-link">About</a></li>
                    <li className="header-nav-list-item left">
                        <div data-hover="true" data-delay="0" data-w-id="3308f6cc-4683-2487-0f76-1e48bc67406d" className="dropdown-wrapper w-dropdown">
                            <div className="dropdown-toggle white-link tablet w-dropdown-toggle">
                                <div>Pages</div>
                                <div className="line-rounded-icon dropdown-arrow">�&nbsp;�</div>
                            </div>
                            <nav className="dropdown-column-wrapper w-dropdown-list">
                                <div className="card dropdown-pd">
                                    <div className="menu-main-wrapper">
                                        <div data-w-id="c01e61eb-7cd3-dc5b-789c-8d58b55d5e9b" className="menu-wrapper">
                                            <div className="inner-container _300px">
                                                <div className="text-300 bold pages-title">Main pages</div>
                                            </div>
                                        </div>
                                        <div data-w-id="c01e61eb-7cd3-dc5b-789c-8d58b55d5ee4" className="menu-wrapper">
                                            <div className="inner-container _138px">
                                                <div className="text-300 bold pages-title">Utility pages</div>
                                                <div>
                                                    <ul role="list" className="nav-menu-list-wrapper">
                                                        <li className="nav-menu-list-item"><a href="/coming-soon" className="nav-link">Coming soon</a></li>
                                                        <li className="nav-menu-list-item"><a href="/faqs" className="nav-link">FAQS</a></li>
                                                        <li className="nav-menu-list-item"><a href="/booking" className="nav-link">Booking</a></li>
                                                        <li className="nav-menu-list-item"><a href="/insurance" className="nav-link">Insurance</a></li>
                                                        <li className="nav-menu-list-item last">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-id="c01e61eb-7cd3-dc5b-789c-8d58b55d5ef9" className="menu-wrapper">
                                            <div className="inner-container _176px">
                                                <div className="text-300 bold pages-title">Template pages</div>
                                                <div>
                                                    <ul role="list" className="nav-menu-list-wrapper">
                                                        <li className="nav-menu-list-item"><a href="404" className="nav-link">404 not found</a></li>
                                                        <li className="nav-menu-list-item"><a href="401" className="nav-link">Password protected</a></li>
                                                        <li className="nav-menu-list-item"><a href="licenses" className="nav-link">Licenses</a></li>
                                                        <li className="nav-menu-list-item"><a href="changelog" className="nav-link">Changelog</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </li>
                    <li className="header-nav-list-item header-btn-show-on-tablet">
                        <a href="/booking" className="btn-primary small w-button"><span className="doctr-custom-icon mg-right-4px text-medium">�&nbsp;�</span>Book an appointment</a>
                    </li>
                </ul>
                <div className="header-right-side">
                    <div className="social-media-flex-container gap-column-16px hidden-on-tablet">
                        <a href="https://facebook.com/" target="_blank" className="social-icon-single white w-inline-block"><div className="social-icon-font font-size-20px-mbl">�&nbsp;�</div></a>
                        <a href="https://twitter.com/" target="_blank" className="social-icon-single white w-inline-block"><div className="social-icon-font font-size-20px-mbl">�&nbsp;�</div></a>
                        <a href="https://www.instagram.com/" target="_blank" className="social-icon-single white w-inline-block"><div className="social-icon-font font-size-20px-mbl">�&nbsp;�</div></a>
                        <a href="https://www.linkedin.com/" target="_blank" className="social-icon-single white w-inline-block"><div className="social-icon-font font-size-20px-mbl">�&nbsp;�</div></a>
                    </div>
                    <div className="hidden-on-tablet">
                        <div className="mg-right-20px">
                            <a href="/booking" className="btn-primary small w-button"><span className="doctr-custom-icon btn-icon-left small">�&nbsp;�</span>Book an appointment</a>
                        </div>
                    </div>
                    <div className="hamburger-menu-wrapper w-nav-button">
                        <div className="hamburger-menu-bar top white-transparent"></div>
                        <div className="hamburger-menu-bar bottom white-transparent"></div>
                    </div>
                </div>
            </nav>
        </>
    )
}