import { IoCall } from "react-icons/io5"

export const Info = () => {
    return (
        <>
            <div className="section">
                <div className="container-default w-container">
                    <div className="w-layout-grid grid-2-columns grid-about-us">
                        <div className="picture-wrapper _02">
                            <div className="image-rounded-corners-wrapper _03">
                                <img
                                    src="src/assets/images/doctor-team-meeting.jpg"
                                    loading="eager"
                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 46vw, 574px"
                                    srcSet="
                                        src/assets/images/doctor-team-meeting-p-500.jpg  500w,
                                        src/assets/images/doctor-team-meeting-p-800.jpg  800w,
                                        src/assets/images/doctor-team-meeting.jpg       1148w
                                    "
                                    alt="Our Caring Doctors Are Here For You - Doctr X Webflow Template"
                                />
                            </div>
                            <div data-w-id="cb64183b-c629-43af-055f-d05bde04aa3d" className="blue-square _04">
                                <div className="blue-inner-square"><img src="src/images/shape-bg-home-v3-about-us.svg" alt="" className="image-shape _03" /></div>
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
                                        <div className="text-200 medium">Happy clients </div>
                                    </div>
                                    <div>
                                        <div className="display-1 mg-bottom-4px">100<span className="color-accent-1">+</span></div>
                                        <div className="text-200 medium">Team members</div>
                                    </div>
                                </div>
                                <div className="buttons-row">
                                    <a href="/booking" className="btn-primary w-button"><span className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}