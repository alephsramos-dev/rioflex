import { useRef } from "react";
import styled from "@emotion/styled";
// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Styles Swiper
import "swiper/css";
import "swiper/css/navigation";

// Data
import processData from "@/db/process"
import ProcessCard from "../card/Process";
import { down } from "@styles/media";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

const CarouselWrapper = styled.div`
    width: 100%;
    position: relative;

    .buttons-mobile {
        display: none;

        ${down("tablet")} {
            display: flex;
            position: absolute;
            left: 50%;
            bottom: -48px;
            transform: translateX(-50%);
            gap: 12px;
            pointer-events: none;
            z-index: 5;
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

export default function ProcessCarousel() {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    return (
        <CarouselWrapper>
            <aside className="buttons-mobile">
                <div
                    className="prev-button"
                    ref={prevButtonRef}
                    aria-label="Voltar etapa"
                >
                    <ArrowLeftIcon size={20} weight="regular" />
                </div>
                <div
                    className="next-button"
                    ref={nextButtonRef}
                    aria-label="Avançar etapa"
                >
                    <ArrowRightIcon size={20} weight="regular" />
                </div>
            </aside>
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1.05}
                loop={false}
                allowTouchMove={true}
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
                breakpoints={{
                    768: {
                        slidesPerView: 1.4
                    },
                    1080: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
            >
                {processData.map((process, i) => (
                    <SwiperSlide key={`process-${process.id}-${i}`}>
                        <ProcessCard
                            title={process.title}
                            description={process.description}
                            icon={process.icon}
                            bgColor={process.bgColor}
                            txtColor={process.txtColor}
                            step={process.step}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </CarouselWrapper>
    )
}