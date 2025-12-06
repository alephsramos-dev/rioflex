import styled from "@emotion/styled";

// Layout
import { down } from "@styles/media";

// Components
import Title from "@components/text/Title";
import Description from "@components/text/Description";
import BadgeIcon from "@components/badge/Icon";

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    min-height: 280px;
    padding: 24px;
    border-radius: 24px;

    ${down("tablet")} {
        min-height: 260px;
        gap: 14px;
        padding: 20px;
    }

    & .description {
        color: ${(props) => props.theme.colors.neutral[700]};
        font-size: 18px;
        line-height: 1.5;
        text-align: center;

        ${down("tablet")} {
            font-size: 16px;
        }
    }
`

const TopTexts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px;

    @keyframes fillBackground {
        0% {
            background-color: #ffffff;
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            background-color: ${(props) => props.bgColor || '#ffffff'};
            transform: scale(1);
        }
    }

    @keyframes fillIcon {
        0% {
            fill: ${(props) => props.theme.colors.neutral[800]};
        }
        100% {
            fill: #ffffff;
        }
    }

    & .icon {
        width: 96px;
        height: 96px;
        border-radius: 999px;
        border: 2px solid ${(props) => props.theme.colors.neutral[600]};
        background-color: #ffffff;
        transition: all 0.3s ease;
        animation: ${(props) => props.isLast ? 'fillBackground 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none'};
        animation-delay: ${(props) => props.isLast ? '3s' : '0s'};

        ${down("tablet")} {
            border-width: ${(props) => {
        if (props.step === '1') return '2px';
        if (props.step === '2') return '4px';
        if (props.step === '3') return '6px';
        return '2px';
    }};
            border-color: ${(props) => {
        if (props.step === '1') return props.theme.colors.primary.main;
        if (props.step === '2') return props.theme.colors.neutral[900];
        if (props.step === '3') return 'rgb(24, 179, 90)';
        return props.theme.colors.neutral[600];
    }};
        }

        & svg {
            width: 42px;
            height: 42px;
            fill: ${(props) => props.theme.colors.neutral[800]};
            transition: fill 0.6s ease;
            animation: ${(props) => props.isLast ? 'fillIcon 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none'};
            animation-delay: ${(props) => props.isLast ? '3.2s' : '0s'};
        }
    }

    & .title {
        font-size: 24px;
        color: ${(props) => props.theme.colors.neutral[800]};
        font-weight: 500;
        text-align: center;

        ${down('tablet')} {
            font-size: 20px;
        }
    }
`

export default function ProcessCard({
    title = "default title",
    description = "default description",
    icon,
    bgColor = "rgb(255, 255, 255)",
    txtColor = "rgb(0, 0, 0)",
    step = "1"
}) {
    const isLast = step === "3";

    return (
        <>
            <Content data-aos="fade-up">
                <TopTexts step={step} isLast={isLast} bgColor={bgColor}>
                    <BadgeIcon
                        Icon={icon}
                        bgColor={"transparent"}
                        txtColor={txtColor}
                        className="icon"
                    />
                    <div>
                        <Title
                            children={title}
                            className="title"
                        />
                    </div>
                </TopTexts>
                <Description className="description">
                    {description}
                </Description>
            </Content>
        </>
    )
}