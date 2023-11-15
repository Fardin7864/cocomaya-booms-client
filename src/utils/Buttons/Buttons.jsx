import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider/Authprovider";
import useAxios from "../../hooks/useAxios/useAxios";
import useCart from "../../hooks/useCart/useCart";

const useButtons = () => {
const {user} = useContext(AuthContext)
const axios = useAxios();
const {refetch} = useCart();


const addToCart = (food) => { 
    const cartFood = {
        cartId: food._id,
        userEmail: user.email,
        name: food.name,
        recipe: food.recipe,
        image: food.image,
        category: food.category,
        price: food.price,
    }
    axios.post('/cart', cartFood)
    .then(() => refetch())
    .catch(err => console.log(err))
 }
 return {addToCart}
};

export default useButtons;