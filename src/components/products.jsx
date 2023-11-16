export const Products = (props) => {
  return (
    <>
      <div className="">
        <img className="rounded-t-lg" src={props.img} />

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              {props.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">{props.description}</p>
          <p className="mb-3 font-normal text-gray-400">{props.category}</p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {props.price}
          </div>
        </div>
      </div>
    </>
  );
};
