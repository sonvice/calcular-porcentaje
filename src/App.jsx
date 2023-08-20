import "./App.css";
import FormDescuentos from "./components/FormDescuentos";
import Percentage from "./components/Percentage";
function App() {
  const allDescount = [
    { id: 5, descount: 5 },
    { id: 10, descount: 10 },
    { id: 15, descount: 15 },
    { id: 20, descount: 20 },
    { id: 25, descount: 25 },
    { id: 30, descount: 30 },
    { id: 35, descount: 35 },
    { id: 40, descount: 40 },
    { id: 45, descount: 45 },
    { id: 50, descount: 50 },
    { id: 55, descount: 55 },
    { id: 60, descount: 60 },
    { id: 65, descount: 65 },
    { id: 70, descount: 70 },
    { id: 75, descount: 75 },
    { id: 80, descount: 80 },
    { id: 85, descount: 85 },
    { id: 90, descount: 90 },
    { id: 95, descount: 95 },
  ];


  return (
    <div className="container black-color flow">
      <h1 className="text-center">Calcular Descuentos</h1>
      <FormDescuentos allDescount={allDescount}></FormDescuentos>
      <Percentage></Percentage>
      <p className="text-center"> <small><a className=" black-color" href="https://wilsonweb.netlify.app/">@ All Rights Reserved By Wilson Muñoz</a></small></p>
     
    </div>
  );
}

export default App;
