// Carousel
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles Swiper
import "swiper/css";
import "swiper/css/free-mode";

// Data
import processData from "@/db/process"
import ProcessCard from "../card/Process";

// Icons
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Description from "../text/Description";

export default function ProcessCarousel() {
    return (
        <>
            <Swiper 
                modules={[Navigation]}
                spaceBetween={12}
                navigation={{
                    prevEl: ".prev-button",
                    nextEl: ".next-button"
                }}
                slidesPerView={1.1}
                loop={false}
                breakpoints={{
                    1080: {
                        slidesPerView: 3
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
                            />
                        </SwiperSlide>
                    ))
                }

                <main className="control-content">
                    <Description
                        className="description"
                    >
                        A <strong>Rio Flex simplifica</strong> todo o processo para você
                    </Description>
                    <aside className="buttons">
                        <div className="prev-button">
                            <ArrowLeftIcon weight="regular"/>
                        </div>

                        <div className="next-button">
                            <ArrowRightIcon weight="regular"/>
                        </div>
                    </aside>
                </main>

            </Swiper>
        </>
    )
}