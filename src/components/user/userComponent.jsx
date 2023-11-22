import { useFetch } from "../../hooks/useFetch";
import { User } from "./user";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const UserComponent = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/api/users");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data
    ? data.data.slice(indexOfFirstUser, indexOfLastUser)
    : [];
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
      <div className="p-4 mt-14">
        <div className="grid grid-cols-1 gap-4 mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {currentUsers.map((user) => (
            <User
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              country={user.country}
              img={user.img}
            />
          ))}
        </div>
        <div className="flex justify-center ">
          {currentPage > 1 && (
            <button
              className="flex mr-10 justify-center items-center gap-2 w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
          {currentPage <
            Math.ceil((data ? data.data.length : 0) / usersPerPage) && (
            <button
              className="flex justify-center items-center gap-2 w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(
                    page + 1,
                    Math.ceil((data ? data.data.length : 0) / usersPerPage)
                  )
                )
              }
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
