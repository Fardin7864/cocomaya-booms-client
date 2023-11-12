import ManueList from '../../../common/ManueList/ManueList';
import OrderSlider from '../../../common/OrderSlider/OrderSlider';
import SerctionTitle from '../../../common/SectionTitle/SerctionTitle';
import Numberbanner from '../NumberBanner/Numberbanner';
import Recommanded from '../Recommand/Recommanded';
import MainSlider from '../Slider/MainSlider';
import { Helmet } from 'react-helmet';
import Testimonial from '../Testimonial/Testimonial';
import FromManue from '../FromMenu/FromManue';
import bgImg from "../../../assets/home/chef-service.jpg"
import About from '../../../common/AboutUs/About';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Booms | Home</title>
            </Helmet>
            <MainSlider></MainSlider>
            <SerctionTitle subTitle="From 11:00am to 10:00pm" title="ORDER ONLINE"></SerctionTitle>
            <OrderSlider></OrderSlider>
            <About img={bgImg} title="coco boss" style="bg-white opacity-80" details={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa facilis illum sed debitis corporis voluptas est voluptates dolore dolor ut, dolores alias. Optio eaque, ut expedita earum quos beatae libero quae facere vitae in, est voluptate? Rem quo aperiam mollitia autem sunt natus ipsum. Cupiditate repellendus qui accusantium, eius consequuntur optio deleniti quis, cum atque, voluptatum commodi impedit ad accusamus hic necessitatibus neque similique fugit incidunt consequatur eum natus id?`}></About>
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