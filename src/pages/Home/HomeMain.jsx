import styled from "@emotion/styled";


// Section for home
import Hero from "@homeSection/Hero";
import Indication from "@homeSection/Indication";
import Process from "@homeSection/Process";
import ContactForm from "@homeSection/ContactForm";
import Features from "@homeSection/Features";

// Layouts
import Footer from "@components/layout/Footer";
import Range from "@components/layout/Range";

const Container = styled.main`
`

export default function HomeMain() {
    return (
        <>
            <Container>
                <Hero /> 
                <Range />
                <Features />
                <Indication />
                <Process />
                <ContactForm />
                <Footer />
            </Container>
        </>
    )
}