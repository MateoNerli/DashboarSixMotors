export const OrderMain = (props) => {
  const date = new Date(props.createdAt);
  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  return (
    <div className="grid grid-cols-1 p-1 gap-4">
      <div className="block max-w-md p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Fecha: {formattedDate}
        </h5>
        <p className="text-gray-700 dark:text-gray-300">
          {props.paymentMethod}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {props.shippingMethod}
        </p>
        <p className="text-gray-700 dark:text-gray-300">{props.total}</p>
      </div>
    </div>
  );
};
