import { MdDelete } from "react-icons/md";
import useMenu from "../../../../hooks/useMenu/useMenu";
import {TiEdit} from 'react-icons/ti'
import { Link } from "react-router-dom";
import useButtons from "../../../../utils/Buttons/Buttons";

const ItemTable = () => {
  const [menu] = useMenu();
  const {deleteItem} = useButtons();
  return (
    <div className="overflow-x-auto px-24">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>ITEM IMAGE</th>
            <th>ITEM NAME</th>
            <th>ACTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {menu?.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>{item.name}</td>
              <td>
                <Link
                to={`/dashboard/update/${item._id}`}
                // onClick={() => updateItem(item)}
                className="btn bg-orange-500 text-white text-lg"
                >
                <TiEdit />
                </Link>
              </td>
              <td><button 
              onClick={()=>deleteItem(item)} 
              className="btn"><MdDelete className=" text-xl text-red-600" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
