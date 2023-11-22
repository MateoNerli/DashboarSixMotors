export const Products = (props) => {
  return (
    <>
      <div className=" bg-gray-800 p-3 flex flex-col gap-1 rounded-br-3xl">
        <div className="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black  hover:contrast-100">
          <img
            className="w-full h-full object-cover"
            src={`http://localhost:3000/uploads/${props.img}`}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="text-xl text-gray-50 font-bold">
                {props.name}
              </span>
              <p className="text-xs text-gray-400">{props.category}</p>
            </div>
            <span className="font-bold  text-red-600">${props.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};
