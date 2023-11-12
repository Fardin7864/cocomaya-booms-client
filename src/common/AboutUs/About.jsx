
const About = ({img, style, title, details}) => {
    return (
        <div className= {`my-10 bg-no-repeat p-40 bg-fixed`} style={{backgroundImage: `url(${img})`}}>
            <div className={ `p-20 text-black ${style}`}>
                <h1 className=" my-5 uppercase text-3xl font-cinzel text-center">{title}</h1>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default About;