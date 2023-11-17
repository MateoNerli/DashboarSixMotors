export const User = (props) => {
  return (
    <div className=" border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full max-w-sm px-4 pt-4">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={props.img}
            alt={props.name}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {props.username}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {props.email}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {props.address.street}
          </span>
        </div>
      </div>
    </div>
  );
};
