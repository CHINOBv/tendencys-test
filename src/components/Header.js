import { useState, useEffect } from "react";
import Select from "react-select";

import { getOrders, getOrderById } from "../utils/FetchAPI";

const Header = ({ setOrderInfo, orderInfo }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => setOrders(response.data.orders));
  }, []);

  const fetchAPI = async (id) => {
    console.log(id);
    if (id?.trim()) {
      getOrderById(id).then((response) => {
        setOrderInfo([]);
        setOrderInfo(response.data.order);
      });
    }
  };

  const selectOptions = orders.map((order) => {
    let regx = /#/g;
    let name = order?.name?.replace(regx, "");
    return {
      vlue: order.id,
      label: name,
    };
  });

  return (
    <nav className="navbar navbar-dark bg-dark mb-4 bg-header">
      <h4 className="navbar-brand text-wrap">
        {!orderInfo?.name?.trim()
          ? "Select a Order"
          : `Number Of Order: ${orderInfo.number}`}
      </h4>
      <div className="w-25 ">
        <Select
          options={selectOptions}
          onChange={(e) => fetchAPI(e.vlue)}
          placeholder="Select You Order"
        />
      </div>
    </nav>
  );
};

export default Header;
