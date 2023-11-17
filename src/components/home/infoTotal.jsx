export const InfoTotal = (props) => {
  return (
    <>
      {props.error && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl text-red-500">{props.error}</h1>
        </div>
      )}

      <div className="">
        <h5 className="mb-2 text-2xl font-semibold text-white">
          {props.title}
        </h5>
        <div className="flex items-center">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {props.amount}
          </span>

          <span className="flex iAtems-centeAr px-2 py-0.5 mx-2 text-xs font-medium tracking-wide text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
            {props.total}
          </span>
        </div>
      </div>
    </>
  );
};
