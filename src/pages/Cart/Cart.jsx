import { Helmet } from "react-helmet";
import SerctionTitle from "../../common/SectionTitle/SerctionTitle";
import useCart from "../../hooks/useCart/useCart";
import { MdDelete } from "react-icons/md";
import useButtons from "../../utils/Buttons/Buttons";

const Cart = () => {
    const {cart, refetch} = useCart();
    const {deleteCart} = useButtons();
    const deleteBtn = (item) => { 
      deleteCart(item)
      refetch()
     }
     let totalPrice = 0
      cart?.data?.map(item => (totalPrice+=item.price))
      console.log(totalPrice)
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Helmet>
        <title>Dashboard | Cart</title>
      </Helmet>
      <SerctionTitle subTitle="My Cart" title="WANNA ADD MORE?"></SerctionTitle>
      <div className=" bg-white border rounded-lg w-9/12">
        <div className=" flex justify-between items-center text-2xl font-cinzel px-20 py-10">
          <h2 className=" ">TOTAL ORDERS : {cart?.data?.length}</h2>
          <h2>TOTAL PRICE : ${totalPrice} </h2>
          <button className=" btn bg-orange-400">PAY</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
                {
                    cart?.data?.map((item, index) =>
                    <tr key={index}>
                    <th>{index+1}</th>
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><button onClick={()=>deleteBtn(item)} className="btn"><MdDelete className=" text-xl text-red-600" /></button></td>
                  </tr>
                     )
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
