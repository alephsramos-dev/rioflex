import styled from "@emotion/styled"

// Layout
import { down } from "@styles/media"
import Container from "@components/layout/Container"

// Components
import Title from "@components/text/Title"
import Description from "@components/text/Description"
import ContactButton from "@components/button/Contact"
import ProcessCarousel from "@components/carousel/Process";


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
`

const ProcessContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 5%;
    gap: 52px;
    position: relative;

    ${down("tablet")} {
        padding: 7.5% 5%;
        gap: 42px;
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

const Carousel = styled.div`
    width: 100%;

    & .swiper {

        & .control-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            padding-top: 18px;
            gap: 12px;

            & .description {
                font-size: 18px;
                color: ${(props) => props.theme.colors.neutral[300]};

                & strong {
                    color: ${(props) => props.theme.colors.neutral[100]};
                }

                ${down("tablet")} {
                    font-size: 14px;
                }
            }
        }

        & .buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-direction: row;
            gap: 8px;

            .prev-button,
            .next-button {
                font-size: 22px;
                width: 44px;
                height: 44px;
                border-radius: 16px;
                display: flex;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                color: ${(props) => props.theme.colors.neutral[800]};
                background-color: ${(props) => props.theme.colors.neutral[200]};
                transition: all 200ms ease;

                &:hover {
                    transform: scale(0.94);
                }
            }
        }
    }
`

export default function Process() {
    return (
        <>
            <AllElements>
                <Bg></Bg>
                <ProcessContainer>
                    <Texts>
                        <Title
                            className="title"
                        >
                            Relaxa, seu processo será simples!
                        </Title>
                        <div
                            className="content"
                        >
                            <Description
                                className="description"
                            >
                                Em apenas <strong>3 etapas você consegue conquistar</strong> as etiquetas para a sua empresa
                            </Description>
                            <ContactButton 
                                className="contact-button"
                                children="Criar minha etiqueta"
                                bgColor="rgb(252, 252, 252)"
                                colorSlide="rgb(222, 222, 222)"
                                colorLabel="rgb(33, 33, 33)"
                                colorCorner="rgb(200, 200, 200)"
                                colorDiamond="rgb(33, 33, 33)"
                            />  
                        </div>
                    </Texts>
                    <Carousel>
                        <ProcessCarousel />
                    </Carousel>
                </ProcessContainer>    
            </AllElements>      
        </>
    )
}