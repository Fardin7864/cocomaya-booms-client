const Food = ({ item }) => {
  return (
    <div className="card gap-8 bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt="Shoes"
          className=" p-3"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.recipe.slice(0,60)}</p>
      </div>
    </div>
  );
};

export default Food;
