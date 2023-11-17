import Pageheader from "../../../common/PageHeader/Pageheader";
import headerBg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu/useMenu";
import { AwesomeButton } from "react-awesome-button";
import Item from "../../../common/Item/Item";
import Food from "../Food/Food";

const Foods = () => {
    const menu = useMenu();
    const [tabIndex, settabIndex] = useState(0);
    const [isShow, setisShow] = useState({
      salad: false,
      pizza: false,
      soup: false,
      drinks: false,
    });
    const category = {
      salad: menu?.filter((food) => food.category === "salad") || [],
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
  return (
    <>
      <Pageheader
        img={headerBg}
        title="Our food's"
        details="Would you like to try a dish?"
      ></Pageheader>
    <Tabs defaultIndex={tabIndex}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 my-12">
          {isShow.salad
            ? category?.salad?.map((item) => (
                <Food key={item._id} item={item}></Food>
              ))
            : category?.salad
                ?.slice(0, 6)
                ?.map((item) => <Food key={item._id} item={item}></Food>)}
        </div>
        <div className=" flex justify-center my-10">
          {category?.salad?.length > 6 ? (
            <AwesomeButton
              onPress={() => handleCategory("salad")}
              type="primary"
            >
              {!isShow.salad ? "View More" : "View Less"}
            </AwesomeButton>
          ) : (
            ""
          )}
        </div>
      </TabPanel>
      <TabPanel>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 my-12">
          {isShow.pizza
            ? category?.pizza?.map((item) => (
                <Food key={item._id} item={item}></Food>
              ))
            : category?.pizza
                ?.slice(0, 6)
                ?.map((item) => <Food key={item._id} item={item}></Food>)}
        </div>
        <div className=" flex justify-center my-10">
          {category?.drinks?.length > 6 ? (
            <AwesomeButton
              onPress={() => handleCategory("pizza")}
              type="primary"
            >
              {!isShow.soup ? "View More" : "View Less"}
            </AwesomeButton>
          ) : (
            ""
          )}
        </div>
      </TabPanel>
      <TabPanel>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 my-12">
          {isShow.soup
            ? category?.soup?.map((item) => (
                <Food key={item._id} item={item}></Food>
              ))
            : category?.soup
                ?.slice(0, 6)
                ?.map((item) => <Food key={item._id} item={item}></Food>)}
        </div>
        <div className=" flex justify-center my-10">
          {category?.soup?.length > 6 ? (
            <AwesomeButton
              onPress={() => handleCategory("soup")}
              type="primary"
            >
              {!isShow.soup ? "View More" : "View Less"}
            </AwesomeButton>
          ) : (
            ""
          )}
        </div>
      </TabPanel>
      <TabPanel>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 my-12">
          {isShow.drinks
            ? category?.drinks?.map((item) => (
                <Food key={item._id} item={item}></Food>
              ))
            : category?.drinks
                ?.slice(0, 6)
                ?.map((item) => <Food key={item._id} item={item}></Food>)}
        </div>
        <div className=" flex justify-center my-10">
          {category?.drinks?.length > 6 ? (
            <AwesomeButton
              onPress={() => handleCategory("drinks")}
              type="primary"
            >
              {!isShow.drinks ? "View More" : "View Less"}
            </AwesomeButton>
          ) : (
            ""
          )}
        </div>
      </TabPanel>
    </Tabs>
    </>
  );
};

export default Foods;
