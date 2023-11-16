import { Book } from "../components"    
import { Footer } from "../components"

export const Contact = () => {
    return (
        <>
            <div className="section overflow-hidden">
                <div className="container-default w-container">
                    <div className="z-index-1">
                        <div className="w-layout-grid grid-2-columns contact-v2">
                            <div
                                data-w-id="d204befd-19f8-4bd8-4732-772a03d56a45"
                                className="inner-container _412px _100---tablet"
                            >
                                <div className="subtitle">Contact us</div>
                                <h2 className="display-1">Send us a message</h2>
                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur sed donec mattis tristique est egestas eget diam faucibus nibh nunc eget duis ullamcorper.</p>
                                <div className="divider _48px _32px-tablet"></div>
                                <div>
                                    <h3 className="text-400 bold mg-bottom-12px">Follow us on social media</h3>
                                    <p className="mg-bottom-32px mg-bottom-20px-tablet">Lorem ipsum dolor sit amet consectetur sed donec mattis tristique est egestas eget diam.</p>
                                    <div className="social-media-flex-container gap-column-16px">
                                        <a href="https://facebook.com/" target="_blank" className="social-icon-single w-inline-block"><div className="social-icon-font font-size-20px-mbl">�&nbsp;�</div></a>
                                        <a href="https://twitter.com/" target="_blank" className="social-icon-single w-inline-block"><div className="social-icon-font font-size-20px-mbl">�&nbsp;�</div></a>
                                        <a href="https://www.instagram.com/" target="_blank" className="social-icon-single w-inline-block"><div className="social-icon-font font-size-20px-mbl">�&nbsp;�</div></a>
                                        <a href="https://www.linkedin.com/" target="_blank" className="social-icon-single w-inline-block"><div className="social-icon-font font-size-20px-mbl">�&nbsp;�</div></a>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-w-id="d204befd-19f8-4bd8-4732-772a03d56a6a"
                                className="position-relative"
                            >
                                <div className="card contact-form-card contact-v2 w-form">
                                    <form
                                        id="wf-form-Contact-V2-Form"
                                        name="wf-form-Contact-V2-Form"
                                        data-name="Contact V2 Form"
                                        method="get"
                                        data-wf-page-id="64b5aaead25fc7fff7a60cc0"
                                        data-wf-element-id="808290d0-8825-562f-3fd7-2f0c00215e66"
                                    >
                                        <div className="w-layout-grid grid-2-columns form">
                                            <div>
                                                <label htmlFor="name">Full name</label>
                                                <div className="position-relative">
                                                    <input type="text" className="input w-input"  name="Name" data-name="Name" placeholder="John Carter" id="name" />
                                                    <div className="floating-item icon"><img alt="User Icon Blue - Doctr X Webflow Template" src="images/6452c6f57004375cdbcd04fc_user-icon-blue.svg" /></div>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email">Email address</label>
                                                <div className="position-relative">
                                                    <input type="email" className="input w-input"  name="Email" data-name="Email" placeholder="example@youremail.com" id="email" />
                                                    <div className="floating-item icon"><img alt="Email Icon Font - Doctr X Webflow Template" src="images/64504db60e0dbeed580ac2a0_email-icon-font.svg" /></div>
                                                </div>
                                            </div>
                                            <div>   
                                                <label htmlFor="Phone">Phone number</label>
                                                <div className="position-relative">
                                                    <input type="tel" className="input w-input"  name="Phone" data-name="Phone" placeholder="(123) 456 - 7890" id="Phone" />
                                                    <div className="floating-item icon"><img alt="Phone Icon Font V2 - Doctr X Webflow Template" src="images/64504db916d762dfc7e36481_phone-icon-font-v2.svg" /></div>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="schedule">Schedule to receive call</label>
                                                <div className="position-relative">
                                                    <input type="text" className="input w-input"  name="Schedule" data-name="Schedule" placeholder="10:00 am to 1:00 pm" id="schedule" />
                                                    <div className="floating-item icon"><img alt="Calendar Icon Font - Doctr X Webflow Template" src="images/64504db5083b275052a4ad23_calendar-icon-font.svg" /></div>
                                                </div>
                                            </div>
                                            <div id="w-node-_808290d0-8825-562f-3fd7-2f0c00215e78-f7a60cc0">
                                                <label htmlFor="Message-2">Message</label>
                                                <textarea
                                                    id="Message-2"
                                                    name="Message"
                                                    data-name="Message"
                                                    placeholder="If you have any specific questions or need any information, please feel free to write it here..."
                                                    className="text-area w-input"
                                                ></textarea>
                                            </div>
                                            <div id="w-node-_808290d0-8825-562f-3fd7-2f0c00215e7c-f7a60cc0" data-w-id="808290d0-8825-562f-3fd7-2f0c00215e7c">
                                                <input type="submit" value="Send Message" data-wait="Please wait..." id="w-node-_808290d0-8825-562f-3fd7-2f0c00215e7d-f7a60cc0" className="btn-primary w-button" />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="success-message contact-form w-form-done">
                                        <div>
                                            <div className="line-rounded-icon success-message-check large">�&nbsp;�</div>
                                            <h3 className="display-3">Thank you</h3>
                                            <div>
                                                Your message has <span>been submitted.</span><br />
                                                We will get back to you within <span>24-48 hours.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="error-message w-form-fail"><div>Oops! Something went wrong.</div></div>
                                </div>
                                <div className="position-absolute contact-v2-left-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-radius-40px border-radius-16px-mbl overflow-hidden">
                <div className="section bg-neutral-200">
                    <div className="container-default w-container">
                        <div
                            data-w-id="6ac4a31f-8cfb-f342-34a3-10b5d3961ac2"
                            className="text-center mg-bottom-48px"
                        >
                            <div className="subtitle">FAQS</div>
                            <h2 className="display-2">Frequently asked questions</h2>
                        </div>
                        <div
                            data-w-id="6ac4a31f-8cfb-f342-34a3-10b5d3961ac8"
                            className="inner-container _736px center"
                        >
                            <div data-w-id="d74a8256-5661-502b-6d1d-267115e3de39" className="accordion-item-wrapper v2 first">
                                <div className="accordion-content-wrapper v2">
                                    <div className="accordion-header"><h3 className="accordion-title">How many hospital branches do you have?</h3></div>
                                    <div
                                        className="acordion-body"
                                    >
                                        <div className="accordion-spacer"></div>
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur pellentesque in scelerisque fames at habitasse convallis dolor scelerisque dictumst vitae lorem massa quisque.</p>
                                    </div>
                                </div>
                                <div className="accordion-side right-side">
                                    <div className="accordion-icon-wrapper">
                                        <div className="accordion-btn-line v2 vertical"></div>
                                        <div className="accordion-btn-line v2 horizontal"></div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="d74a8256-5661-502b-6d1d-267115e3de46" className="accordion-item-wrapper v2">
                                <div className="accordion-content-wrapper v2">
                                    <div className="accordion-header"><h3 className="accordion-title">What is the cost for an appointment?</h3></div>
                                    <div
                                        className="acordion-body"
                                    >
                                        <div className="accordion-spacer"></div>
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur pellentesque in scelerisque fames at habitasse convallis dolor scelerisque dictumst vitae lorem massa quisque.</p>
                                    </div>
                                </div>
                                <div className="accordion-side right-side">
                                    <div className="accordion-icon-wrapper">
                                        <div className="accordion-btn-line v2 vertical"></div>
                                        <div className="accordion-btn-line v2 horizontal"></div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="d74a8256-5661-502b-6d1d-267115e3de53" className="accordion-item-wrapper v2">
                                <div className="accordion-content-wrapper v2">
                                    <div className="accordion-header"><h3 className="accordion-title">What experience do your doctors have?</h3></div>
                                    <div
                                        className="acordion-body"
                                    >
                                        <div className="accordion-spacer"></div>
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur pellentesque in scelerisque fames at habitasse convallis dolor scelerisque dictumst vitae lorem massa quisque.</p>
                                    </div>
                                </div>
                                <div className="accordion-side right-side">
                                    <div className="accordion-icon-wrapper">
                                        <div className="accordion-btn-line v2 vertical"></div>
                                        <div className="accordion-btn-line v2 horizontal"></div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="d74a8256-5661-502b-6d1d-267115e3de60" className="accordion-item-wrapper v2 last">
                                <div className="accordion-content-wrapper v2">
                                    <div className="accordion-header"><h3 className="accordion-title">What medical specialities do you have?</h3></div>
                                    <div
                                        className="acordion-body"
                                    >
                                        <div className="accordion-spacer"></div>
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur pellentesque in scelerisque fames at habitasse convallis dolor scelerisque dictumst vitae lorem massa quisque.</p>
                                    </div>
                                </div>
                                <div className="accordion-side right-side">
                                    <div className="accordion-icon-wrapper">
                                        <div className="accordion-btn-line v2 vertical"></div>
                                        <div className="accordion-btn-line v2 horizontal"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section overflow-hidden">
                <div className="container-default w-container">
                    <div className="mg-bottom-48px">
                        <div
                            data-w-id="1b11a8ed-1734-8833-b155-5c0f9b9ed5d4"
                            className="w-layout-grid grid-2-columns title-and-paragraph"
                        >
                            <div id="w-node-_1b11a8ed-1734-8833-b155-5c0f9b9ed5d5-f7a60cc0" className="inner-container _452px _100---tablet">
                                <div className="subtitle">Our offices</div>
                                <h2 className="display-2 mg-bottom-0">Come &amp; visit one of our offices</h2>
                            </div>
                            <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.</p>
                        </div>
                    </div>
                    <div
                        data-delay="4000"
                        data-animation="slide"
                        className="slider-wrapper arrows-bottom-center-mbl mg-bottom-48px w-slider"
                        data-autoplay="false"
                        data-easing="ease"
                        data-hide-arrows="true"
                        data-disable-swipe="false"
                        data-w-id="2e45a893-25ab-6568-f105-16d1f4f224b1"
                        data-autoplay-limit="0"
                        data-nav-spacing="3"
                        data-duration="500"
                        data-infinite="true"
                    >
                        <div className="slider-mask width-1100px w-slider-mask">
                            <div className="slide-item-mg w-slide">
                                <div className="w-dyn-list">
                                    <div role="list" className="grid-1-column gap-row-32px w-dyn-items">
                                        <div role="listitem" className="card hospital-location-card w-dyn-item">
                                            <div className="card-picture-wrapper hospital-card-picture">
                                                <img
                                                    src="images/san-francisco-thumbnail-image-location.jpg"
                                                    alt="San Francisco, CA"
                                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 38vw, 440px"
                                                    srcSet="
                                                        images/san-francisco-thumbnail-image-location-p-500.jpg 500w,
                                                        images/san-francisco-thumbnail-image-location.jpg       960w
                                                    "
                                                    className="card-image"
                                                />
                                            </div>
                                            <div className="card-description hospital-card-description">
                                                <h2 className="card-title-dark display-4 mg-bottom-16px">San Francisco, CA</h2>
                                                <p className="color-neutral-600 mg-bottom-40px-tablet">Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.</p>
                                                <div className="w-layout-grid grid-1-column gap-row-48px gap-row-32px-tablet">
                                                    <div id="w-node-_9a42a4af-8b46-6115-3377-f2600f9dffc7-f7a60cc0" className="flex align-center vertical-left-mbl">
                                                        <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                            <div>
                                                                <img
                                                                    alt="Contact Phone Icon"
                                                                    loading="lazy"
                                                                    src="images/contact-phone-icon.svg"
                                                                    className="circle-icon _64px-mbl bg-light"
                                                                />
                                                            </div>
                                                            <div id="w-node-_9a42a4af-8b46-6115-3377-f2600f9dffca-f7a60cc0">
                                                                <div className="mg-bottom-8px"><div className="text-200 medium">Phone number</div></div>
                                                                <a data-w-id="9a42a4af-8b46-6115-3377-f2600f9dffce" href="tel:(253)456-1189" className="card-link color-neutral-600 w-inline-block">
                                                                    <div className="link-text">(253) 456 - 1189</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="w-node-_9a42a4af-8b46-6115-3377-f2600f9dffd1-f7a60cc0" className="divider-vertical info-line v2"></div>
                                                        <div>
                                                            <div className="mg-bottom-8px"><div className="text-200 medium">Email address</div></div>
                                                            <a data-w-id="9a42a4af-8b46-6115-3377-f2600f9dffd6" href="mailto:sanfrancisco@doctr.com" className="card-link color-neutral-600 w-inline-block">
                                                                <div className="link-text">Namiuoi@pearle.com</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                        <img
                                                            alt="Contact Visit Us Icon"
                                                            loading="lazy"
                                                            src="images/contact-visit-us-icon.svg"
                                                            className="circle-icon _64px-mbl bg-light"
                                                        />
                                                        <div id="w-node-_9a42a4af-8b46-6115-3377-f2600f9dffdb-f7a60cc0">
                                                            <div className="color-neutral-800 mg-bottom-12px">680 47th St. San Francisco, CA 90011</div>
                                                            <div className="text-200">
                                                                <a data-w-id="9a42a4af-8b46-6115-3377-f2600f9dffdf" href="/hospital/san-francisco-ca" className="card-link color-neutral-600 blue w-inline-block">
                                                                    <div className="link-text">Visit location</div>
                                                                    <div className="line-rounded-icon card-arrow-right">�&nbsp;�</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-item-mg w-slide">
                                <div className="w-dyn-list">
                                    <div role="list" className="grid-1-column gap-row-32px w-dyn-items">
                                        <div role="listitem" className="card hospital-location-card w-dyn-item">
                                            <div className="card-picture-wrapper hospital-card-picture">
                                                <img
                                                    src="images/mountain-view-thumbnail-image-location.jpg"
                                                    alt="Mountain View, CA"
                                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 38vw, 440px"
                                                    srcSet="
                                                        images/mountain-view-thumbnail-image-location-p-500.jpg 500w,
                                                        images/mountain-view-thumbnail-image-location.jpg       960w
                                                    "
                                                    className="card-image"
                                                />
                                            </div>
                                            <div className="card-description hospital-card-description">
                                                <h2 className="card-title-dark display-4 mg-bottom-16px">Mountain View, CA</h2>
                                                <p className="color-neutral-600 mg-bottom-40px-tablet">Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.</p>
                                                <div className="w-layout-grid grid-1-column gap-row-48px gap-row-32px-tablet">
                                                    <div id="w-node-_7a04013e-7bc9-865e-1900-d26314067c36-f7a60cc0" className="flex align-center vertical-left-mbl">
                                                        <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                            <div>
                                                                <img
                                                                    alt="Contact Phone Icon"
                                                                    loading="lazy"
                                                                    src="images/contact-phone-icon.svg"
                                                                    className="circle-icon _64px-mbl bg-light"
                                                                />
                                                            </div>
                                                            <div id="w-node-_7a04013e-7bc9-865e-1900-d26314067c3a-f7a60cc0">
                                                                <div className="mg-bottom-8px"><div className="text-200 medium">Phone number</div></div>
                                                                <a data-w-id="7a04013e-7bc9-865e-1900-d26314067c3e" href="tel:(253)456-1189" className="card-link color-neutral-600 w-inline-block">
                                                                    <div className="link-text">(253) 456 - 1189</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="w-node-_7a04013e-7bc9-865e-1900-d26314067c40-f7a60cc0" className="divider-vertical info-line v2"></div>
                                                        <div>
                                                            <div className="mg-bottom-8px"><div className="text-200 medium">Email address</div></div>
                                                            <a data-w-id="7a04013e-7bc9-865e-1900-d26314067c45" href="mailto:mountainview@doctr.com" className="card-link color-neutral-600 w-inline-block">
                                                                <div className="link-text">mountainview@doctr.com</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                        <img
                                                            alt="Contact Visit Us Icon"
                                                            loading="lazy"
                                                            src="images/contact-visit-us-icon.svg"
                                                            className="circle-icon _64px-mbl bg-light"
                                                        />
                                                        <div id="w-node-_7a04013e-7bc9-865e-1900-d26314067c49-f7a60cc0">
                                                            <div className="color-neutral-800 mg-bottom-12px">384 San Antonio RD Mountain View, CA 94040</div>
                                                            <div className="text-200">
                                                                <a data-w-id="7a04013e-7bc9-865e-1900-d26314067c4c" href="/hospital/mountain-view-ca" className="card-link color-neutral-600 blue w-inline-block">
                                                                    <div className="link-text">Visit location</div>
                                                                    <div className="line-rounded-icon card-arrow-right">�&nbsp;�</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-item-mg w-slide">
                                <div className="w-dyn-list">
                                    <div role="list" className="grid-1-column gap-row-32px w-dyn-items">
                                        <div role="listitem" className="card hospital-location-card w-dyn-item">
                                            <div className="card-picture-wrapper hospital-card-picture">
                                                <img
                                                    src="images/san-francisco-thumbnail-image-location.jpg"
                                                    alt="San Francisco, CA"
                                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 38vw, 440px"
                                                    srcSet="
                                                        images/san-francisco-thumbnail-image-location-p-500.jpg 500w,
                                                        images/san-francisco-thumbnail-image-location.jpg       960w
                                                    "
                                                    className="card-image"
                                                />
                                            </div>
                                            <div className="card-description hospital-card-description">
                                                <h2 className="card-title-dark display-4 mg-bottom-16px">San Francisco, CA</h2>
                                                <p className="color-neutral-600 mg-bottom-40px-tablet">Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.</p>
                                                <div className="w-layout-grid grid-1-column gap-row-48px gap-row-32px-tablet">
                                                    <div id="w-node-bc2028a3-b163-1762-887e-11bdbcdd45f2-f7a60cc0" className="flex align-center vertical-left-mbl">
                                                        <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                            <div>
                                                                <img
                                                                    alt="Contact Phone Icon"
                                                                    loading="lazy"
                                                                    src="images/contact-phone-icon.svg"
                                                                    className="circle-icon _64px-mbl bg-light"
                                                                />
                                                            </div>
                                                            <div id="w-node-bc2028a3-b163-1762-887e-11bdbcdd45f6-f7a60cc0">
                                                                <div className="mg-bottom-8px"><div className="text-200 medium">Phone number</div></div>
                                                                <a data-w-id="bc2028a3-b163-1762-887e-11bdbcdd45fa" href="tel:(253)456-1189" className="card-link color-neutral-600 w-inline-block">
                                                                    <div className="link-text">(253) 456 - 1189</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="w-node-bc2028a3-b163-1762-887e-11bdbcdd45fc-f7a60cc0" className="divider-vertical info-line v2"></div>
                                                        <div>
                                                            <div className="mg-bottom-8px"><div className="text-200 medium">Email address</div></div>
                                                            <a data-w-id="bc2028a3-b163-1762-887e-11bdbcdd4601" href="mailto:sanfrancisco@doctr.com" className="card-link color-neutral-600 w-inline-block">
                                                                <div className="link-text">sanfrancisco@doctr.com</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                        <img
                                                            alt="Contact Visit Us Icon"
                                                            loading="lazy"
                                                            src="images/contact-visit-us-icon.svg"
                                                            className="circle-icon _64px-mbl bg-light"
                                                        />
                                                        <div id="w-node-bc2028a3-b163-1762-887e-11bdbcdd4605-f7a60cc0">
                                                            <div className="color-neutral-800 mg-bottom-12px">680 47th St. San Francisco, CA 90011</div>
                                                            <div className="text-200">
                                                                <a data-w-id="bc2028a3-b163-1762-887e-11bdbcdd4608" href="/hospital/san-francisco-ca" className="card-link color-neutral-600 blue w-inline-block">
                                                                    <div className="link-text">Visit location</div>
                                                                    <div className="line-rounded-icon card-arrow-right">�&nbsp;�</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-item-mg w-slide">
                                <div className="w-dyn-list">
                                    <div role="list" className="grid-1-column gap-row-32px w-dyn-items">
                                        <div role="listitem" className="card hospital-location-card w-dyn-item">
                                            <div className="card-picture-wrapper hospital-card-picture">
                                                <img
                                                    src="images/mountain-view-thumbnail-image-location.jpg"
                                                    alt="Mountain View, CA"
                                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 38vw, 440px"
                                                    srcSet="
                                                        images/mountain-view-thumbnail-image-location-p-500.jpg 500w,
                                                        images/mountain-view-thumbnail-image-location.jpg       960w
                                                    "
                                                    className="card-image"
                                                />
                                            </div>
                                            <div className="card-description hospital-card-description">
                                                <h2 className="card-title-dark display-4 mg-bottom-16px">Mountain View, CA</h2>
                                                <p className="color-neutral-600 mg-bottom-40px-tablet">Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.</p>
                                                <div className="w-layout-grid grid-1-column gap-row-48px gap-row-32px-tablet">
                                                    <div id="w-node-_8e6bf82a-48d9-94d0-8120-632c03397eda-f7a60cc0" className="flex align-center vertical-left-mbl">
                                                        <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                            <div>
                                                                <img
                                                                    alt="Contact Phone Icon"
                                                                    loading="lazy"
                                                                    src="images/contact-phone-icon.svg"
                                                                    className="circle-icon _64px-mbl bg-light"
                                                                />
                                                            </div>
                                                            <div id="w-node-_8e6bf82a-48d9-94d0-8120-632c03397ede-f7a60cc0">
                                                                <div className="mg-bottom-8px"><div className="text-200 medium">Phone number</div></div>
                                                                <a data-w-id="8e6bf82a-48d9-94d0-8120-632c03397ee2" href="tel:(253)456-1189" className="card-link color-neutral-600 w-inline-block">
                                                                    <div className="link-text">(253) 456 - 1189</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="w-node-_8e6bf82a-48d9-94d0-8120-632c03397ee4-f7a60cc0" className="divider-vertical info-line v2"></div>
                                                        <div>
                                                            <div className="mg-bottom-8px"><div className="text-200 medium">Email address</div></div>
                                                            <a data-w-id="8e6bf82a-48d9-94d0-8120-632c03397ee9" href="mailto:mountainview@doctr.com" className="card-link color-neutral-600 w-inline-block">
                                                                <div className="link-text">mountainview@doctr.com</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                        <img
                                                            alt="Contact Visit Us Icon"
                                                            loading="lazy"
                                                            src="images/contact-visit-us-icon.svg"
                                                            className="circle-icon _64px-mbl bg-light"
                                                        />
                                                        <div id="w-node-_8e6bf82a-48d9-94d0-8120-632c03397eed-f7a60cc0">
                                                            <div className="color-neutral-800 mg-bottom-12px">384 San Antonio RD Mountain View, CA 94040</div>
                                                            <div className="text-200">
                                                                <a data-w-id="8e6bf82a-48d9-94d0-8120-632c03397ef0" href="/hospital/mountain-view-ca" className="card-link color-neutral-600 blue w-inline-block">
                                                                    <div className="link-text">Visit location</div>
                                                                    <div className="line-rounded-icon card-arrow-right">�&nbsp;�</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-item-mg w-slide">
                                <div className="w-dyn-list">
                                    <div role="list" className="grid-1-column gap-row-32px w-dyn-items">
                                        <div role="listitem" className="card hospital-location-card w-dyn-item">
                                            <div className="card-picture-wrapper hospital-card-picture">
                                                <img
                                                    src="images/san-francisco-thumbnail-image-location.jpg"
                                                    alt="San Francisco, CA"
                                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 38vw, 440px"
                                                    srcSet="
                                                        images/san-francisco-thumbnail-image-location-p-500.jpg 500w,
                                                        images/san-francisco-thumbnail-image-location.jpg       960w
                                                    "
                                                    className="card-image"
                                                />
                                            </div>
                                            <div className="card-description hospital-card-description">
                                                <h2 className="card-title-dark display-4 mg-bottom-16px">San Francisco, CA</h2>
                                                <p className="color-neutral-600 mg-bottom-40px-tablet">Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.</p>
                                                <div className="w-layout-grid grid-1-column gap-row-48px gap-row-32px-tablet">
                                                    <div id="w-node-eba6e432-a892-4c65-7837-deca8f3e72a1-f7a60cc0" className="flex align-center vertical-left-mbl">
                                                        <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                            <div>
                                                                <img
                                                                    alt="Contact Phone Icon"
                                                                    loading="lazy"
                                                                    src="images/contact-phone-icon.svg"
                                                                    className="circle-icon _64px-mbl bg-light"
                                                                />
                                                            </div>
                                                            <div id="w-node-eba6e432-a892-4c65-7837-deca8f3e72a5-f7a60cc0">
                                                                <div className="mg-bottom-8px"><div className="text-200 medium">Phone number</div></div>
                                                                <a data-w-id="eba6e432-a892-4c65-7837-deca8f3e72a9" href="tel:(253)456-1189" className="card-link color-neutral-600 w-inline-block">
                                                                    <div className="link-text">(253) 456 - 1189</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="w-node-eba6e432-a892-4c65-7837-deca8f3e72ab-f7a60cc0" className="divider-vertical info-line v2"></div>
                                                        <div>
                                                            <div className="mg-bottom-8px"><div className="text-200 medium">Email address</div></div>
                                                            <a data-w-id="eba6e432-a892-4c65-7837-deca8f3e72b0" href="mailto:sanfrancisco@doctr.com" className="card-link color-neutral-600 w-inline-block">
                                                                <div className="link-text">sanfrancisco@doctr.com</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                        <img
                                                            alt="Contact Visit Us Icon"
                                                            loading="lazy"
                                                            src="images/contact-visit-us-icon.svg"
                                                            className="circle-icon _64px-mbl bg-light"
                                                        />
                                                        <div id="w-node-eba6e432-a892-4c65-7837-deca8f3e72b4-f7a60cc0">
                                                            <div className="color-neutral-800 mg-bottom-12px">680 47th St. San Francisco, CA 90011</div>
                                                            <div className="text-200">
                                                                <a data-w-id="eba6e432-a892-4c65-7837-deca8f3e72b7" href="/hospital/san-francisco-ca" className="card-link color-neutral-600 blue w-inline-block">
                                                                    <div className="link-text">Visit location</div>
                                                                    <div className="line-rounded-icon card-arrow-right">�&nbsp;�</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-item-mg w-slide">
                                <div className="w-dyn-list">
                                    <div role="list" className="grid-1-column gap-row-32px w-dyn-items">
                                        <div role="listitem" className="card hospital-location-card w-dyn-item">
                                            <div className="card-picture-wrapper hospital-card-picture">
                                                <img
                                                    src="images/mountain-view-thumbnail-image-location.jpg"
                                                    alt="Mountain View, CA"
                                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 38vw, 440px"
                                                    srcSet="
                                                        images/mountain-view-thumbnail-image-location-p-500.jpg 500w,
                                                        images/mountain-view-thumbnail-image-location.jpg       960w
                                                    "
                                                    className="card-image"
                                                />
                                            </div>
                                            <div className="card-description hospital-card-description">
                                                <h2 className="card-title-dark display-4 mg-bottom-16px">Mountain View, CA</h2>
                                                <p className="color-neutral-600 mg-bottom-40px-tablet">Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.</p>
                                                <div className="w-layout-grid grid-1-column gap-row-48px gap-row-32px-tablet">
                                                    <div id="w-node-dbe8263a-191b-de2c-ae99-3171842f6647-f7a60cc0" className="flex align-center vertical-left-mbl">
                                                        <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                            <div>
                                                                <img
                                                                    alt="Contact Phone Icon"
                                                                    loading="lazy"
                                                                    src="images/contact-phone-icon.svg"
                                                                    className="circle-icon _64px-mbl bg-light"
                                                                />
                                                            </div>
                                                            <div id="w-node-dbe8263a-191b-de2c-ae99-3171842f664b-f7a60cc0">
                                                                <div className="mg-bottom-8px"><div className="text-200 medium">Phone number</div></div>
                                                                <a data-w-id="dbe8263a-191b-de2c-ae99-3171842f664f" href="tel:(253)456-1189" className="card-link color-neutral-600 w-inline-block">
                                                                    <div className="link-text">(253) 456 - 1189</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="w-node-dbe8263a-191b-de2c-ae99-3171842f6651-f7a60cc0" className="divider-vertical info-line v2"></div>
                                                        <div>
                                                            <div className="mg-bottom-8px"><div className="text-200 medium">Email address</div></div>
                                                            <a data-w-id="dbe8263a-191b-de2c-ae99-3171842f6656" href="mailto:mountainview@doctr.com" className="card-link color-neutral-600 w-inline-block">
                                                                <div className="link-text">mountainview@doctr.com</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                        <img
                                                            alt="Contact Visit Us Icon"
                                                            loading="lazy"
                                                            src="images/contact-visit-us-icon.svg"
                                                            className="circle-icon _64px-mbl bg-light"
                                                        />
                                                        <div id="w-node-dbe8263a-191b-de2c-ae99-3171842f665a-f7a60cc0">
                                                            <div className="color-neutral-800 mg-bottom-12px">384 San Antonio RD Mountain View, CA 94040</div>
                                                            <div className="text-200">
                                                                <a data-w-id="dbe8263a-191b-de2c-ae99-3171842f665d" href="/hospital/mountain-view-ca" className="card-link color-neutral-600 blue w-inline-block">
                                                                    <div className="link-text">Visit location</div>
                                                                    <div className="line-rounded-icon card-arrow-right">�&nbsp;�</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-circle-primary slider-arrow left---center-center w-slider-arrow-left"><div className="line-rounded-icon">�&nbsp;�</div></div>
                        <div className="btn-circle-primary slider-arrow right---center-center w-slider-arrow-right"><div className="line-rounded-icon">�&nbsp;�</div></div>
                        <div className="hidden-on-desktop w-slider-nav w-round"></div>
                    </div>
                    <div
                        data-w-id="def257cf-a696-9ab1-cdb8-9d2636d4c140"
                        className="buttons-row center"
                    >
                        <a href="/booking" className="btn-primary w-button"><span className="doctr-custom-icon btn-icon-left"></span>Book an appointment</a>
                    </div>
                </div>
            </div>
        </>
    )
}