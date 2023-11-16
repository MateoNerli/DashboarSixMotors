import { useFetch } from "../hooks/useFetch";
import { OrderComponent } from "./ordersComponent";
import { UserMain } from "./userMain";

export const InfoUser = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-8">Usuarios</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              {error && (
                <div className="flex justify-center items-center h-screen">
                  <h1 className="text-4xl text-red-500">{error}</h1>
                </div>
              )}
              {loading && (
                <div className="flex justify-center items-center h-screen">
                  <div className="flex items-center space-x-2">
                    <div className="animate-pulse rounded-full bg-gray-500 h-12 w-12 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[200px]"></div>
                      <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[170px]"></div>
                    </div>
                  </div>
                </div>
              )}
              {data?.map((user) => (
                <UserMain
                  key={user.id}
                  name={user.name}
                  username={user.username}
                  address={user.address}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-8">Historial de pedidos</h1>
          <OrderComponent />
        </div>
      </section>
    </>
  );
};
