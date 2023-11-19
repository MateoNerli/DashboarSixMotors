import { InfoCategory } from "./home/infoCategory";
import { UserOrders } from "./home/componentUserOrdes";
import { Cards } from "./home/cards";
import { LastComponent } from "./home/lastComponent";

export const MainContainer = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <Cards />
          <InfoCategory />
          <LastComponent />
          <UserOrders />
        </div>
      </div>
    </>
  );
};
