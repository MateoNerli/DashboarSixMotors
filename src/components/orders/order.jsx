export const Order = (props) => {
  return (
    <div className="overflow-hidden relative h-64 bg-sky-600 rounded-2xl text-gray-50 flex flex-col justify-evenly items-center gap-2">
      <div className="flex flex-col items-center">
        <p className="text-xl font-extrabold">Order</p>
        <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5   before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
          {props.id}
        </p>
      </div>
      <span className="font-extrabold text-4xl mt-1 mb-5">{props.total}$</span>

      <p className="text-xs mb-1">*Variable prices</p>
    </div>
  );
};
