import styled from "@emotion/styled";

// Layout
import { down } from "@styles/media";

// Components
import Title from "@components/text/Title";
import Description from "@components/text/Description";
import ContactButton from "@components/button/Contact";

// Assets
import BackgroundEffect from "@assets/pattern/background-effect.png";

const AllElements = styled.div`
    width: 100%;
    position: relative;
    border-radius: 32px;
    overflow: hidden;

    ${down("tablet")} {
        top: ${({ top }) => top || "0px"};
    }
`

const Bg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.neutral[100]};

    &::before {
        content: '';
        width: 400px;
        height: 400px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(${BackgroundEffect}) no-repeat center;
        background-size: cover;
        mix-blend-mode: luminosity;
        rotate: 90deg;
        filter: grayscale(100%) contrast(200%) brightness(100%);
        opacity: 0.1;
        z-index: 1;
    }

`

const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 12px;
    padding: 12px;
    border-radius: 26px;
    position: relative;
    z-index: 1;
    height: 560px;

    ${down("tablet")} {
        flex-direction: column;
        height: auto;
        gap: 24px;
    }

    & .asset {
        width: 50%;
        height: 100%;

        ${down("tablet")} {
            width: 100%;
            height: 240px;
        }

        & .image {
            width: 100%;
            height: 100%;
            border-radius: 22px;
            object-fit: cover;
            object-position: center;
        }
    }

    & .container {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        gap: 16px;
        padding: 22px;

        ${down("tablet")} {
            width: 100%;
            align-items: flex-start;
            text-align: left;
            height: auto;
            padding: 12px 6px;
            gap: 12px;
        }
   
        & .title {
            font-size: 36px;
            color: ${(props) => props.theme.colors.base.black};
            margin: 0px 8px;

            ${down("tablet")} {
                font-size: 28px;
                margin: 0px;
            }
        }
    
        & .description {
            width: 100%;
            font-size: 18px;
            color: ${(props) => props.theme.colors.neutral[600]};
            margin: -8px 8px 8px 8px;

            ${down("tablet")} {
                font-size: 16px;
                margin: 0px;
            }
        }
     
        & .info {
            padding: 0 12px;
            
            ${down("tablet")} {
                padding: 0px;
            }
    
            & > span {
                font-size: 16px;
                font-weight: 400;
            }
        }

        & .cta-button {
            margin-top: 8px;
            margin-left: 12px;

            ${down("tablet")} {
                display: none;
            }
        }
    }



`

const List = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 12px;
    margin-top: -16px;
    gap: 8px;

    ${down("tablet")} {
        padding: 0px;
        margin-top: 0px;
    }

    & li {
        font-size: 14px;
        font-weight: 300;
        background-color: ${(props) => props.theme.colors.neutral[900]};
        color: ${(props) => props.theme.colors.base.white};
        padding: 6px 12px;
        border-radius: 99px;

        ${down("tablet")} {
            font-size: 12px;
        }
    }

`

export default function IndicationCard({
    title = "default title",
    description = "default description",
    image,
    items = [],
    top
}) {
    return (
        <>
            <AllElements top={top} data-aos="fade-up">
                <Bg></Bg>
                <Content>
                    <aside className="asset">
                        <img
                            className="image"
                            src={image}
                            alt={title}
                            loading="lazy"
                            title={title}
                        />
                    </aside>
                    <main className="container">
                        <Title
                            className="title"
                            children={title}
                        />
                        <Description
                            className="description"
                            children={description}
                        />
                        <div className="info">
                            <span>Ideal para:</span>
                        </div>
                        {items.length > 0 && (
                            <List
                                className="list"
                            >
                                {items.map((item, index) => (
                                    <li
                                        key={`${item.name}-${index}`}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </List>
                        )}
                        <ContactButton
                            className="cta-button"
                            children="Pedir orçamento"
                            bgColor="rgb(254, 141, 34)"
                            colorSlide="rgb(234, 121, 14)"
                            colorLabel="rgb(255, 255, 255)"
                            colorCorner="rgb(200, 100, 20)"
                            colorDiamond="rgb(255, 255, 255)"
                        />
                    </main>
                </Content>
            </AllElements>
        </>
    )
}