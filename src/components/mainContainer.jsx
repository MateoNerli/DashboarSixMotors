import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faCartShopping,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { InfoCard } from "./infoCard";
import { InfoCategory } from "./infoCategory";
import { InfoUser } from "./userInfo";

export const MainContainer = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <InfoCard
              title="Products"
              amount="1000"
              color="bg-gradient-to-r from-green-300 to-teal-600"
              icon={<FontAwesomeIcon icon={faTag} />}
            />
            <InfoCard
              title="Usuarios"
              amount="500"
              color="bg-gradient-to-r from-blue-300 to-blue-600"
              icon={<FontAwesomeIcon icon={faUsers} />}
            />
            <InfoCard
              title="Pedidos"
              amount="200"
              color="bg-gradient-to-r from-yellow-300 to-yellow-600"
              icon={<FontAwesomeIcon icon={faCartShopping} />}
            />
          </div>
          <InfoCategory />
          <InfoUser />
        </div>
      </div>
    </>
  );
};
