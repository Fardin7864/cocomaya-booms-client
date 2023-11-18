import { AwesomeButton } from "react-awesome-button";
import useCommonButtons from "../../../utils/CommonButtons/useCommonButtons";
// import useButtons from "../../../utils/Buttons/Buttons";

const Food = ({item}) => {
  const {addToCart} = useCommonButtons();
  return (
    <div className="card gap-8 bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt="Shoes"
          className=" p-3"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.recipe?.slice(0,60)}</p>
      </div>
      <div className=" flex justify-center my-5">
        <button onClick={()=>addToCart(item)}><AwesomeButton type="primary">Add To Cart</AwesomeButton></button>
      </div>
    </div>
  );
};

export default Food;
