import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyProduct, sellProduct } from "../../redux/Product/productReducer";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const money = useSelector((state) => state.money.amount);

  const buyItem = (price) => {
    setAmount(Number(amount) + 1);
    dispatch(buyProduct(price));
  };

  const sellItem = (price) => {
    setAmount(Number(amount) - 1);
    dispatch(sellProduct(price));
  };

  const buyAndSellItem = (value, price) => {
    if (amount > value) {
      dispatch(sellProduct((amount - value) * price));
    }
    if (amount < value) {
      dispatch(buyProduct((value - amount) * price));
    }
    setAmount(value);
  };
  return (
    <div className="card text-center">
      <img
        src={item.img}
        className="card-img-top"
        alt={item.title}
        width={20}
        height={120}
      />
      <div className="card-body align-bottom">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">${item.price}</p>
        <div className="d-flex">
          <button
            className="btn btn-primary me-4"
            style={{ width: "100px", height: "40px" }}
            onClick={() => buyItem(item.price)}
            disabled={item.price > money}
          >
            Buy
          </button>

          <input
            type="number"
            className="form-control"
            style={{ width: "100px", height: "40px", textAlign: "center" }}
            onChange={(e) => buyAndSellItem(Number(e.target.value), item.price)}
          />

          <button
            className="btn btn-danger ms-4"
            style={{ width: "100px", height: "40px" }}
            onClick={() => sellItem(item.price)}
            disabled={amount === 0}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
