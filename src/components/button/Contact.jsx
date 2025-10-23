import styled from "@emotion/styled"

const CornerTR = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    transition: all 500ms ease-in-out;
    background-color: ${({ colorCorner, theme }) => colorCorner || theme.colors.secoundary.dark};
    border-radius: 0.25rem;
    z-index: 2;
`

const CornerBL = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    transition: all 500ms ease-in-out;
    background-color: ${({ colorCorner, theme }) => colorCorner || theme.colors.secoundary.dark};
    border-radius: 0.25rem;
    transform: rotate(180deg);
    z-index: 2;
`

const Diamond = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    width: 1.25rem;
    height: 1.25rem;
    transform: translate(50%, -50%) rotate(45deg);
    background: ${({ colorDiamond, theme }) => colorDiamond || theme.colors.base.white};
`

const Slide = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 500ms ease-in-out 200ms;
    transform: translateX(-100%);
    background-color: ${({ colorSlide, theme }) => colorSlide || theme.colors.primary.dark};
    border-radius: 0.375rem;
    z-index: 1;
`

const Label = styled.span`
    position: relative;
    width: 100%;
    text-align: left;
    color: ${({ colorLabel, theme }) => colorLabel || theme.colors.base.white};
    font-weight: 400;
    transition: color 200ms ease-in-out;
    z-index: 3;
`

const ButtonRoot = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    overflow: hidden;
    font-weight: 500;
    transition: all 200ms ease-in-out;
    background-color: ${({ bgColor, theme }) => bgColor || theme.colors.primary.main};
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;

    &:hover > [data-corner="tr"] {
        margin-right: -1rem;
        margin-top: -1rem;
    }
    &:hover > [data-corner="bl"] {
        margin-left: -1rem;
        margin-bottom: -1rem;
    }
    &:hover > [data-slide="bg"] {
        transform: translateX(0);
    }
`

export default function ContactButton({
    children = "Criar minha etiqueta",
    onClick = () => alert('botão não configurado'),
    className,
    bgColor,
    colorSlide,
    colorLabel,
    colorCorner,
    colorDiamond,
}) {
    return (
        <ButtonRoot onClick={onClick} className={className} bgColor={bgColor}>
            <CornerTR data-corner="tr" colorCorner={colorCorner}>
                <Diamond colorDiamond={colorDiamond} />
            </CornerTR>
            <CornerBL data-corner="bl" colorCorner={colorCorner}>
                <Diamond colorDiamond={colorDiamond} />
            </CornerBL>
            <Slide data-slide="bg" colorSlide={colorSlide} />
            <Label colorLabel={colorLabel}>{children}</Label>
        </ButtonRoot>
    )
}