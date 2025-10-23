import styled from "@emotion/styled";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 18px;
    padding: 4px;
    font-size: 24px;
    width: 48px;
    height: 48px;
    background: ${({ bgColor }) => bgColor || '#000'};
    color: ${({ txtColor }) => txtColor || '#fff'};

    & svg {
        color: ${({ txtColor }) => txtColor || '#fff'};
        fill: ${({ txtColor }) => txtColor || '#fff'};
    }
`

export default function BadgeIcon({
    Icon = null,
    className,
    bgColor,
    txtColor
}) {
    return (
        <>
            <Content 
                className={className} 
                bgColor={bgColor} 
                txtColor={txtColor}
                data-aos="zoom-in"
            >
                {Icon && <Icon weight="light" color={txtColor} data-aos="zoom-out" data-aos-delay="300"/>}
            </Content>
        </>
    )
}