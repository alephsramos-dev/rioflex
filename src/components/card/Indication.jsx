import styled from "@emotion/styled";

// Layout
import { down } from "@styles/media";

// Components
import Title from "@components/text/Title";
import Description from "@components/text/Description";

// Assets
import BackgroundEffect from "@assets/pattern/background-effect.png";

const AllElements = styled.div`
    width: calc(33.33% - 6px);
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    
    ${down("tablet")} {
        top: ${({ top }) => top || "0px"};  
        width: 100%;
        position: sticky;
    }
`

const Bg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.neutral[100]};

    &::before {
        content: '';
        width: 200px;
        height: 200px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(${BackgroundEffect}) no-repeat center;
        background-size: cover;
        mix-blend-mode: luminosity;
        rotate: 90deg;
        filter: grayscale(100%) contrast(200%) brightness(100%);
        opacity: 0.1;
        z-index: 1;
    }

`

const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    padding: 12px;
    border-radius: 18px;
    position: relative;
    z-index: 1;

    & .image {
        width: 100%;
        height: 240px;
        border-radius: 12px;
        object-fit: cover;
        object-position: center;
    }

    & .title {
        font-size: 28px;
        color: ${(props) => props.theme.colors.base.black};
        margin: 0px 8px;
    }

    & .description {
        width: 100%;
        font-size: 16px;
        color: ${(props) => props.theme.colors.neutral[600]};
        margin: -8px 8px 8px 8px;
    }
`

export default function IndicationCard({
    title = "default title",
    description = "default description",
    image,
    top
}) {
    return (
        <>
            <AllElements top={top} data-aos="fade-up">
                <Bg></Bg>
                <Content>
                    <img 
                        className="image" 
                        src={image} 
                        alt={title} 
                        loading="lazy" 
                        title={title} 
                    />
                    <Title
                        className="title" 
                        children={title}
                    />
                    <Description 
                        className="description"
                        children={description}
                    />
                </Content>
            </AllElements>
        </>
    )
}