import OrderSlider from '../../../common/OrderSlider/OrderSlider';
import SerctionTitle from '../../../common/SectionTitle/SerctionTitle';
import MainSlider from '../Slider/MainSlider';
import { Helmet } from 'react-helmet';
import About from './AboutUs/About';

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
        </div>
    );
};

export default Home;