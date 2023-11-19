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
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          </div>
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
