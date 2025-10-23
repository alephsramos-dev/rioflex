import styled from "@emotion/styled"

// Layout
import Container from "@components/layout/Container"
import { down } from "@styles/media"
import Title from "../../../components/text/Title"
import FeaturesCarousel from "../../../components/carousel/Features"

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

const FeaturesContainer = styled(Container)`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 5% 0%;
    gap: 62px;
    position: relative;

    & h1 {
        color: ${(props) => props.theme.colors.neutral[100]};
        text-align: center;
        width: 50%;

        ${down("tablet")} {
            font-size: 28px;
            width: 90%;
        }
    }
    
    ${down("tablet")} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 7.5% 0%;
        gap: 32px;
        text-align: center;
    }
`

const Carousel = styled.div`
    width: 100%;

    & .swiper {

        & .control-content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            padding-top: 38px;
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
            justify-content: center;
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

export default function Features() {
    return (
        <>
            <AllElements>
                <Bg></Bg>
                <FeaturesContainer>
                    <Title>
                        A <strong>Rio Flex se destaca</strong>, saiba por que nos escolher
                    </Title>
                    <Carousel>
                        <FeaturesCarousel />
                    </Carousel>
                </FeaturesContainer>    
            </AllElements>      
        </>
    )
}