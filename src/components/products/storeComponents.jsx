import { useState } from "react";
import { Products } from "./products";
import { useFetch } from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const StoreComponent = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/products"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data
    ? data.data.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

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
        <div className="p-4 mt-14">
          <div className="grid grid-cols-1 gap-4 mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {currentProducts.map((product) => (
              <Products
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                category={product.category}
                img={product.img}
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
              Math.ceil((data ? data.data.length : 0) / productsPerPage) && (
              <button
                className="flex justify-center items-center gap-2 w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(
                      page + 1,
                      Math.ceil((data ? data.data.length : 0) / productsPerPage)
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
    </>
  );
};
