import { Products } from "./products";
import { useFetch } from "../../hooks/useFetch";

export const StoreComponent = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/products"
  );
  // console.log(data);

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
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
            </div>
          </div>
        )}
        <div className="p-4 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data
            ? data.data.map((product) => (
                <Products
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  img={product.img}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};
