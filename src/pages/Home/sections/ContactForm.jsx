import styled from "@emotion/styled"

// Layout
import { down } from "@styles/media"
import Container from "@components/layout/Container"

// Components
import Title from "@components/text/Title"
import Description from "@components/text/Description"
import TestimonialCard from "@components/card/Testimonial"

// Data
import testimonialsData from "@/db/testimonials"

const AllElements = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.base.white};
    z-index: -1;
`

const ContactFormContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0% 5% 5% 5%;
    gap: 48px;
    position: relative;

    ${down("tablet")} {
        padding: 8% 5%;
        gap: 36px;
    }
`

const Texts = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 16px;

    ${down("tablet")} {
        align-items: flex-start;
        text-align: left;
    }

    & .title {
        color: ${(props) => props.theme.colors.neutral[900]};
        font-size: 38px;

        ${down("tablet")} {
            width: 100%;
            font-size: 30px;
        }
    }
    
    & .description {
        color: ${(props) => props.theme.colors.neutral[600]};
        font-size: 18px;
        line-height: 1.5;

        ${down("tablet")} {
            font-size: 16px;
        }
    }
`

const TestimonialsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    ${down("tablet")} {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

export default function ContactForm() {
    return (
        <>
            <AllElements id="testimonials">
                <Bg></Bg>
                <ContactFormContainer>
                    <Texts>
                        <Title className="title">
                            O que nossos parceiros dizem
                        </Title>
                        <Description className="description">
                            Não acredite apenas na nossa palavra. Veja o feedback real de quem confia sua operação à Rio Flex.
                        </Description>
                    </Texts>
                    <TestimonialsGrid>
                        {testimonialsData.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                rating={testimonial.rating}
                                text={testimonial.text}
                                author={testimonial.author}
                                role={testimonial.role}
                                tags={testimonial.tags}
                                accentColor={testimonial.accentColor}
                            />
                        ))}
                    </TestimonialsGrid>
                </ContactFormContainer>
            </AllElements>
        </>
    )
}