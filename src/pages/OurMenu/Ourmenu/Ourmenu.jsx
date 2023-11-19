import Pageheader from "../../../common/PageHeader/Pageheader";
import headerBg from "../../../assets/menu/banner3.jpg";
import SerctionTitle from "../../../common/SectionTitle/SerctionTitle";
import useMenu from "../../../hooks/useMenu/useMenu";
import Item from "../../../common/Item/Item";
import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import bgImg from "../../../assets/home/chef-service.jpg"
import About from "../../../common/AboutUs/About";


const Ourmenu = () => {
  const [menu] = useMenu();
  const [isShow, setisShow] = useState({
      offered: false,
      dessert: false,
      pizza: false,
      soup: false,
      drinks: false,
    });
  const category = {
    offered: menu?.filter((food) => food.category === "offered") || [],
    dessert: menu?.filter((food) => food.category === "dessert") || [],
    pizza: menu?.filter((food) => food.category === "pizza") || [],
    soup: menu?.filter((food) => food.category === "soup") || [],
    drinks: menu?.filter((food) => food.category === "drinks") || [],
  };
  const handleCategory = (category) => {
    setisShow((prevShows) => ({
      ...prevShows,
      [category]: !prevShows[category],
    }));
  };
//   console.log(category.offered)
  return (
    <>
      <Pageheader
        img={headerBg}
        title="Our menu"
        details="Would you like to try a dish?"
      ></Pageheader>
      <SerctionTitle
        subTitle="Don't miss"
        title="TODAY'S OFFER"
      ></SerctionTitle>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-10 my-12">
        {isShow.offered ?
           category.offered?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))
          : category.offered?.slice(0, 4)
              ?.map((item) => <Item key={item._id} item={item}></Item>)}
      </div>
      <div className=" flex justify-center my-10">
        {category.offered?.length > 4 ? (
          <AwesomeButton onPress={() => handleCategory("offered")} type="primary">
            {!isShow.offered ? "View More" : "View Less"}
          </AwesomeButton>
        ) : (
          ""
        )}
      </div>
      {/* Dessert section */}
      <About img={bgImg} title="DESSERTS" style="bg-black bg-opacity-70 text-white" details={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa facilis illum sed debitis corporis voluptas est voluptates dolore dolor ut, dolores alias. Optio eaque, ut expedita earum quos beatae libero quae facere vitae in, est voluptate? Rem quo aperiam mollitia autem sunt natus ipsum. Cupiditate repellendus qui accusantium, eius consequuntur optio deleniti quis, cum atque, voluptatum commodi impedit ad accusamus hic necessitatibus neque similique fugit incidunt consequatur eum natus id?`}></About>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-10 my-12">
        {isShow.dessert ?
           category.dessert?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))
          : category.dessert?.slice(0, 4)
              ?.map((item) => <Item key={item._id} item={item}></Item>)}
      </div>
      <div className=" flex justify-center my-10">
        {category.dessert?.length > 4 ? (
          <AwesomeButton onPress={() => handleCategory("dessert")} type="primary">
            {!isShow.dessert ? "View More" : "View Less"}
          </AwesomeButton>
        ) : (
          ""
        )}
      </div>

      {/* Pizza Section */}
      <About img={bgImg} title="pizza" style="bg-black bg-opacity-70 text-white" details={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa facilis illum sed debitis corporis voluptas est voluptates dolore dolor ut, dolores alias. Optio eaque, ut expedita earum quos beatae libero quae facere vitae in, est voluptate? Rem quo aperiam mollitia autem sunt natus ipsum. Cupiditate repellendus qui accusantium, eius consequuntur optio deleniti quis, cum atque, voluptatum commodi impedit ad accusamus hic necessitatibus neque similique fugit incidunt consequatur eum natus id?`}></About>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-10 my-12">
        {isShow.pizza ?
           category.pizza?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))
          : category.pizza?.slice(0, 4)
              ?.map((item) => <Item key={item._id} item={item}></Item>)}
      </div>
      <div className=" flex justify-center my-10">
        {category.pizza?.length > 4 ? (
          <AwesomeButton onPress={() => handleCategory("pizza")} type="primary">
            {!isShow.pizza ? "View More" : "View Less"}
          </AwesomeButton>
        ) : (
          ""
        )}
      </div>

      {/* Soups */}
      <About img={bgImg} title="soup" style="bg-black bg-opacity-70 text-white" details={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa facilis illum sed debitis corporis voluptas est voluptates dolore dolor ut, dolores alias. Optio eaque, ut expedita earum quos beatae libero quae facere vitae in, est voluptate? Rem quo aperiam mollitia autem sunt natus ipsum. Cupiditate repellendus qui accusantium, eius consequuntur optio deleniti quis, cum atque, voluptatum commodi impedit ad accusamus hic necessitatibus neque similique fugit incidunt consequatur eum natus id?`}></About>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-10 my-12">
        {isShow.soup ?
           category.soup?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))
          : category.soup?.slice(0, 4)
              ?.map((item) => <Item key={item._id} item={item}></Item>)}
      </div>
      <div className=" flex justify-center my-10">
        {category.soup?.length > 4 ? (
          <AwesomeButton onPress={() => handleCategory("soup")} type="primary">
            {!isShow.soup ? "View More" : "View Less"}
          </AwesomeButton>
        ) : (
          ""
        )}
      </div>

      {/* Drinks section */}
      <About img={bgImg} title="drinks" style="bg-black bg-opacity-70 text-white" details={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa facilis illum sed debitis corporis voluptas est voluptates dolore dolor ut, dolores alias. Optio eaque, ut expedita earum quos beatae libero quae facere vitae in, est voluptate? Rem quo aperiam mollitia autem sunt natus ipsum. Cupiditate repellendus qui accusantium, eius consequuntur optio deleniti quis, cum atque, voluptatum commodi impedit ad accusamus hic necessitatibus neque similique fugit incidunt consequatur eum natus id?`}></About>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-10 my-12">
        {isShow.drinks ?
           category.drinks?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))
          : category.drinks?.slice(0, 4)
              ?.map((item) => <Item key={item._id} item={item}></Item>)}
      </div>
      <div className=" flex justify-center my-10">
        {category.drinks?.length > 4 ? (
          <AwesomeButton onPress={() => handleCategory("drinks")} type="primary">
            {!isShow.drinks ? "View More" : "View Less"}
          </AwesomeButton>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Ourmenu;
