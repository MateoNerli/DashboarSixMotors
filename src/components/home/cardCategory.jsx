export const CardCategory = (props) => {
  return (
    <div className="block max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.category}
      </h5>
    </div>
  );
};
