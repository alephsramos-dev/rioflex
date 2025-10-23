import styled from "@emotion/styled"

// Layout
import { down } from "@styles/media"
import Container from "@components/layout/Container"
import FormLayout from "@components/layout/Form"

// Components
import Title from "@components/text/Title"
import Description from "@components/text/Description"

// Assets
import BackgroundEffect from "@assets/pattern/background-effect.png"

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
    background: ${(props) => props.theme.colors.neutral[900]};
    z-index: -1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 60%;
        height: 100%;
        background: url(${BackgroundEffect}) no-repeat center;
        mix-blend-mode: luminosity;
        opacity: 0.1;
        z-index: -2;
        background-size: cover;

        ${down("tablet")} {
            width: 100%;
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 60%;
        height: 100%;
        background: linear-gradient(-125deg, ${(props) => props.theme.colors.neutral[900]} 40%, rgba(33, 33, 33, 0) 100%);
        z-index: -1;

        ${down("tablet")} {
            width: 100%;
            background: linear-gradient(45deg, ${(props) => props.theme.colors.neutral[900]} 60%, rgba(33, 33, 33, 0) 100%);    
        }
    }
`

const ContactFormContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 5%;
    gap: 32px;
    position: relative;

    ${down("tablet")} {
        padding: 7.5% 5%;
        flex-direction: column;
        gap: 42px;
    }
`

const Texts = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    ${down("tablet")} {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        width: 100%;
    }

    & .title {
        flex: 1;
        color: ${(props) => props.theme.colors.base.white};

        ${down("tablet")} {
            width: 100%;
            font-size: 28px;
        }
    }
    
    & .description {
        width: 100%;
        color: ${(props) => props.theme.colors.neutral[200]};
        font-size: 20px;

        ${down("tablet")} {
            width: 100%;
            font-size: 16px;
        }

        & strong {
            color: ${(props) => props.theme.colors.neutral[400]};
        }
    }
`

export default function ContactForm() {
    return (
        <>
            <AllElements id="form">
                <Bg></Bg>
                <ContactFormContainer>
                    <Texts>
                        <Title
                            className="title"
                        >
                            Vamos iniciar seu projeto!
                        </Title>
                        <Description
                            className="description"
                        >
                            Preencha o <strong>formulário para que consigamos entrar em contato</strong> direto com você, e fique tranquilo, todas as suas informações serão usadas apenas para fins de contato!
                        </Description>
                    </Texts>
                    <FormLayout />
                </ContactFormContainer>    
            </AllElements>      
        </>
    )
}