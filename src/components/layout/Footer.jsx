import styled from "@emotion/styled"

// Layout
import Container from "@components/layout/Container"
import { down } from "@styles/media"

// Assets
import Logo from "@assets/logo/logo-rioflex.svg?react"
import AlephLogo from "@assets/logo/icon-aleph-desenvolvedor-web.svg?react"

const AllElements = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 2px solid ${(props) => props.theme.colors.primary.main};
`

const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.base.black};
    z-index: -1;
    `

const FooterContainer = styled(Container)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 2.5% 5%;
    gap: 42px;
    position: relative;
    
    ${down("tablet")} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 7.5% 5%;
        gap: 32px;
        text-align: center;
    }
    
    & > p {
        color: ${(props) => props.theme.colors.neutral[400]};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;

        & svg {
            width: 32px;
            fill: ${(props) => props.theme.colors.neutral[100]};
        }
    }

    & .footer-logo {
        width: 120px;
        height: auto;
        fill: ${(props) => props.theme.colors.neutral[100]};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        ${down("tablet")} {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
        }
    }

`


export default function Footer() {
    return (
        <>
            <AllElements>
                <Bg></Bg>
                <FooterContainer>
                    <p>© 2008 RioFlex. Todos os direitos reservados.</p>
                    <Logo className="footer-logo" />
                    <p>Desenvolvido por <a href="https://wa.me/+5524981411940"><AlephLogo /></a></p>
                </FooterContainer>    
            </AllElements>        
        </>
    )
}