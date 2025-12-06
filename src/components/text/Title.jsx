import styled from "@emotion/styled"

const TitleStyled = styled.h1`
    font-size: 48px;
    font-weight: 500;
    line-height: 1;
    color: ${props => props.theme.colors.neutral[800]};

    & strong {
        color: ${props => props.theme.colors.primary.main};
        font-weight: 400;
    }
`

export default function Title({
    children,
    className
}) {
    return (
        <>
            <TitleStyled className={className} data-aos="fade-up">{children}</TitleStyled>
        </>
    )
}