import { useState, useEffect } from "react";

import { getOrderById } from "../utils/FetchAPI";
import AddProduct from "./AddProduct";
import { AlertSucces } from "./Alert";
import OrderInfo from "./OrderInfo";

const Products = ({ orderInfo }) => {
  const { id } = orderInfo;

  const [products, setProducts] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //Fetching API
    const fetchAPI = () => {
      getOrderById(id).then((res) => {
        //Save products on State
        const datas = JSON.parse(localStorage.getItem("products"));
        if (datas) {
          const data = datas.filter((data) => data.orderId === id);
          setProducts(() => [...res.data.order.items, ...data]);

          let totalLS = 0;
          for (var i = 0; i < data.length; i++) {
            totalLS += parseFloat(data[i].price * data[i].fulfillment.quantity);
          }

          let totalAPI = parseFloat(orderInfo.totals?.total);
          setTotal(totalAPI + totalLS);
        }
      });
    };
    fetchAPI();
    if (fetch) {
      setFetch(false);
    }
  }, [fetch, setTotal, setProducts, setFetch, id, orderInfo.totals?.total]);

  //Create Format of date for show
  const createdAt = new Date(orderInfo.dates?.createdAt);
  return (
    <>
      <div className="container">
        <div
          className="modal fade"
          id="formModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <AddProduct id={id} setFetch={setFetch} />
            </div>
          </div>
        </div>
        <div className="row row-cols">
          <OrderInfo
            orderInfo={orderInfo}
            createdAt={createdAt}
            AlertSucces={AlertSucces}
            total={total}
          />
          <div className="col-md-8 col-sm-12 ">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-striped table-responsive-sm table-light rounded">
                <thead className="bg-header">
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
      </div>
    </>
  );
};

export default Products;
