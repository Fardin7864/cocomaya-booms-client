import { useLoaderData } from "react-router-dom";
import SerctionTitle from "../../../common/SectionTitle/SerctionTitle";
import MenuForm from "../MenuForm/MenuForm";

const Addmenu = () => {
    const item = useLoaderData();
    // console.log(item.data)
    return (
        <>
        <SerctionTitle 
        subTitle={"Menu Form"} 
        title={"Add to Menu"}></SerctionTitle>
        <MenuForm item={item?.data}></MenuForm>
        </>
    );
};

export default Addmenu;