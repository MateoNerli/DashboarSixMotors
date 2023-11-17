import { CardCategory } from "./cardCategory";
import { useFetch } from "../../hooks/useFetch";

export const InfoCategory = () => {
  const { data } = useFetch("http://localhost:3000/api/products");
  return (
    <>
      <div className="flex flex-col items-center p-10  border rounded-lg shadow bg-gray-700">
        <h1 className="text-3xl text-white">Categorias</h1>
        <img
          className="object-cover w-full h-64 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
          src="../src/assets/logo2-sin-fondo.png"
          alt=""
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data
            ? data.data
                .reduce((acc, current) => {
                  const x = acc.find(
                    (item) => item.category === current.category
                  );
                  if (!x) {
                    return acc.concat([current]);
                  } else {
                    return acc;
                  }
                }, [])
                .map((product) => (
                  <CardCategory
                    key={product.id}
                    name={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    img={product.img}
                  />
                ))
            : null}
          {/* con reduce creo un nuevo array y guardo solo las categorias */}
        </div>
      </div>
    </>
  );
};
