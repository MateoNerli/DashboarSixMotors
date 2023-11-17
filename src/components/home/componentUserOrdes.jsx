import { OrderComponent } from "./ordersComponent";
import { InfoUser } from "./userInfo";

export const UserOrders = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-8">Usuarios</h1>
        <InfoUser />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-8">Historial de pedidos</h1>
        <OrderComponent />
      </div>
    </section>
  );
};
