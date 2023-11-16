import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider/Authprovider";
import useAxios from "../../hooks/useAxios/useAxios";
import useCart from "../../hooks/useCart/useCart";
import Swal from 'sweetalert2'

const useButtons = () => {
const {user,successToast} = useContext(AuthContext)
const axios = useAxios();
const {refetch} = useCart();

//Add to cart button for database
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
    .then((res) => {
        if(res.data.insertedId){
            successToast(`${food.name} has been Added!`)
            refetch()
        }
    }
    )
    .catch(err => console.log(err))
 }

 // Delete from cart 
 const deleteCart = (food) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/cart/${food._id}`)
            .then(res => {
                if (res.data.deleteCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${food.name} has been Deleted!`,
                        icon: "success"
                      });
                    refetch();
                }
            })
            .catch(err => console.log(err))

        }
      });

  }
 return {addToCart,deleteCart}
};

export default useButtons;