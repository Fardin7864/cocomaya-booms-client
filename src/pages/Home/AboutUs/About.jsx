import bgImg from "../../../assets/home/chef-service.jpg"


const About = () => {
    return (
        <div className=" my-10 bg-no-repeat p-40 bg-fixed" style={{backgroundImage: `url(${bgImg})`}}>
            <div className=" p-20 text-black bg-white">
                <h1 className=" my-5 uppercase text-3xl font-cinzel text-center">coco Boss</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed non hic dolor nemo veniam eaque earum facilis quas voluptates sequi aliquam culpa adipisci excepturi iure expedita ipsam voluptas eum ullam provident libero perferendis harum, accusamus quam ipsa! In mollitia hic iusto laudantium tempore.</p>
            </div>
        </div>
    );
};

export default About;