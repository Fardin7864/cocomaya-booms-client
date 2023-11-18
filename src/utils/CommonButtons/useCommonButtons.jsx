import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxios from "../../hooks/useAxios/useAxios";
import useCart from "../../hooks/useCart/useCart";

const useCommonButtons = () => {
    const {user,successToast,errorToast} = useAuth();
    const {refetch} = useCart();
    const axios = useAxios();

// Add to cart button for database
const addToCart = (food) => { 
    if (user) {
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
    else {errorToast("Log in for add to cart!!")}
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
            axios.delete(`/cart/${food._id}`,{ data: { userEmail: food.userEmail } })
            .then(res => {
                // console.log(res.data.deletedCount)
                if (res.data.deletedCount) {
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

export default useCommonButtons;