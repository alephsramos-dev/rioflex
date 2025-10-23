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
import IndicationCard from "@components/card/Indication"

// Data
import indicationData from "@/db/Indication"

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
    flex-direction: row;
    gap: 32px;

    ${down("tablet")} {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    & .title {
        flex: 1;
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
        }
    }
`

const Cards = styled.ol`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
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
                            Para quem a Rio Flex é indicada?
                        </Title>
                        <div
                            className="content"
                        >
                            <Description
                                className="description"
                            >
                                Para microempreendedores, pequenas empresas e projetos pessoais que precisam de etiquetas de qualidade.
                            </Description>
                            <ContactButton 
                                className="contact-button"
                                children="Criar minha etiqueta"
                                bgColor="rgb(252, 252, 252)"
                                colorSlide="rgb(242, 242, 242)"
                                colorLabel="rgb(254, 141, 34)"
                                colorCorner="rgb(200, 200, 200)"
                                colorDiamond="rgb(254, 141, 34)"
                            />
                        </div>
                    </Texts>
                    <Cards>
                        {
                            indicationData.map((indication, i) => (
                                <IndicationCard
                                    key={`${i} - ${indication.id}`}
                                    title={indication.title}
                                    description={indication.description}
                                    image={indication.image}
                                    top={
                                        i === 0 ? "20px" :
                                        i === 1 ? "40px" :
                                        i === 2 ? "60px" :
                                        i === 3 ? "80px" : 
                                        i === 4 ? "100px" : "100px"
                                    }
                                />
                            ))
                        }
                    </Cards>
                </IndicationContainer>    
            </AllElements>        
        </>
    )
}