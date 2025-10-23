import styled from "@emotion/styled";

// Utils
import { rgba } from "polished";

// Layout
import Container from "@components/layout/Container";
import { down } from "@styles/media"

// Components
import Description from "@components/text/Description";
import RangeCarousel from "@components/carousel/Range";

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

const RangeContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    background: ${(props) => props.theme.colors.neutral[900]};
    padding: 1.5% 5%;
    gap: 32px;

    ${down("tablet")} {
        flex-direction: column;
        padding: 7.5% 5%;
    }

    & .description {
        width: 40%;
        color: ${(props) => props.theme.colors.neutral[400]};
        font-size: 20px;

        ${down("tablet")} {
            width: 100%;
            font-size: 16px;
        }

        & strong {
            color: ${(props) => props.theme.colors.neutral[100]};
        }
    }
`

const Carousel = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    ${down("tablet")} {
        width: 100%;
    }

    &::before{
        content: "";
        z-index: 2;
        width: 140px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(90deg, ${(props) => props.theme.colors.neutral[900]}, ${(props) => rgba(props.theme.colors.neutral[900], 0)});

        ${down("tablet")} {
            width: 80px;
        }
    }

    &::after{
        content: "";
        z-index: 2;
        width: 140px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        background: linear-gradient(90deg, ${(props) => rgba(props.theme.colors.neutral[900], 0)}, ${(props) => props.theme.colors.neutral[900]});

        ${down("tablet")} {
            width: 80px;
        }
    }

    & .swiper {
        width: 100%;
        height: auto;

        & .swiper-slide {
            width: auto;   
            height: auto;
        }
    }
`

export default function Range() {
    return (
        <>
            <AllElements>
                <Bg></Bg>
                <RangeContainer>
                    <Description
                        className="description"
                    >
                        As empresas conhecem, por isso elas confiam, a <strong>Rio Flex é o destaque em etiquetas</strong> 
                    </Description>
                    <Carousel data-aos="zoom-in">
                        <RangeCarousel />
                    </Carousel>
                </RangeContainer>
            </AllElements>
        </>
    )
}