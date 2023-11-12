import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css'
// import img1 from '../../../assets/'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AwesomeButton } from 'react-awesome-button';

const Recommanded = () => {
    const [items, setitems] = useState();
    useEffect(() => { 
        axios.get('/menu.json')
        .then(res => setitems(res.data))
     },[])

    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }


    return (
        <div className=' max-w-7xl overflow-hidden'>
        <Swiper {...params}>
         {items?.map((item) => (
        <div key={item._id} className=" my-20">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe.slice(0,70)}</p>
            </div>
            <div className=' my-4 flex justify-center'>
                <AwesomeButton type='primary'> Add To Cart</AwesomeButton>
            </div>
          </div>
        </div>
      ))}
      </Swiper>
        </div>
    );
};

export default Recommanded;