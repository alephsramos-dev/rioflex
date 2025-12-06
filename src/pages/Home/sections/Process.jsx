import styled from "@emotion/styled"

// Layout
import { down } from "@styles/media"
import Container from "@components/layout/Container"

// Components
import Title from "@components/text/Title"
import Description from "@components/text/Description"
import ProcessCarousel from "@components/carousel/Process";

// Icons
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import ContactButton from "../../../components/button/Contact"


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
    background: ${(props) => props.theme.colors.neutral[50]};
    z-index: -1;
`

const ProcessContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 6% 5%;
    gap: 48px;
    position: relative;

    ${down("tablet")} {
        padding: 8% 5%;
        gap: 36px;
    }
`

const Texts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;

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
        max-width: 720px;
        color: ${(props) => props.theme.colors.neutral[600]};
        font-size: 20px;
        line-height: 1.5;

        ${down("tablet")} {
            font-size: 16px;
        }
    }
`

const Carousel = styled.div`
    width: 100%;
    position: relative;

    @keyframes fillProgressBar {
        0% {
            width: 0%;
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        100% {
            width: 70%;
            opacity: 1;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 84px;
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        width: 70%;
        background: ${(props) => props.theme.colors.neutral[200]};
        border-radius: 999px;
        z-index: 0;

        ${down("tablet")} {
            display: none;
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 84px;
        left: 15%;
        width: 0%;
        height: 3px;
        background: linear-gradient(
            to right,
            ${(props) => props.theme.colors.primary.main} 0%,
            ${(props) => props.theme.colors.primary.main} 33%,
            ${(props) => props.theme.colors.neutral[900]} 33%,
            ${(props) => props.theme.colors.neutral[900]} 66%,
            rgb(24, 179, 90) 66%,
            rgb(24, 179, 90) 100%
        );
        border-radius: 999px;
        z-index: 0;
        animation: fillProgressBar 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        animation-delay: 0.5s;

        ${down("tablet")} {
            display: none;
        }
    }

    & .swiper {
        padding-top: 8px;
        position: relative;
        z-index: 1;

        & .swiper-slide {
            height: auto;
        }
    }
`

const SupportCard = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colors.base.white};
    border-radius: 32px;
    padding: 44px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    border: 1px solid ${(props) => props.theme.colors.neutral[200]};

    ${down("tablet")} {
        padding: 28px 24px;
        align-items: flex-start;
    }
`

const SupportList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.neutral[600]};
    font-size: 16px;

    ${down("tablet")} {
        justify-content: flex-start;
        text-align: left;
    }
`

const SupportItem = styled.li`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;

    & svg {
        color: ${(props) => props.theme.colors.primary.main};
    }
`

const CTAButton = styled.button`
    width: 100%;
    max-width: 360px;
    border: none;
    border-radius: 999px;
    padding: 18px 32px;
    background: ${(props) => {
        const success = props.theme.colors.success?.main || "rgb(24, 179, 90)";
        return `linear-gradient(135deg, ${props.theme.colors.primary.main}, ${success})`;
    }};
    color: ${(props) => props.theme.colors.base.white};
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: transform 200ms ease, box-shadow 200ms ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 15px 35px rgba(24, 179, 90, 0.35);
    }
`

const ResponseTime = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.colors.neutral[400]};
    text-align: center;

    ${down("tablet")} {
        text-align: left;
    }
`

export default function Process() {
    return (
        <>
            <AllElements>
                <Bg></Bg>
                <ProcessContainer>
                    <Texts>
                        <Title className="title">
                            Veja como é fácil comprar direto da fábrica.
                        </Title>
                        <Description className="description">
                            Simplificamos a burocracia para que sua produção não pare.
                        </Description>
                    </Texts>
                    <Carousel>
                        <ProcessCarousel />
                    </Carousel>
                    <SupportCard>
                        <SupportList>
                            <SupportItem>
                                <CheckCircle size={20} weight="fill" />
                                Suporte técnico para te ajudar.
                            </SupportItem>
                            <SupportItem>
                                <CheckCircle size={20} weight="fill" />
                                Orçamento sem compromisso.
                            </SupportItem>
                        </SupportList>
                        <ContactButton
                            children="Pedir orçamento agora"
                        />
                        <ResponseTime>Tempo médio de resposta: 5 minutos</ResponseTime>
                    </SupportCard>
                </ProcessContainer>
            </AllElements>
        </>
    )
}