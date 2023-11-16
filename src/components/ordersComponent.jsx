import { OrderMain } from "./orderMain";

export const OrderComponent = () => {
  return (
    <div className="bg-[#bfe0e2] p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
      <div className=" flex-col xl:flex-row xl:items-center justify-between gap-4">
        <OrderMain />
      </div>
    </div>
  );
};
