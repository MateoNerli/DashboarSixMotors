import { OrderMain } from "./orderMain";
import { useFetch } from "../../hooks/useFetch";

export const OrderComponent = () => {
  const { data } = useFetch("http://localhost:3000/api/orders?limit=6");
  return (
    <div className="bg-[#bfe0e2] p-8 rounded-xl shadow-2xl mb-8">
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
