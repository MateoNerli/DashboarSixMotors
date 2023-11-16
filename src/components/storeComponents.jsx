import { Products } from "./products";
import { useFetch } from "../hooks/useFetch";

export const StoreComponent = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products?limit=8"
  );

  return (
    <>
      <div className="p-4 sm:ml-64">
        {error && (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl text-red-500">{error}</h1>
          </div>
        )}
        {loading && (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        )}
        <div className="p-4 border-2  border-dashed rounded-lg border-gray-700 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.map((product) => (
            <Products
              key={product.id}
              name={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              img={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};
