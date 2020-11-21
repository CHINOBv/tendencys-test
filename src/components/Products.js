/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { AlertError, AlertSucces } from "./Alert";
import { getOrderById } from "../utils/FetchAPI";
import AddProduct from "./AddProduct";

const Products = ({ orderInfo }) => {
  const { id } = orderInfo;

  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    //Fetching API
    getOrderById(id)
      .then((res) => {
        //Save info of Order on State
        //Save products on State
        const datas = JSON.parse(localStorage.getItem("products"));
        if (datas) {
          const data = datas.filter((data) => data.orderId === id);
          setProducts(() => [...res.data.order.items, ...data]);
        }
      }) //If not exist the order show Alert
      .catch((e) => {
        AlertError({
          title: "Order Not Found",
          message: "We could not find your order, Please verify your URL",
          showBtn: true,
        });
        return setShowAlert(true);
      });
  }, []);
  //Create Format of date for show
  const createdAt = new Date(orderInfo.dates?.createdAt);
  return (
    <>
      {showAlert ? null : (
        <div className="container">
          {showForm ? (
            <>
              <div
                className="modal fade"
                id="formModal"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <AddProduct id={id} />
                  </div>
                </div>
              </div>
            </>
          ) : null}
          <div className="row row-cols">
            <div className="col-md-4 col-sm w-100 mb-4">
              <ul className="list-group">
                <li className="list-group-item active text-center">
                  Order Information
                </li>
                <li className="list-group-item">Order ID: {orderInfo.id}</li>
                <li className="list-group-item">
                  Order Number: {orderInfo.number}
                </li>
                <li className="list-group-item">
                  Crated At: {createdAt.toLocaleString("es-MX")}
                </li>
                <li className="list-group-item">
                  Status:{" "}
                  <span className="text-capitalize">
                    {orderInfo.status?.financial}
                  </span>
                </li>
                <li className="list-group-item">
                  <button
                    onClick={() => setShowForm(showForm ? false : true)}
                    className="btn  d-block btn-outline-primary "
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
            <div className="col-md-8 col-sm-12">
              <table className="table table-striped table-responsive-sm">
                <thead style={{ backgroundColor: "#0984e3", color: "#fff" }}>
                  <tr className="">
                    <th scope="col">SKU</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.sku}</td>
                      <td>{product.name}</td>
                      <td>{product.fulfillment.quantity}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
