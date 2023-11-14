import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Slider = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => { 
        axios.get('/reviews.json')
        .then(res => setReviews(res.data))
     },[])
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-24">
        {
            reviews?.map(review => 
                <SwiperSlide key={review._id} className=' text-center lg:px-40 px-5'>
                    <p>{review.details}</p>
                    <h3 className=' my-5 text-2xl text-amber-700 font-semibold'>{review.name}</h3>
                </SwiperSlide>
                )
        }
      </Swiper>
    );
};

export default Slider;