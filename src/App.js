import { useState, useEffect } from "react";

import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [orderInfo, setOrderInfo] = useState([]);

  return (
    <>
      <Header setOrderInfo={setOrderInfo} orderInfo={orderInfo} />
      {orderInfo.items?.length > 0 ? <Products orderInfo={orderInfo} /> : null}
    </>
  );
}

export default App;
