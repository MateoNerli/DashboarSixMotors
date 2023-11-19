import { OrderMain } from "./orderMain";
import { useFetch } from "../../hooks/useFetch";

export const OrderComponent = () => {
  const { data, loading } = useFetch(
    "http://localhost:3000/api/orders?limit=6"
  );
  return (
    <div className="bg-[#d3dad6] p-8 rounded-xl shadow-2xl mb-8">
      {loading && (
        <div className="flex justify-center items-center">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        {data
          ? data.data.map((order) => (
              <OrderMain
                key={order.id}
                createdAt={order.createdAt}
                total={order.total}
                paymentMethod={order.paymentMethod}
                shippingMethod={order.shippingMethod}
              />
            ))
          : null}
      </div>
    </div>
  );
};
