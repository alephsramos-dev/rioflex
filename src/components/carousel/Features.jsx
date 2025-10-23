// Carousel
import { Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles Swiper
import "swiper/css";
import "swiper/css/free-mode";

// Data
import featuresData from "@/db/features"

// Icons
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import FeaturesCard from "../card/Features";

export default function FeaturesCarousel() {
    return (
        <>
            <Swiper 
                effect={'coverflow'}
                centeredSlides={true}
                modules={[Navigation, EffectCoverflow]}
                spaceBetween={16}
                navigation={{
                    prevEl: ".prev-button",
                    nextEl: ".next-button"
                }}
                slidesPerView={1.2}
                loop={false}
                coverflowEffect={{
                    rotate: 25,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                breakpoints={{
                    1080: {
                        centeredSlides: true,
                        slidesPerView: 4.2,
                        effect: 'cards'
                    }
                }}
            >
                {
                    featuresData.map((feature, i) => (
                        <SwiperSlide key={`feature-${feature.id}-${i}`}>
                            <FeaturesCard 
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                bgColor={feature.bgColor}
                                txtColor={feature.txtColor}
                                cardBgColor={feature.cardBgColor}
                            />
                        </SwiperSlide>
                    ))
                }

                <main className="control-content">
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