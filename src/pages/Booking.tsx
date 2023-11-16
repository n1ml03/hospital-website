import { Footer } from "../components"
import { Book } from "../components"

export const Booking = () => {
    return (
        <>
            <div data-w-id="b0f16eeb-78d7-5c30-e277-f2b461f908e6" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="header-wrapper w-nav">
                <div className="container-default w-container">
                    <div data-w-id="b0f16eeb-78d7-5c30-e277-f2b461f908e8" className="flex-horizontal">
                        <a href="/home" className="header-logo-link mg-right-0 w-nav-brand"><img src="images/logo-web.svg" alt="Logo" /></a>
                    </div>
                </div>
            </div>
            <div className="section hero booking">
                <div className="container-default width-100 w-container">
                    <div className="w-layout-grid grid-2-columns booking-page-grid">
                        <div
                            data-w-id="c08f68c4-7de3-76c9-6bba-a9dba4f5fa20"
                            className="inner-container _444px _100---tablet"
                        >
                            <div className="subtitle">Booking</div>
                            <h1 className="display-1">Get a free appointment</h1>
                            <p className="mg-bottom-24px">Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus.</p>
                            <div className="w-layout-grid grid-1-column gap-row-16px">
                                <div className="icon-list-item-wrapper">
                                    <img src="images/6452c0ab154f2e5d51a2cf56_check-icon-doctr-x-webflow-template.svg" alt="" className="icon-list" />
                                    <div className="text-bold"><div className="line-height-1-2em mg-top-3px">100+ doctors available</div></div>
                                </div>
                                <div className="icon-list-item-wrapper">
                                    <img src="images/6452c0ab154f2e5d51a2cf56_check-icon-doctr-x-webflow-template.svg" alt="" className="icon-list" />
                                    <div className="text-bold"><div className="line-height-1-2em mg-top-3px">Free appointment with any speciality</div></div>
                                </div>
                                <div className="icon-list-item-wrapper">
                                    <img src="images/6452c0ab154f2e5d51a2cf56_check-icon-doctr-x-webflow-template.svg" alt="" className="icon-list" />
                                    <div className="text-bold"><div className="line-height-1-2em mg-top-3px">Virtual on-site</div></div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="w-node-c08f68c4-7de3-76c9-6bba-a9dba4f5fa3b-f7a60ca4"
                            data-w-id="c08f68c4-7de3-76c9-6bba-a9dba4f5fa3b"
                            className="card contact-form-card booking-form w-form"
                        >
                            <form id="wf-form-Booking-Form" name="wf-form-Booking-Form" data-name="Booking Form" method="get" data-wf-page-id="64b5aaead25fc7fff7a60ca4" data-wf-element-id="c08f68c4-7de3-76c9-6bba-a9dba4f5fa3c">
                                <div className="w-layout-grid grid-2-columns form">
                                    <div>
                                        <label htmlFor="Name">Full name</label>
                                        <div className="position-relative">
                                            <input type="text" className="input w-input"  name="Name" data-name="Name" placeholder="John Carter" id="Name"/>
                                            <div className="floating-item icon"><img src="images/6452c6f57004375cdbcd04fc_user-icon-blue-doctr-x-webflow-template.svg" alt="User Icon Blue - Doctr X Webflow Template" /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="Email">Email address</label>
                                        <div className="position-relative">
                                            <input type="email" className="input w-input"  name="Email" data-name="Email" placeholder="example@youremail.com" id="Email" />
                                            <div className="floating-item icon"><img src="images/64504db60e0dbeed580ac2a0_email-icon-font-doctr-x-webflow-template.svg" alt="Email Icon Font - Doctr X Webflow Template" /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="Phone">Phone number</label>
                                        <div className="position-relative">
                                            <input type="tel" className="input w-input"  name="Phone" data-name="Phone" placeholder="(123) 456 -7890" id="Phone" />
                                            <div className="floating-item icon"><img src="images/64504db916d762dfc7e36481_phone-icon-font-v2-doctr-x-webflow-template.svg" alt="Phone Icon Font V2 - Doctr X Webflow Template" /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="Company">Schedule to receive call</label>
                                        <div className="position-relative">
                                            <input type="text" className="input w-input"  name="Schedule" data-name="Schedule" placeholder="10:00 am to 1:00 pm" id="Schedule" />
                                            <div className="floating-item icon"><img src="images/6452c6f57004375cdbcd04fc_user-icon-blue-doctr-x-webflow-template.svg" alt="User Icon Blue - Doctr X Webflow Template" /></div>
                                        </div>
                                    </div>
                                    <div id="w-node-fcd9f6af-3df2-8075-69c9-d85998b45416-f7a60ca4" data-w-id="fcd9f6af-3df2-8075-69c9-d85998b45416" className="mg-top-8px mg-top-4px-mbp">
                                        <input type="submit" value="Get a free appointment" data-wait="Please wait..." id="w-node-c08f68c4-7de3-76c9-6bba-a9dba4f5fa52-f7a60ca4" className="btn-primary width-100 w-button" />
                                    </div>
                                </div>
                            </form>
                            <div className="success-message contact-form w-form-done">
                                <div>
                                    <div className="line-rounded-icon success-message-check large">�&nbsp;�</div>
                                    <h3 className="display-3">Thank you</h3>
                                    <div>Thanks for reaching out. We will get back to you soon.</div>
                                </div>
                            </div>
                            <div className="error-message w-form-fail"><div>Oops! Something went wrong</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}