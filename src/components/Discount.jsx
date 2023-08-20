export default function Discount({ discount, updateValue }) {
  return (
    

    <button
      className="btn-descount"
      onClick={() => updateValue(discount.descount)}
    >
      {discount.descount}
      <div className="percentage"><span>%</span><span className="percentage-word">off</span></div>
    </button>
    
    
  );
}
