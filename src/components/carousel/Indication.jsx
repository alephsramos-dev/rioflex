import { useRef } from "react";
import styled from "@emotion/styled";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import indicationData from "@/db/Indication";
import IndicationCard from "@components/card/Indication";
import Description from "@components/text/Description";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { down } from "@styles/media";

const CarouselWrapper = styled.div`
    width: 100%;
    position: relative;

    .swiper {
        padding-bottom: 12px;
        position: relative;
    }

    .control-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 18px;
        gap: 12px;

        ${down("tablet")} {
            position: relative;
            justify-content: center;
            padding-top: 32px;
        }

        & .description {
            font-size: 18px;
            color: ${(props) => props.theme.colors.neutral[100]};

            & strong {
                color: ${(props) => props.theme.colors.base.white};
            }

            ${down("tablet")} {
                display: none;
            }
        }
    }

    .buttons {
        ${down("tablet")} {
            display: none;
        }
    }

    .buttons-desktop {
        position: absolute;
        top: 292px;
        width: calc(100% + 40px);
        left: -20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        pointer-events: none;
        z-index: 10;

        ${down("tablet")} {
            display: none;
        }

        .prev-button,
        .next-button {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 22px;
            color: ${(props) => props.theme.colors.primary.main};
            background-color: ${(props) => props.theme.colors.base.white};
            transition: transform 200ms ease;
            pointer-events: auto;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

            &:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
            }
        }
    }

    .buttons-mobile {
        display: none;

        ${down("tablet")} {
            display: flex;
            position: absolute;
            top: 20%;
            transform: translateY(-50%);
            width: 100vw;
            left: 50%;
            margin-left: -50vw;
            align-items: center;
            justify-content: space-between;
            pointer-events: none;
            z-index: 10;
            padding: 0 10px;
        }

        .prev-button,
        .next-button {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 22px;
            color: ${(props) => props.theme.colors.primary.main};
            background-color: ${(props) => props.theme.colors.base.white};
            transition: transform 200ms ease;
            pointer-events: auto;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

            &:hover {
                transform: scale(1.05);
            }
        }
    }
`;

export default function IndicationCarousel() {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    return (
        <CarouselWrapper>
            <aside className="buttons-desktop">
                <div
                    className="prev-button indication-prev-button"
                    ref={prevButtonRef}
                    aria-label="Ver indicações anteriores"
                >
                    <ArrowLeftIcon size={20} weight="regular" />
                </div>
                <div
                    className="next-button indication-next-button"
                    ref={nextButtonRef}
                    aria-label="Ver próximas indicações"
                >
                    <ArrowRightIcon size={20} weight="regular" />
                </div>
            </aside>
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                    prevEl: prevButtonRef.current,
                    nextEl: nextButtonRef.current
                }}
                onBeforeInit={(swiper) => {
                    if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation !== "boolean"
                    ) {
                        swiper.params.navigation.prevEl = prevButtonRef.current;
                        swiper.params.navigation.nextEl = nextButtonRef.current;
                    }
                }}
                onSwiper={(swiper) => {
                    if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation !== "boolean" &&
                        swiper.navigation &&
                        prevButtonRef.current &&
                        nextButtonRef.current
                    ) {
                        swiper.params.navigation.prevEl = prevButtonRef.current;
                        swiper.params.navigation.nextEl = nextButtonRef.current;
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                loop={false}
                breakpoints={{
                    768: {
                        slidesPerView: 1.1
                    },
                    1080: {
                        slidesPerView: 1.3,
                        spaceBetween: 28
                    }
                }}
            >
                {indicationData.map((indication) => (
                    <SwiperSlide key={`indication-${indication.id}`}>
                        <IndicationCard
                            title={indication.title}
                            description={indication.description}
                            image={indication.image}
                            items={indication.items}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <aside className="buttons-mobile">
                <div
                    className="prev-button indication-prev-button-mobile"
                    onClick={() => prevButtonRef.current?.click()}
                    aria-label="Ver indicações anteriores"
                >
                    <ArrowLeftIcon size={20} weight="regular" />
                </div>
                <div
                    className="next-button indication-next-button-mobile"
                    onClick={() => nextButtonRef.current?.click()}
                    aria-label="Ver próximas indicações"
                >
                    <ArrowRightIcon size={20} weight="regular" />
                </div>
            </aside>
            <main className="control-content">
                <Description className="description">
                    Etiquetas certas para cada segmento.
                </Description>
            </main>
        </CarouselWrapper>
    );
}
