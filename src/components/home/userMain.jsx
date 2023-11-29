export const UserMain = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
        <div className="col-span-2 flex items-center gap-4">
          <img
            src={`https://sixmotors.onrender.com/users/${props.img}`}
            className="w-14 h-14 object-cover rounded-xl"
          />
          <div>
            <h3 className="font-bold">
              {props.name} {props.lastname}
            </h3>
            <p className="text-gray-500">{props.user}</p>
          </div>
        </div>
        <div>
          <span className="bg-green-100 text-green-800 p-2 rounded-full font-medium">
            {props.country}
          </span>
        </div>
      </div>
    </>
  );
};
