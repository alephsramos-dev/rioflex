import styled from "@emotion/styled"

// Layout
import Container from "@components/layout/Container"
import { down } from "@styles/media"

// Assets
import BackgroundEffect from "@assets/pattern/background-effect.png";

// Components
import Title from "@components/text/Title"
import Description from "@components/text/Description"
import ContactButton from "@components/button/Contact"
import IndicationCarousel from "@components/carousel/Indication"

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
    background: ${(props) => props.theme.colors.primary.main};
    z-index: -1;
`

const IndicationContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 5% 5%;
    gap: 42px;
    position: relative;

    ${down("tablet")} {
        flex-direction: column;
        padding: 7.5% 5%;
        gap: 32px;
    }

    &::before{
        content: '';
        width: 60%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: url(${BackgroundEffect}) no-repeat center;
        background-size: cover;
        z-index: -1;    
        mix-blend-mode: soft-light;
        opacity: 1;

        ${down("tablet")} {
            width: 80%;
            height: 40%;
            top: 0;
            filter: grayscale(100%) contrast(200%) brightness(100%);
            opacity: 0.4;
        }
    }

    &::after{
        content: '';
        width: 60%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(0deg, ${(props) => props.theme.colors.primary.main} 5%, transparent 100%);
        z-index: -1;

        ${down("tablet")} {
            width: 100%;
            height: 40%;
            top: 0%;
            background: linear-gradient(0deg, ${(props) => props.theme.colors.primary.main} 50%, transparent 100%);
        }
    }
`

const Texts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    gap: 32px;

    ${down("tablet")} {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    & .title {
        width: 80%;
        color: ${(props) => props.theme.colors.base.white};

        ${down("tablet")} {
            width: 100%;
            font-size: 28px;
        }
    }

    & .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 16px;

        ${down("tablet")} {
            align-items: center;
            text-align: center;
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

        & .contact-button {
            display: none;

            ${down("tablet")} {
                display: flex;
            }
        }
    }
`

const Cards = styled.div`
    width: 100%;
    position: relative;
`

export default function Indication() {
    return (
        <>
            <AllElements>
                <Bg></Bg>
                <IndicationContainer>
                    <Texts>
                        <Title
                            className="title"
                        >
                            Da produção à entrega, temos a etiqueta certa para você.
                        </Title>
                        <div
                            className="content"
                        >
                            <Description
                                className="description"
                            >
                                Soluções para cada etapa do seu negócio, direto da fábrica.
                            </Description>
                            <ContactButton
                                className="contact-button"
                                children="Pedir orçamento agora"
                                bgColor="rgb(252, 252, 252)"
                                colorSlide="rgb(242, 242, 242)"
                                colorLabel="rgb(254, 141, 34)"
                                colorCorner="rgb(200, 200, 200)"
                                colorDiamond="rgb(254, 141, 34)"
                            />
                        </div>
                    </Texts>
                    <Cards>
                        <IndicationCarousel />
                    </Cards>
                </IndicationContainer>
            </AllElements>
        </>
    )
}