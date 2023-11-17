import { useFetch } from "../../hooks/useFetch";
import { UserMain } from "./userMain";

export const InfoUser = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/users?limit=5"
  );
  return (
    <>
      <div>
        <div className="bg-[#bfe0e2] p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
          {error && (
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-4xl text-red-500">{error}</h1>
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
              </div>
            </div>
          )}
          {data
            ? data.data.map((user) => (
                <UserMain
                  key={user.id}
                  name={user.name}
                  img={user.img}
                  lastname={user.lastname}
                  country={user.country}
                  user={user.user}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};
