
const Item = ({item}) => {
    return (
      <div className="flex gap-10">
        <img
          src={item.image}
          alt=""
          className="object-fill w-20 rounded-tr-full rounded-bl-full border shadow-lg"
        />
      <div>
        <h2 className="uppercase text-gray-500 text-lg font-cinzel flex gap-4 justify-between">{item.name} ----------- <span className=" text-yellow-600">${item.price}</span></h2>
        <p>{item.recipe}</p>
      </div>
    </div>
    );
};

export default Item;