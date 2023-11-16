export const InfoCard = ({ title, amount, icon, color }) => {
  return (
    <div className={`flex items-center justify-center h-40 rounded  ${color}`}>
      <div className="text-center">
        <p className="text-2xl text-[#292929] ">{icon}</p>
        <p className="text-sm font-semibold text-[#3d3d3d]">{title}</p>
        <p className="text-lg font-bold text-[#3d3d3d]">{amount}</p>
      </div>
    </div>
  );
};
