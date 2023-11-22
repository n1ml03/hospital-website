import {GiHospitalCross} from "react-icons/gi"
import {IoCall} from "react-icons/io5"

export const Book = () => {
    return (
        <>
            <div className="position-relative">
                <div className="container-default w-container">
                    <div className="cta-card card-image-bg">
                        <div className="z-index-1">
                            <div className="inner-container _514px center">
                                <div className="text-center">
                                    <div className="subtitle white">Book now</div>
                                    <h2 className="display-2 color-neutral-100 mg-bottom-0">Book your medical appointment today</h2>
                                    <p className="color-neutral-300 mg-bottom-32px">Lorem ipsum dolor sit amet consectetur non venenatis nisi et in quis fermentum vel magna.</p>
                                </div>
                            </div>
                            <div className="button-row-wrap center">
                                <a href="/booking" className="btn-primary w-button"><span className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                                <a href="/services" className="btn-secondary white w-button"><span className="doctr-custom-icon btn-icon-left"><GiHospitalCross/></span>Our specialities</a>
                            </div>
                        </div>
                        <div className="position-absolute full">
                            <img
                                src="src/assets/images/waiting-room-hospital.jpg"
                                loading="eager"
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1292px"
                                srcSet="
                                    src/assets/images/waiting-room-hospital-p-500.jpg  500w,
                                    src/assets/images/waiting-room-hospital-p-800.jpg  800w,
                                    src/assets/images/waiting-room-hospital.jpg       1290w
                                "
                                alt=""
                                className="_w-h-100 fit-cover"
                            />
                            <div className="position-absolute bg-image-overlay v2"></div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute cta-rectangle-bg bg-neutral-200"></div>
            </div>
        </>
    )
}