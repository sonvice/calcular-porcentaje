import { useState } from "react";
import "./FormDescuentos.css";
import VictoryGraphic from "./VictoryGraphic";
import Discount from "./Discount";

export default function FormDescuentos({ allDescount }) {
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discount, setDiscount] = useState(5);
  const [total, setTotal] = useState(0);
  const [ahorros, setAhorros] = useState(0);
  const [saveOriginalPrice,setSaveOriginalPrice] = useState(260)
  //const [percentAdd, setPercentAdd] = useState(10);
  //const [percentEnd, setPercentEnd] = useState(90);

  const preventEvent = (e) => {
    setSaveOriginalPrice(originalPrice)
    setTotal((((100 - discount) * originalPrice) / 100).toFixed(2));
    setAhorros(((originalPrice * discount) / 100).toFixed(2));
    e.preventDefault();
    //setPercentAdd(Math.round((ahorros / originalPrice) * 100));
    //setPercentEnd(100 - percentAdd);
  };
  

  const updateValue = (value) => {
    setDiscount(value);
  };

  
  
console.log(originalPrice,total);
console.log(ahorros, discount);
  
  //console.log(JSON.stringify(percentageAhorro,percentagePfinal));

  return (
    <div className="black-color flow">
      <form onSubmit={preventEvent} className="form flow">
        <div className="flex-wrap">
          <label>
            Precio original
            <input
              
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
            ahorros={+ahorros}
            originalPrice={+saveOriginalPrice}
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
