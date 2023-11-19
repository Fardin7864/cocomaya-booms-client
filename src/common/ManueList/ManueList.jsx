import { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Item from "../Item/Item";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import useMenu from "../../hooks/useMenu/useMenu";

const ManueList = () => {
  const [tabIndex] = useState(0);
  const [isShow, setisShow] = useState({
    salad: false,
    pizza: false,
    soup: false,
    drinks: false,
  });
  // const [menu, setMenu] = useState();
  // useEffect(() => {
  //   axios.get("/menu.json").then((res) => {
  //     setMenu(res.data);
  //   });
  // }, []);
  const [menu] = useMenu();
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
  // console.log(salad[0].image)
  // const items = isShow ?
  return (
    <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 my-12">
          {isShow.salad
            ? category?.salad?.map((item) => (
                <Item key={item._id} item={item}></Item>
              ))
            : category?.salad
                ?.slice(0, 6)
                ?.map((item) => <Item key={item._id} item={item}></Item>)}
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
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 my-12">
          {isShow.pizza
            ? category?.pizza?.map((item) => (
                <Item key={item._id} item={item}></Item>
              ))
            : category?.pizza
                ?.slice(0, 6)
                ?.map((item) => <Item key={item._id} item={item}></Item>)}
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
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 my-12">
          {isShow.soup
            ? category?.soup?.map((item) => (
                <Item key={item._id} item={item}></Item>
              ))
            : category?.soup
                ?.slice(0, 6)
                ?.map((item) => <Item key={item._id} item={item}></Item>)}
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
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 my-12">
          {isShow.drinks
            ? category?.drinks?.map((item) => (
                <Item key={item._id} item={item}></Item>
              ))
            : category?.drinks
                ?.slice(0, 6)
                ?.map((item) => <Item key={item._id} item={item}></Item>)}
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
  );
};

export default ManueList;
