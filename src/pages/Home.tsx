import { 
    Navbar, 
    Hero, 
    Blog, 
    Book, 
    Differentiation, 
    Features,
    Footer,
    Info,
    Specialities,
    Testimonials
} from "../components"

export const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Features/>
            <Info/>
            <Specialities/>
            <Differentiation/>
            <Book/>
            <Testimonials/>
            <Blog/>
            <Footer/>
        </>
    )
}