
const SerctionTitle = ({subTitle,title}) => {
    return (
        <div className=" max-w-7xl py-4 flex justify-center items-center text-center">
            <div>
            <p className=" text-orange-300 border-b-2 pb-3"><i>---{subTitle}---</i></p>
            <h4 className=" text-2xl font-medium uppercase">{title}</h4>
            </div>
        </div>
    );
};

export default SerctionTitle;