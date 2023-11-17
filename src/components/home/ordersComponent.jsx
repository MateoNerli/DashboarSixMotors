import { OrderMain } from "./orderMain";
import { useFetch } from "../../hooks/useFetch";

export const OrderComponent = () => {
  const { data } = useFetch("https://fakestoreapi.com/orders");
  return (
    <div className="bg-[#bfe0e2] p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
      <div className=" flex-col xl:flex-row xl:items-center justify-between gap-4">
        {data?.map((order) => (
          <OrderMain
            key={order.id}
            date={order.date}
            total={order.total}
            paymentMethod={order.paymentMethod}
            shippingMethod={order.shippingMethod}
          />
        ))}
      </div>
    </div>
  );
};
