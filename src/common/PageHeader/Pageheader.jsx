const Pageheader = ({ img, title, details }) => {
  return (
<div
      className="hero bg-cover bg-no-repeat object-cover min-h-screen mb-20 py-28 px-60"
      style={{
        backgroundImage:
          `url('${img}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md font-cinzel">
          <h1 className="mb-5 text-5xl text-white font-semibold">{title}</h1>
          <p className="mb-5">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pageheader;
