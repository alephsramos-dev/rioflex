// Carousel
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles Swiper
import "swiper/css";
import "swiper/css/free-mode";

// Assets
const modules = import.meta.glob('@assets/client/*.svg', {eager: true}) // Import all SVG files from the specified directory
const clientsBrand = Object.values(modules).map(module => module.default || module); // Extract the default export (URL) from each module

export default function RangeCarousel() {
    return (
        <>
            <Swiper
                modules={[Autoplay, FreeMode]} 
                spaceBetween={24}
                slidesPerView={3}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={2000}
                freeMode={true}
                loop={true}
                breakpoints={{
                    1080: {
                        slidesPerView: 4
                    }
                }}
            >
                {
                    clientsBrand.map((companyUrl, i) => (
                        <SwiperSlide key={i}>
                            <img 
                                src={companyUrl} 
                                alt={`logo-parceiro-rioflex- ${i + 1}`} 
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}