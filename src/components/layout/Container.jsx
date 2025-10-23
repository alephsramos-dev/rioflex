import styled from "@emotion/styled";

const StyledContainer = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    left: auto;
    top: auto;
`

export default function Container({
    children,
    className
}) {
    return (
        <>
            <StyledContainer className={className}>
                {children}
            </StyledContainer>
        </>
    )
}