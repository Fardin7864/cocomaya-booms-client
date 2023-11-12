import bgimg from '../../../assets/home/featured.jpg'
import SerctionTitle from '../../../common/SectionTitle/SerctionTitle';

const FromManue = () => {
    return (
        <div className='hero text-white bg-cover' style={{backgroundImage: `url('${bgimg}')`}}>
              <div className="hero-overlay bg-opacity-40"></div>
            <div className=' py-10'>
            <SerctionTitle subTitle='Check it out' title='FROM OUR MENU'></SerctionTitle>
            <div className=' flex w-3/4 mx-auto gap-10 py-24'>
                <img src={bgimg} alt="" className='w-[400px]' />
                <div className=' flex flex-col gap-3'>
                <h4 className=' text-lg font-medium'>March 20, 2023 <br />WHERE CAN I GET SOME?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate dolore soluta. Architecto eius amet officia, corporis aperiam exercitationem, harum officiis perspiciatis adipisci praesentium iste aspernatur. Distinctio velit impedit similique. Maiores et sequi deserunt totam eius officia blanditiis numquam a.</p>
                </div>
            </div>
            </div>

        </div>
    );
};

export default FromManue;