// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import './Slider.css';
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider({ slider }: any) {
    return (

        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mx-auto"
        >
            {
                slider.map((slider: any, index: any) =>
                    <SwiperSlide key={index}><img src={slider.img} className=" object-contain rounded-xl w-full" referrerPolicy="no-referrer" alt={slider.position} /></SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default Slider;

