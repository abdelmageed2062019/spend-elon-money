import React from "react";
import { NumericFormat } from "react-number-format";
import Card from "../card";
import { useSelector } from "react-redux";
import { data } from "../../data";

const Products = () => {
  const money = useSelector((state) => state.money.amount);

  return (
    <div className="container mt-4 mb-4">
      <div
        className="bg-success text-white p-3 position-sticky top-0"
        style={{ height: "80px", zIndex: "1000", opacity: "1" }}
      >
        <h1
          className="font-weight-bold text-center"
          style={{ fontSize: "40px" }}
        >
          <NumericFormat
            value={money}
            displayType="text"
            thousandSeparator={true}
            prefix={"$"}
          />
        </h1>
      </div>

      <div className="d-flex justify-content-around flex-wrap gap-5 mt-5">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
