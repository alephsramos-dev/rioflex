import styled from "@emotion/styled";

// Layout
import { down } from "@styles/media";

// Components
import Title from "@components/text/Title";
import Description from "@components/text/Description";
import BadgeIcon from "@components/badge/Icon";

// Assets
import BackgroundEffect from "@assets/pattern/background-effect.png";

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    min-height: 340px;
    padding: 18px;
    border-radius: 22px;
    background: ${(props) => props.theme.colors.neutral[200]};
    position: relative;
    z-index: 0;
    overflow: hidden;

    ${down("tablet")} {
        min-height: 300px;
        gap: 12px;
    }

    &::before {
        content: '';
        width: 60%;
        height: 60%;
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid red;
        background: url(${BackgroundEffect}) no-repeat center;
        background-size: cover;
        mix-blend-mode: lighten;
        opacity: 0.6;
        filter: brightness(2);
        z-index: -1;
    }

    & .description {
        color: ${(props) => props.theme.colors.neutral[900]};
        font-size: 18px;

        ${down("tablet")} {
            font-size: 16px;
        }
    }
`

const TopTexts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    & .icon {
        width: 44px;
        height: 44px;
        border-radius: 14px;
    }

    & .title {
        font-size: 22px;
        color: ${(props) => props.theme.colors.neutral[900]};
        font-weight: 400;

        ${down('tablet')} {
            font-size: 18px;
        }
    }
`

export default function ProcessCard({
    title = "default title",
    description = "default description",
    icon,
    bgColor = "rgb(33, 33, 33)",
    txtColor = "rgb(242, 242, 242)"
}) {
    return (
        <>
            <Content data-aos="fade-up">
                <TopTexts>
                    <BadgeIcon 
                        Icon={icon}
                        bgColor={bgColor}
                        txtColor={txtColor}
                        className="icon"
                    />
                    <Title 
                        children={title}
                        className="title"
                    />
                </TopTexts>
                <Description 
                    children={description}
                    className="description"
                />
            </Content>
        </>
    )
}