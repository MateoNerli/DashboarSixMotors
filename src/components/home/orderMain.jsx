export const OrderMain = (props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <p className="text-sm font-bold">Fecha: {props.date}</p>
        <p className="text-sm">Total: ${props.total.toFixed(2)}</p>
        <p className="text-sm">Pago: {props.paymentMethod}</p>
        <p className="text-sm">Envío: {props.shippingMethod}</p>
      </div>
    </div>
  );
};
