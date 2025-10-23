import styled from "@emotion/styled"

const DescriptionStyled = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.3;
    color: ${props => props.theme.colors.neutral[600]};

    & strong {
        color: ${props => props.theme.colors.neutral[900]};
        font-weight: 400;
    }
`

export default function Description({
    children,
    className
}) {
    return (
        <>
            <DescriptionStyled className={className} data-aos="fade-up" data-aos-delay="200">{children}</DescriptionStyled>
        </>
    )
}