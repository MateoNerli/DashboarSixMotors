import { useFetch } from "../../hooks/useFetch";

export const LastProduct = () => {
  const { data, loading } = useFetch(
    "https://sixmotors.onrender.com/api/products"
  );

  const latestProduct = data
    ? [...data.data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )[0]
    : null;

  return (
    <div className="bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300  p-4  rounded-lg shadow-md">
      <div className="col-span-2 text-lg font-bold rounded-md">
        Ultimo producto
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
      {latestProduct && (
        <div className="flex items-center p-4">
          <div className="mr-4">
            <img
              src={`http://localhost:3000/uploads/${latestProduct.img}`}
              alt={`${latestProduct.name}`}
              className="w-14 h-14 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="capitalize text-lg font-bold">
              {latestProduct.name}
            </div>
            <div className="text-gray-800">{latestProduct.category}</div>
            <div className="text-gray-700">{latestProduct.price}</div>
            <div className="text-gray-500">{latestProduct.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};
