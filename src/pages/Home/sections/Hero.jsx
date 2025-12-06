import styled from "@emotion/styled"

// Layout
import Container from "@components/layout/Container"
import { down } from "@styles/media"

// Assets
import LogoRioFlex from "@assets/logo/logo-rioflex.svg?react";
import Lacres from "@assets/service/rioflex-etiqueta-lacres.webp";
import Pizza from "@assets/service/rioflex-etiqueta-pizza.webp";
import Acai from "@assets/service/rioflex-etiqueta-acai.webp";
import Delivery from "@assets/service/rioflex-etiqueta-delivery.webp";
import BackgroundEffect from "@assets/pattern/background-effect.png";
import Artesanais from "@assets/service/rioflex-etiqueta-produtos-artesanais.webp";
import Bopp from "@assets/service/BOPP.JPG";
import Ecommerce from "@assets/service/Ecommerce.JPG";
import LacreSeguranca from "@assets/service/LacreSeguranca.JPG";
import Personalizadas from "@assets/service/Personalizadas.JPG";

// Components 
import Title from "@components/text/Title";
import Description from "@components/text/Description";
import ContactButton from "@components/button/Contact";

const HeroContainer = styled(Container)`
    padding: 0;
    gap: 32px;
    position: relative;
    overflow: visible;

    ${down("tablet")} {
        flex-direction: column-reverse;
        padding: 0 0 10% 0;
        gap: 24px;
    }
    
    &::before{
        content: '';
        width: 50vw;
        height: 100%;
        position: absolute;
        top: 0;
        left: calc((100vw - 1440px) / -2);
        background: url(${BackgroundEffect}) no-repeat center;
        background-size: cover;
        z-index: -2;
        opacity: 0.2;

        ${down("tablet")} {
            width: 100vw;
            height: 50%;
            top: 40%;
            left: calc((100vw - 100%) / -2);
        }

        @media (max-width: 1440px) {
            left: -5%;
        }
    }

    &::after{
        content: '';
        width: 50vw;
        height: 100%;
        position: absolute;
        top: 0;
        left: calc((100vw - 1440px) / -2);
        background: linear-gradient(-35deg, ${(props) => props.theme.colors.base.white} 50%, transparent 100%);
        z-index: -1;

        ${down("tablet")} {
            width: 100vw;
            height: 50%;
            top: 50%;
            left: calc((100vw - 100%) / -2);
            background: linear-gradient(35deg, ${(props) => props.theme.colors.base.white} 50%, transparent 100%);
        }

        @media (max-width: 1440px) {
            left: -5%;
        }
    }
`

const Texts = styled.aside`
    width: 50%;
    display: flex;
    align-items: flex-start;    
    flex-direction: column;
    gap: 26px;
    height: auto;
    padding: 0 2.5%;

    ${down("tablet")} {
        width: 100%;
        padding: 0 5%;
        max-width: 100%;
    }

    & .logo {
        width: 180px;
        height: auto;
        fill: ${(props) => props.theme.colors.neutral[900]};

        ${down("tablet")} {
            width: 120px;
        }
    }

    & .title {
        
        ${down("tablet")} {
            font-size: 28px;
        }
    }   

    & .description {

        ${down("tablet")} {
            font-size: 16px;
        }   
    }
`

const Images = styled.ol`
    width: 50%;
    height: auto;
    max-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 2 columns
    grid-template-rows: repeat(5, 1fr); // 5 rows
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    padding-right: 0;
    margin-right: calc((100vw - 1440px) / -2);

    @media (max-width: 1440px) {
        margin-right: -5%;
    }

    & .i1 { grid-area: 1 / 1 / 3 / 2; } // row 1 at 3 and col 1 at 2
    & .i2 { grid-area: 3 / 1 / 6 / 2; } // row 3 at 6 and col 1 at 2
    & .i3 { grid-area: 1 / 2 / 4 / 3; } // row 1 at 4 and col 2 at 3
    & .i4 { grid-area: 4 / 2 / 6 / 3; } // row 4 at 6 and col 2 at 3

    & .i1,  & .i2,  & .i3, & .i4 {

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    ${down("tablet")} {
        width: 100%;
        max-height: 70vh;
        margin-right: 0;
    }
`

export default function Hero() {
    return (
        <>
            <HeroContainer>
                <Texts>
                    <LogoRioFlex
                        className="logo"
                    />
                    <Title
                        className="title"
                    >
                        Compre direto da fábrica com <strong>agilidade e preço justo</strong>
                    </Title>
                    <Description
                        className="description"
                    >
                        <strong>A qualidade que sua marca merece</strong> com a rapidez que sua operação precisa.
                    </Description>
                    <ContactButton
                        children="Pedir orçamento agora"
                    />
                </Texts>
                <Images>
                    <li className="i1" data-aos="fade-up" data-aos-delay="100">
                        <img
                            src={Artesanais}
                            alt="rioflex-fabrica-de-etiquetas-adesivo-para-lacres"
                            loading="eager"
                        />
                    </li>
                    <li className="i2" data-aos="fade-up" data-aos-delay="200">
                        <img
                            src={Ecommerce}
                            alt="rioflex-fabrica-de-etiquetas-adesivo-para-pizza"
                            loading="eager"
                        />
                    </li>
                    <li className="i3" data-aos="fade-up" data-aos-delay="300">
                        <img
                            src={Bopp}
                            alt="rioflex-fabrica-de-etiquetas-adesivo-para-acai"
                            loading="eager"
                        />
                    </li>
                    <li className="i4" data-aos="fade-up" data-aos-delay="400">
                        <img
                            src={Delivery}
                            alt="rioflex-fabrica-de-etiquetas-adesivo-para-delivery"
                            loading="eager"
                        />
                    </li>
                </Images>
            </HeroContainer>
        </>
    )
}