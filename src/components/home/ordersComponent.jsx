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
          <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
            <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
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
