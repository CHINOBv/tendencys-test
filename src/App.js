import { useState } from "react";

import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [orderInfo, setOrderInfo] = useState([]);

  return (
    <>
      <Header setOrderInfo={setOrderInfo} orderInfo={orderInfo} />
      {orderInfo.items?.length > 0 ? (
        <Products orderInfo={orderInfo} />
      ) : (
        <>
          <div className="container">
            <h1 className="text-center font-weight-bold">
              Pleas Select a Order
            </h1>
          </div>
        </>
      )}
    </>
  );
}

export default App;
