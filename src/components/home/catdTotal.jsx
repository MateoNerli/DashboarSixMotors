import { useFetch } from "../../hooks/useFetch";
import { InfoTotal } from "./infoTotal";

export const CatdTotal = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/api/orders");

  const totalSum = data
    ? data.data.reduce((acc, order) => acc + parseFloat(order.total), 0)
    : 0;

  return (
    <div className="mt-4 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
          <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
          <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
        </div>
      ) : (
        <InfoTotal
          title="Ganancias totales"
          amount={`$ ${totalSum.toFixed(2)}`}
          icon="💵"
          total={data.meta.total}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
};
