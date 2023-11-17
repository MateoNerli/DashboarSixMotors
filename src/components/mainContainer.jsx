import { InfoCategory } from "./home/infoCategory";
import { UserOrders } from "./home/componentUserOrdes";
import { Cards } from "./home/cards";

export const MainContainer = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Cards />
          <InfoCategory />
          <UserOrders />
        </div>
      </div>
    </>
  );
};
