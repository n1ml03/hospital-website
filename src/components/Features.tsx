export const Features = () => {
    return (
        <>
            <div className="section cta-section-card booking">
                <div className="container-default w-container">
                    <div className="card booking-card">
                        <div className="w-layout-grid grid-3-columns booking-grid-3-col">
                            <div>
                                <div className="mg-bottom-24px">
                                    <div className="image-wrapper size-80px">
                                        <img src="images/645139c6e8baf3a2c2802111_contact-phone-icon-doctr-x-webflow-template.svg" alt="Contact Phone Icon - Doctr X Webflow Template" className="circle-icon" />
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
            <div className="section">
                <div className="container-default w-container">
                    <div className="w-layout-grid grid-2-columns grid-about-us">
                        <div className="picture-wrapper _02">
                            <div className="image-rounded-corners-wrapper _03">
                                <img
                                    src="images/6453d304b37b0c61b15ee407_doctor-team-meeting-doctr-x-webflow-template.jpg"
                                    loading="eager"
                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 46vw, 574px"
                                    srcSet="
                                        images/6453d304b37b0c61b15ee407_doctor-team-meeting-doctr-x-webflow-template-p-500.jpg  500w,
                                        images/6453d304b37b0c61b15ee407_doctor-team-meeting-doctr-x-webflow-template-p-800.jpg  800w,
                                        images/6453d304b37b0c61b15ee407_doctor-team-meeting-doctr-x-webflow-template.jpg       1148w
                                    "
                                    alt="Our Caring Doctors Are Here For You - Doctr X Webflow Template"
                                />
                            </div>
                            <div data-w-id="cb64183b-c629-43af-055f-d05bde04aa3d" className="blue-square _04">
                                <div className="blue-inner-square"><img src="images/64680b6a94182cbb1eae3a43_shape-bg-home-v3-about-us-doctr-x-webflow-template.svg" alt="" className="image-shape _03" /></div>
                            </div>
                        </div>
                        <div>
                            <div className="subtitle">About us</div>
                            <h2 className="display-2">Our caring doctors are here for you</h2>
                            <div className="inner-container _460px _100---tablet">
                                <p className="mg-bottom-32px mg-bottom-20px-tablet">Lorem ipsum dolor sit amet consectetur venenatis nisi et in quis fermentum vel magna magna risus arcu et turpis ac lacus quam etiam integer eget dolor.</p>
                                <div className="stats-container mg-bottom-48px mg-bottom-32px-tablet">
                                    <div>
                                        <div className="display-1 mg-bottom-4px">10<span className="color-accent-1">K</span></div>
                                        <div className="text-200 medium">Happy clients</div>
                                    </div>
                                    <div>
                                        <div className="display-1 mg-bottom-4px">100<span className="color-accent-1">+</span></div>
                                        <div className="text-200 medium">Team members</div>
                                    </div>
                                </div>
                                <div className="buttons-row">
                                    <a href="/booking" className="btn-primary w-button"><span className="doctr-custom-icon btn-icon-left"></span>Book an appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
