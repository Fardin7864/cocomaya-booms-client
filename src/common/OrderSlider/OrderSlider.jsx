import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'

const OrderSlider = () => {
    return (
        <div className=''>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-20 mt-10"
        >
          <SwiperSlide><img src={slider1} alt="" /> <h3 className=' uppercase text-xl text-center text-white font-cinzel -mt-12'>Salad</h3></SwiperSlide>
          <SwiperSlide><img src={slider2} alt="" /><h3 className=' uppercase text-xl text-center text-white font-cinzel -mt-12'>Pizza</h3></SwiperSlide>
          <SwiperSlide><img src={slider3} alt="" /><h3 className=' uppercase text-xl text-center text-white font-cinzel -mt-12'>supe</h3></SwiperSlide>
          <SwiperSlide><img src={slider4} alt="" /><h3 className=' uppercase text-xl text-center text-white font-cinzel -mt-12'>cake</h3></SwiperSlide>
        </Swiper>
      </div>
    );
};

export default OrderSlider;