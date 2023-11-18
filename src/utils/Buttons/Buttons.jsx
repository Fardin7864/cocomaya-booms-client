import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider/Authprovider";
import useAxios from "../../hooks/useAxios/useAxios";
import useCart from "../../hooks/useCart/useCart";
import Swal from 'sweetalert2'
import useUsers from "../../hooks/useUsers/useUsers";

const useButtons = () => {
const {user,successToast} = useContext(AuthContext)
const axios = useAxios();
const {refetch} = useCart();
const {refetch: reloadUser} = useUsers();

//Add to cart button for database
// const addToCart = (food) => { 
//     const cartFood = {
//         cartId: food._id,
//         userEmail: user.email,
//         name: food.name,
//         recipe: food.recipe,
//         image: food.image,
//         category: food.category,
//         price: food.price,
//     }
//     axios.post('/cart', cartFood)
//     .then((res) => {
//         if(res.data.insertedId){
//             successToast(`${food.name} has been Added!`)
//             refetch()
//         }
//     }
//     )
//     .catch(err => console.log(err))
//  }
//  // Delete from cart 
//  const deleteCart = (food) => {
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//             axios.delete(`/cart/${food._id}`,{ data: { userEmail: food.userEmail } })
//             .then(res => {
//                 // console.log(res.data.deletedCount)
//                 if (res.data.deletedCount) {
//                     Swal.fire({
//                         title: "Deleted!",
//                         text: `${food.name} has been Deleted!`,
//                         icon: "success"
//                       });
//                     refetch();
//                 }
//             })
//             .catch(err => console.log(err))

//         }
//       });

//   }

//Delete from users list 
const deleteUser = (user) => { 
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
            axios.delete(`/users/${user._id}`,{ data: { email: user.email } })
            .then(res => {
                // console.log(res.data.deletedCount)
                if (res.data.deletedCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${user.name} has been Deleted!`,
                        icon: "success"
                      });
                      reloadUser()
                }
            })
            .catch(err => console.log(err))

        }
      });
 }

//Create admin
const createAdmin = (user) => { 
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Admin!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.patch(`/users/admin/${user._id}`)
            .then(res => {
                // console.log(res.data.modifiedCount)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Added to Admin!",
                        text: `${user.name} has been Added!`,
                        icon: "success"
                      });
                      reloadUser()
                }
            })
            .catch(err => console.log(err))

        }
      });
 }
//Remove admin
const removeAdmin = (user) => { 
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove Admin!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.patch(`/users/normal/${user._id}`)
            .then(res => {
                // console.log(res.data.modifiedCount)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Removed from Admin!",
                        text: `${user.name} has been removed!`,
                        icon: "success"
                      });
                      reloadUser()
                }
            })
            .catch(err => console.log(err))

        }
      });
 }
 return { deleteUser, createAdmin, removeAdmin}
};

export default useButtons;