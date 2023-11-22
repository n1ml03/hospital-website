import {ImArrowRight2} from "react-icons/im";

export const Features = () => {
    return (
        <>
            <div className="section cta-section-card booking">
                <div className="container-default w-container">
                    <div className="card booking-card">
                    <div className="w-layout-grid grid-3-columns booking-grid-3-col">
                            <div
                                id="w-node-_08e9d63a-aa6b-fe17-6540-ffee451f3662-f7a60d05"
                                className="inner-container _432px _100-tablet"
                            >
                                <div className="subtitle">Booking</div>
                                <h2 className="display-2 mg-bottom-8px">Let us take care of your health</h2>
                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur venenatis nisi et in quis fermentum vel.</p>
                            </div>
                            <div
                                id="w-node-_08e9d63a-aa6b-fe17-6540-ffee451f3669-f7a60d05"
                                className="inner-container _330px _100-tablet"
                            >
                                <div className="mg-bottom-24px">
                                    <div className="image-wrapper size-80px">
                                        <img src="src/assets/icons/contact-visit-us-icon.svg" alt="Contact Visit Us Icon" className="circle-icon" />
                                    </div>
                                </div>
                                <h3 className="display-4 mg-bottom-16px">Visit us on</h3>
                                <p className="color-neutral-800 mg-bottom-12px">680 47th St. San Francisco, CA 90011</p>
                                <a href="https://www.google.com/maps" target="_blank" className="card-link color-neutral-600 blue w-inline-block">
                                    <div className="link-text">Open on Google Maps</div>
                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                </a>
                                <div className="divider _32px"></div>
                                <div className="mg-bottom-16px"><div className="text-200 medium color-neutral-800">Mon - Fri: 8:00am to 5:00pm</div></div>
                                <div className="text-200 medium color-neutral-800">Saturday: 9:00am to 3:30pm</div>
                            </div>
                            <div
                                id="w-node-_08e9d63a-aa6b-fe17-6540-ffee451f367c-f7a60d05"
                                className="inner-container _196px _100-tablet"
                            >
                                <div className="mg-bottom-24px">
                                    <div className="image-wrapper size-80px">
                                        <img src="src/assets/icons/contact-phone-icon.svg" alt="Contact Phone Icon" className="circle-icon" />
                                    </div>
                                </div>
                                <h3 className="display-4 mg-bottom-16px">Contact us</h3>
                                <div className="text-medium mg-bottom-4px">Phone number</div>
                                <a href="tel:(253)456-1189" className="link-bold text-200 text-decoration-none">(253) 456 - 1189</a>
                                <div className="divider _32px"></div>
                                <div className="mg-bottom-8px"><div className="text-200 medium color-neutral-600">Email address</div></div>
                                <a href="mailto:contact@doctr.com" className="link-bold text-200 text-decoration-none">contact@doctr.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
