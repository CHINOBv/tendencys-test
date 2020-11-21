import { useState, useEffect } from "react";

import { getOrders, getOrderById } from "../utils/FetchAPI";

const Header = ({ setOrderInfo, orderInfo }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => setOrders(response.data.orders));
  }, []);

  const fetchAPI = async (id) => {
    getOrderById(id).then((response) => {
      setOrderInfo([]);
      setOrderInfo(response.data.order);
    });
  };

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <h4 className="navbar-brand">
        {!orderInfo?.name?.trim()
          ? "Select a Order"
          : `Number Of Order: ${orderInfo.number}`}
      </h4>
      <div className="btn-group dropleft">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropleft
        </button>
        <div className="dropdown-menu">
          
        </div>
      </div>

      <form className="form-inline">
        <div className="input-group mb-3">
          <select
            className="custom-select"
            onChange={(e) => fetchAPI(e.target.value)}
            value={!orderInfo?.name ? orderInfo.number : orderInfo.name}
          >
            <option value="">-- Select Order ---</option>
            {orders.map((order) => {
              let regx = /#/g;
              let name = order?.name?.replace(regx, "");
              return (
                <>
                  <option key={order.id} value={order.id}>
                    {name}
                  </option>
                </>
              );
            })}
          </select>
        </div>
      </form>
    </nav>
  );
};

export default Header;
