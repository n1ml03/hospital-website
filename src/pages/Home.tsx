import { GiHospitalCross } from "react-icons/gi"
import { IoCall } from "react-icons/io5"
import { 
    Navbar, 
    Hero, 
    Blog, 
    Book, 
    Differentiation, 
    Features,
    Info,
    Service,
    Testimonials
} from "../components"

export const Home = () => {
    return (
        <>
            <div className="page-wrapper">
                <Navbar/>
                <Hero/>
                <Features/>
                <Info/>
                <Service/>
                <Differentiation/>
                <Book/>
                <Testimonials/>
                <Blog/>
            </div>
            <div className="position-relative">
                <div className="container-default z-index-1 w-container">
                    <div className="cta v1">
                        <div data-w-id="6c706716-b18b-383b-6921-a866b8dcc9f8" className="half-bg-left call-to-action-v1"></div>
                        <div data-w-id="6c706716-b18b-383b-6921-a866b8dcc9f9" className="z-index-1">
                            <div className="inner-container _548px center">
                                <div className="subtitle white">book now</div>
                                <h2 className="display-2 color-neutral-100 mg-bottom-24px">Book your medical appointment today</h2>
                            </div>
                            <div className="button-row-wrap center">
                                <a href="/booking" className="btn-primary black w-button"><span className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                                <a href="/services" className="btn-secondary white w-button"><span className="doctr-custom-icon btn-icon-left"><GiHospitalCross/></span>Our specialities</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="half-bg-bottom half-footer-bg"></div>
            </div>
        </>
    )
}