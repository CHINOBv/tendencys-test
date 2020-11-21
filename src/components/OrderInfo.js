const OrderInfo = ({ orderInfo, AlertSucces, createdAt, total }) => {
  return (
    <>
      <div className="col-md-4 col-sm w-100 mb-4">
        <ul className="list-group">
          <li className="list-group-item active text-center">
            Order Information
          </li>
          <li className="list-group-item">Order ID: {orderInfo.id}</li>
          <li className="list-group-item">Order of Number: {orderInfo.number}</li>
          <li className="list-group-item">Order Name: {orderInfo.name}</li>
          <li className="list-group-item">
            Crated At: {createdAt.toLocaleString("es-MX")}
          </li>
          <li className="list-group-item">
            Status:
            <span className="text-capitalize">
              {orderInfo.status?.financial}
            </span>
          </li>
          <li className="list-group-item">
            Total Cost:
            {total}
          </li>
          <li className="list-group-item">
            <button
              className="btn  d-block btn-outline-primary w-100"
              type="button"
              data-toggle="modal"
              data-target="#formModal"
              data-whatever="@mdo"
            >
              Add Product
            </button>
            <button
              onClick={() =>
                AlertSucces({
                  title: "Payment Made",
                  message: "Your payment has been successful",
                })
              }
              className="btn btn-success d-block w-100 mt-4"
            >
              Pay
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OrderInfo;
