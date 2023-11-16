export const Book = () => {
    return (
        <>
            <div className="position-relative">
                <div className="container-default w-container">
                    <div data-w-id="5c1f0fdc-59d3-cf65-6308-53d7514c67bd" className="cta-card card-image-bg">
                        <div className="z-index-1">
                            <div className="inner-container _514px center">
                                <div
                                    data-w-id="5c1f0fdc-59d3-cf65-6308-53d7514c67bf"
                                    className="text-center"
                                >
                                    <div className="subtitle white">Book now</div>
                                    <h2 className="display-2 color-neutral-100 mg-bottom-0">Book your medical appointment today</h2>
                                    <p className="color-neutral-300 mg-bottom-32px">Lorem ipsum dolor sit amet consectetur non venenatis nisi et in quis fermentum vel magna.</p>
                                </div>
                            </div>
                            <div
                                data-w-id="5c1f0fdc-59d3-cf65-6308-53d7514c67c2"
                                className="button-row-wrap center"
                            >
                                <a href="/booking" className="btn-primary w-button"><span className="doctr-custom-icon btn-icon-left"></span>Book an appointment</a>
                                <a href="/services" className="btn-secondary white w-button"><span className="doctr-custom-icon btn-icon-left"></span>Our specialities</a>
                            </div>
                        </div>
                        <div className="position-absolute full">
                            <img
                                src="images/waiting-room-hospital.jpg"
                                loading="eager"
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1292px"
                                srcSet="
                                    images/waiting-room-hospital-p-500.jpg  500w,
                                    images/waiting-room-hospital-p-800.jpg  800w,
                                    images/waiting-room-hospital.jpg       1290w
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