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
 
// Components 
import Title from "@components/text/Title";
import Description from "@components/text/Description";
import ContactButton from "@components/button/Contact";

const HeroContainer = styled(Container)`
    padding: 0 0 0 5%;
    gap: 32px;
    position: relative;

    ${down("tablet")} {
        flex-direction: column-reverse;
        padding: 0 0% 10% 0%;
        gap: 24px;
    }
    
    &::before{
        content: '';
        width: calc(50% + 32px);
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url(${BackgroundEffect}) no-repeat center;
        background-size: cover;
        z-index: -2;
        opacity: 0.2;

        ${down("tablet")} {
            width: 100%;
            height: 50%;
            top: 40%;
        }
    }

    &::after{
        content: '';
        width: calc(50% + 32px);
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(-35deg, ${(props) => props.theme.colors.base.white} 50%, transparent 100%);
        z-index: -1;

        ${down("tablet")} {
            width: 100%;
            height: 50%;
            top: 50%;
            background: linear-gradient(35deg, ${(props) => props.theme.colors.base.white} 50%, transparent 100%);
        }
    }
`

const Texts = styled.aside`
    width: 50%;
    display: flex;
    align-items: flex-start;    
    flex-direction: column;
    gap: 16px;
    height: auto;

    ${down("tablet")} {
        width: 100%;
        padding: 0 5%;
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
                        Sua marca <strong>merece etiquetas</strong> de qualidade
                    </Title>
                    <Description
                        className="description"
                    >
                        Para docerias, restaurantes e pequenos negócios <strong>que querem se destacar</strong>
                    </Description>
                    <ContactButton 
                        children="Criar minha etiqueta"
                        onClick={() => alert("Button clicked")}
                    />
                </Texts>
                <Images>
                    <li className="i1">
                        <img 
                            src={Lacres} 
                            alt="rioflex-fabrica-de-etiquetas-adesivo-para-lacres" 
                            loading="eager" 
                        />
                    </li>
                    <li className="i2">
                        <img 
                            src={Pizza} 
                            alt="rioflex-fabrica-de-etiquetas-adesivo-para-pizza" 
                            loading="eager" 
                        />
                    </li>
                    <li className="i3">
                        <img 
                            src={Acai} 
                            alt="rioflex-fabrica-de-etiquetas-adesivo-para-acai" 
                            loading="eager" 
                        />
                    </li>
                    <li className="i4">
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