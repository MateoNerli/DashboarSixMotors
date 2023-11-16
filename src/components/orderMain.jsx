export const OrderMain = () => {
  const orderHistoryData = [
    {
      id: 1,
      date: "2023-01-15",
      total: 150.0,
      paymentMethod: "Débito",
      shippingMethod: "Cadete",
    },
    {
      id: 2,
      date: "2023-02-02",
      total: 75.5,
      paymentMethod: "Débito",
      shippingMethod: "Cadete",
    },
    {
      id: 3,
      date: "2023-03-10",
      total: 200.25,
      paymentMethod: "Débito",
      shippingMethod: "Cadete",
    },
    {
      id: 4,
      date: "2023-01-15",
      total: 150.0,
      paymentMethod: "Débito",
      shippingMethod: "Cadete",
    },
    {
      id: 5,
      date: "2023-02-02",
      total: 75.5,
      paymentMethod: "Débito",
      shippingMethod: "Cadete",
    },
    {
      id: 6,
      date: "2023-03-10",
      total: 200.25,
      paymentMethod: "Débito",
      shippingMethod: "Cadete",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orderHistoryData.map((order) => (
          <div key={order.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <p className="text-sm font-bold">Fecha: {order.date}</p>
            <p className="text-sm">Total: ${order.total.toFixed(2)}</p>
            <p className="text-sm">Pago: {order.paymentMethod}</p>
            <p className="text-sm">Envío: {order.shippingMethod}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
