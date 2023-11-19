import useAxios from "../../hooks/useAxios/useAxios";
import Swal from 'sweetalert2'
import useUsers from "../../hooks/useUsers/useUsers";
import useMenu from "../../hooks/useMenu/useMenu";

const useButtons = () => {
const axios = useAxios();
const {refetch: reloadUser} = useUsers();
const [loadMenu] = useMenu();


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
//Update item
const updateItem = (item) => { 
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `Yes, Update!`
  }).then((result) => {
    if (result.isConfirmed) {
        axios.patch(`menu/update/${item._id}`)
        .then(res => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Update!",
                    text: `${item.name} has been updated!`,
                    icon: "success"
                  });
                  loadMenu()
            }
        })
        .catch(err => console.log(err))

    }
  });
 }

//Delete item
const deleteItem = (item) => { 
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `Yes, Delete!`
  }).then((result) => {
    if (result.isConfirmed) {
        axios.delete(`menu/${item._id}`)
        .then(res => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Delete!",
                    text: `${item.name} has been Deleted!`,
                    icon: "success"
                  });
                  loadMenu()
            }
        })
        .catch(err => console.log(err))

    }
  });
 }
 return { deleteUser, createAdmin, removeAdmin, updateItem, deleteItem}
};

export default useButtons;