// Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Styles Swiper
import "swiper/css";

// Data
import processData from "@/db/process"
import ProcessCard from "../card/Process";

export default function ProcessCarousel() {
    return (
        <>
            <Swiper
                spaceBetween={16}
                slidesPerView={1.05}
                loop={false}
                allowTouchMove={true}
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
                {
                    processData.map((process, i) => (
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
                    ))
                }
            </Swiper>
        </>
    )
}