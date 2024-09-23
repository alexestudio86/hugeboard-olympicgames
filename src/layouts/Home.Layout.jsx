// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import slide01 from '../assets/slide_01.jpg'

export function HomeLayout() {
  return (
    <Swiper
     navigation={true}
     className="mySwiper"
     style={ {height:'90vh'} }
    >
        <SwiperSlide>
            <img src={slide01} alt="slide01" style={ {width: '100%', height: 'auto', objectFit: 'over' } } />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}
