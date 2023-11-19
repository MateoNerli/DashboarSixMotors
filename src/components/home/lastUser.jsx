import { useFetch } from "../../hooks/useFetch";

export const LastUser = () => {
  const { data, loading } = useFetch("http://localhost:3000/api/users");

  // aca ordeno por fecha de creacion y tomo el ultimo
  const latestUser = data
    ? [...data.data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )[0]
    : null;

  return (
    <div className="bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300  p-4  rounded-lg shadow-md">
      <div className="col-span-2 text-lg font-bold rounded-md">
        Ultimo usuario
      </div>
      {loading && (
        <div className="flex justify-center items-center pt-5">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          </div>
        </div>
      )}
      {latestUser && (
        <div className="flex items-center pt-4 ">
          <div className="mr-4">
            <img
              src={`http://localhost:3000/users/${latestUser.img}`}
              alt={`${latestUser.name} ${latestUser.lastname}`}
              className="w-14 h-14 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="capitalize text-lg font-semibold">
              {latestUser.name} {latestUser.lastname}
            </div>
            <div className="text-gray-500">{latestUser.email}</div>
            <div className="text-gray-500">{latestUser.user}</div>
            <div className="text-gray-500">{latestUser.reviews}</div>
          </div>
        </div>
      )}
    </div>
  );
};
