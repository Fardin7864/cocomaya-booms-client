import ManueList from '../../../common/ManueList/ManueList';
import OrderSlider from '../../../common/OrderSlider/OrderSlider';
import SerctionTitle from '../../../common/SectionTitle/SerctionTitle';
import About from '../AboutUs/About';
import Numberbanner from '../NumberBanner/Numberbanner';
import Recommanded from '../Recommand/Recommanded';
import MainSlider from '../Slider/MainSlider';
import { Helmet } from 'react-helmet';
import Testimonial from '../Testimonial/Testimonial';
import FromManue from '../FromMenu/FromManue';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Booms | Home</title>
            </Helmet>
            <MainSlider></MainSlider>
            <SerctionTitle subTitle="From 11:00am to 10:00pm" title="ORDER ONLINE"></SerctionTitle>
            <OrderSlider></OrderSlider>
            <About></About>
            <SerctionTitle
            subTitle="Check It Out"
            title="FROM OUR MENU"
            ></SerctionTitle>
            <ManueList></ManueList>  
            <Numberbanner></Numberbanner>
            <SerctionTitle subTitle="Should Try" title="CHEF RECOMMENDS"></SerctionTitle> 
            <Recommanded></Recommanded>
            <SerctionTitle subTitle="What Our Clients Say" title="TESTIMONIALS"></SerctionTitle>
            <FromManue></FromManue>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;