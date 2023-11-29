import { useFetch } from "../../hooks/useFetch";
import { Order } from "./order";

export const OrderComponent = () => {
  const { data, loading, error } = useFetch(
    "https://sixmotors.onrender.com/api/orders"
  );

  return (
    <div className="p-4 sm:ml-64">
      {error && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl text-red-500">{error}</h1>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      )}
      <div className="p-4  mt-14">
        <div className="grid grid-cols-1 gap-4 mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {data
            ? data.data.map((order) => (
                <Order
                  key={order.id}
                  id={order.id}
                  total={order.total}
                  paymentMethod={order.paymentMethod}
                  shippingMethod={order.shippingMethod}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};
