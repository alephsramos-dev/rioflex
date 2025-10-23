import styled from "@emotion/styled"

const TitleStyled = styled.h1`
    font-size: 42px;
    font-weight: 400;
    line-height: 1.1;
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