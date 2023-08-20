import { useState } from "react";
import "./FormDescuentos.css";
import VictoryGraphic from "./VictoryGraphic";
import Discount from "./Discount";

export default function FormDescuentos({ allDescount }) {
  const [originalPrice, setOriginalPrice] = useState(100);
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [ahorros, setAhorros] = useState(0);

  const preventEvent = (e) => {
    setTotal((((100 - discount) * originalPrice) / 100).toFixed(2));
    setAhorros(((originalPrice * discount) / 100).toFixed(2));
    e.preventDefault();
  };

  const updateValue = (value) => {
    setDiscount(value);
  };
  let percentageAhorro = Math.round((ahorros / originalPrice) * 100);
  let percentagePfinal = 100 - percentageAhorro;


  return (
    <div className="black-color flow">
      <form onSubmit={preventEvent} className="form flow">
        <div className="flex-wrap">
          <label>
            Precio original
            <input
              value={originalPrice}
              required
              placeholder="260"
              onChange={(e) => setOriginalPrice(e.target.value)}
              type="number"
            />
          </label>
          <label>
            Descuento %
            <input
              required
              value={discount}
              placeholder="5"
              onChange={(e) => setDiscount(e.target.value)}
              type="number"
              step={5}
              max={95}
              min={5}
            />
          </label>
          <div>
            <p className="font-size-1">Precio Final</p>
            <span className="price color-primary">{total}</span>
          </div>
          <div>
            <p className="font-size-1">Ahorros</p>
            <span className="price color-secondary">{ahorros}</span>
          </div>
        </div>
        <button className="btn-calcular">Calcular</button>
      </form>
      <div className="full-grid">
        <div className="graphic">
          <VictoryGraphic
            percentageAhorro={percentageAhorro}
            percentagePfinal={percentagePfinal}
          ></VictoryGraphic>
        </div>
        <div className="grid">
          {allDescount.map((discount) => (
            <Discount
              key={discount.id}
              discount={discount}
              updateValue={updateValue}
            ></Discount>
          ))}
        </div>
      </div>
    </div>
  );
}
