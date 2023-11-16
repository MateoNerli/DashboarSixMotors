import { User } from "./user";
import { useFetch } from "../hooks/useFetch";

export const UserComponent = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="p-4 sm:ml-64">
      {error && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl text-red-500">{error}</h1>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-pulse flex flex-col items-center gap-4 w-60">
            <div>
              <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
              <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
            </div>
            <div className="h-7 bg-slate-400 w-full rounded-md"></div>
            <div className="h-7 bg-slate-400 w-full rounded-md"></div>
            <div className="h-7 bg-slate-400 w-full rounded-md"></div>
            <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
          </div>
        </div>
      )}
      <div className="p-4 border-2 border-gray-700 border-dashed rounded-lg  mt-14">
        <div className="grid grid-cols-1 gap-4 mb-8   rounded-lg shadow-sm md:mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {data?.map((user) => (
            <User
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              img={user.img || "https://i.pravatar.cc/300"}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
