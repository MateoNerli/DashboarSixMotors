export const UserMain = (props) => {
  return (
    <>
      <div className="col-span-2 flex items-center gap-4">
        <img
          src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg"
          className="w-14 h-14 object-cover rounded-xl"
        />
        <div>
          <h3 className="font-bold">{props.name}</h3>
          <p className="text-gray-500">{props.username}</p>
        </div>
      </div>
      <div>
        <span className="bg-green-100 text-green-800 p-2 rounded-full font-medium">
          {props.address.city}
        </span>
      </div>
    </>
  );
};
