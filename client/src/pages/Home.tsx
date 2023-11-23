import {GiHospitalCross} from "react-icons/gi"
import {IoCall} from "react-icons/io5"
import {
    Blog,
    BookBigver,
    BookSmalver,
    Differentiation,
    Features,
    Hero,
    Info,
    Navbar,
    Service,
    Testimonial
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
                <BookBigver/>
                <Testimonial/>
                <Blog/>
                <BookSmalver/>
            </div>
        </>
    )
}