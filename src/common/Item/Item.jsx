
const Item = ({item}) => {
    return (
      <div className="flex gap-10">
        <img
          src={item.image}
          alt=""
          className="object-fill w-20 rounded-tr-full rounded-bl-full border shadow-lg"
        />
      <div>
        <h2 className="uppercase text-lg font-cinzel">{item.name} -----------</h2>
        <p>{item.recipe}</p>
      </div>
    </div>
    );
};

export default Item;