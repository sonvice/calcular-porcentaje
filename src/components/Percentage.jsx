import { useState } from "react";

export default function Percentage() {
  const [percentage, setPercentage] = useState(0);
  const [amount, setAmount] = useState(0);
  const [calculator, setCalculator] = useState(0);
  const [added, setAdded] = useState(0);
  const [subtracted, setSubtracted] = useState(0);

  const preventSubmit = (e) => {
    e.preventDefault();
    setCalculator(Math.round((percentage * amount) / 100));
    setAdded(Math.round(+amount * ((+percentage + 100) / 100)));
    setSubtracted(Math.round(((100 - percentage) / 100) * amount));
  };

  return (
    <div>
      <h2 className="text-center black-color title-2 py-1">Calcular Porcentaje</h2>
      <form onSubmit={preventSubmit} className="bg-color-percentage px-1 py-1 flow radius">
        <h3 className="font-size-3">Calculando los porcentajes de un cantidad</h3>
        <hr />
        <div className="flex-wrap py-1">
          <label>
            Porcentaje
            <input
              onChange={(e) => setPercentage(e.target.value)}
              type="number"
            />
          </label>

          <label>
            Cantidad
            <input step="any" onChange={(e) => setAmount(e.target.value)} type="number" />
          </label>
          <button className="btn-calcular">Calcular</button>
        </div>
        <div className="bg-transparent px-1 py-1">
          <p className="font-size-2 item-description">
            Porcentaje calculado de la cantidad
            <span className="price color-primary">{calculator}</span>
          </p>
          ℹ{" "}
          <small>
            El {percentage}% de {amount} es {calculator}
          </small>
        </div>
        <div className="bg-transparent px-1 py-1">
          <p className="font-size-2 item-description">
            Porcentaje añadido a la cantidad
            <span className="price color-primary">{added}</span>
          </p>
          ℹ
          <small>
            Si la cantidad inicial es {amount} y quiere añadir {percentage}%, la
            cantidad final es {added}
          </small>
        </div>
        <div className="bg-transparent px-1 py-1">
          <p className="font-size-2 item-description">
            Porcentaje restado de la cantidad
            <span className="price color-primary">{subtracted}</span>
          </p>
          ℹ{" "}
          <small>
            Si la cantidad inicial es {amount} y quiere restar {percentage}%, la
            cantidad final es {subtracted}
          </small>
        </div>
        
      </form>
    </div>
  );
}
