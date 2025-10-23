import styled from "@emotion/styled";
import BadgeIcon from "../badge/Icon";
import Title from "../text/Title";
import Description from "../text/Description";

import { down } from "@styles/media";

import BackgroundEffect from "@assets/pattern/background-effect.png";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 360px;
    border-radius: 22px;
    width: 100%;
    padding: 24px;
    background-color: ${({cardBgColor}) => cardBgColor || 'red'};

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background: url(${BackgroundEffect}) no-repeat center;
        background-size: cover;
        opacity: 0.4;
        mix-blend-mode: overlay;
    }
`

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 12px;

    & .title {
        font-size: 32px;
        width: 100%;
        text-align: left;
        color: ${(props) => props.theme.colors.neutral[100]};

        ${down("tablet")} {
            font-size: 28px;
        }
    }

    & .description {
        font-size: 18px;
        width: 100%;
        color: ${(props) => props.theme.colors.neutral[300]};

        ${down("tablet")} {
            font-size: 16px;
        }
    }
`

export default function FeaturesCard({
    title = "default title",
    description = "default description",
    icon,
    cardBgColor,
    bgColor,
    txtColor,
}) {
    return (
        <>
            <Content cardBgColor={cardBgColor}>
                <BadgeIcon 
                    Icon={icon}
                    bgColor={bgColor}
                    txtColor={txtColor}
                    className="icon"
                />
                <Infos>
                    <Title 
                        children={title}
                        className="title"
                    />
                    <Description 
                        children={description}
                        className="description"
                    />
                </Infos>
            </Content>
        </>
    )
}