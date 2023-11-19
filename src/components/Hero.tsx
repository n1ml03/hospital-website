import { GiHospitalCross } from "react-icons/gi";
import { IoCall } from "react-icons/io5";

export const Hero = () => {
    return (
        <>
            <div className="section hero home-v3">
                <div className="container-default z-index-1 w-container">
                    <div className="inner-container _600px center">
                        <div className="text-center">
                            <div
                                data-w-id="8381f955-1c18-ff7d-efa1-22357797b699"
                                className="subtitle white"
                            >
                                Welcome to doctr X
                            </div>
                            <h1
                                data-w-id="bfd1240a-1af3-cf37-bca2-22f22ab7a879"
                                className="display-1 color-neutral-100"
                            >
                                Holistic wellness for optimal living
                            </h1>
                            <p
                                data-w-id="bfd1240a-1af3-cf37-bca2-22f22ab7a87b"
                                className="color-neutral-300 mg-bottom-40px"
                            >
                                Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.
                            </p>
                            <div
                                data-w-id="bfd1240a-1af3-cf37-bca2-22f22ab7a87d"
                                className="buttons-row center"
                            >
                                <a href="/booking" className="btn-primary button-row w-button"><span className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                                <a href="/services" className="btn-secondary white w-button"><span className="doctr-custom-icon btn-icon-left"><GiHospitalCross/></span>Our specialities</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-home-image---bg">
                    <img
                        src="src/assets/images/city-optimal-living.jpg"
                        loading="eager"
                        sizes="100vw"
                        srcSet="
                            src/assets/images/city-optimal-living-p-500.jpg   500w,
                            src/assets/images/city-optimal-living-p-800.jpg   800w,
                            src/assets/images/city-optimal-living-p-1080.jpg 1080w,
                            src/assets/images/city-optimal-living-p-1600.jpg 1600w,
                            src/assets/images/city-optimal-living.jpg        2160w
                        "
                        alt="Holistic Wellness For Optimal Living - Doctr X Webflow Template"
                        className="_w-h-100 fit-cover"
                    />
                    <div className="position-absolute bg-image-overlay"></div>
                </div>
        </>
    )
}