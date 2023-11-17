import { MdDelete } from "react-icons/md";
import SerctionTitle from "../../../common/SectionTitle/SerctionTitle";
import useUsers from "../../../hooks/useUsers/useUsers";
import { FaEdit } from "react-icons/fa";
import useButtons from "../../../utils/Buttons/Buttons";
import useAuth from "../../../hooks/useAuth/useAuth";

const ManageUsers = () => {
  const { allUser, refetch } = useUsers();
  const { deleteUser,createAdmin, removeAdmin } = useButtons();
  const { user: won } = useAuth();
  // console.log(allUser)
  const handleDelete = (user) => {
    deleteUser(user);
    refetch();
  };
  const handleAdmin = (user) => { 
    createAdmin(user);
    refetch();
   }
  const handleRemoveAdmin = (user) => { 
    removeAdmin(user);
    refetch();
   }
  return (
    <div>
      <SerctionTitle subTitle="USERS" title="ALL USERS"></SerctionTitle>
      <div className="overflow-x-auto px-24">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUser?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name?.toUpperCase()}</td>
                <td className=" flex items-center">
                  {user.role?.toUpperCase() || "NORMAL"}
                  {
                    user.role === "admin" ? 
                    (<button onClick={() => handleRemoveAdmin(user)} className=" text-xs ml-3 btn btn-accent">Remove Admin</button>)
                    :
                    (<button onClick={() => handleAdmin(user)} className=" text-xs ml-3">
                    {/* <FaEdit /> */}
                    <span className=" btn btn-warning text-xs">Make Admin</span>
                  </button>)
                  }
                  
                </td>
                <td>
                  {won?.email == user.email ? (
                    <h3 className=" text-xl font-bold">You</h3>
                  ) : (
                    <button onClick={() => handleDelete(user)} className="btn">
                      <MdDelete className=" text-xl text-red-600" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
