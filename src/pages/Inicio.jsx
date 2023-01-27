import "../fondoinicio.css";
import { Link } from "react-router-dom";

export function Inicio() {
  return (
    <>
      <div className="background">
        <h1 className="title">Cat's Shop</h1>
        <p>Elige la comida para perro o gato favorita y en menos de tres horas estará en la puerta de tu casa, también puedes programar la entrega en el horario de tu elección.</p>
        <button><Link to={"/acerca"}>IR A LA TIENDA</Link></button>
        <div className="gato-container">
          <img src={require("../imagen-gato.png")} className="gato" alt="" />
            <img src={require("../wave.png")} className="fondo" alt="" />
        </div>
      </div>
      
      <div className="next"> KillYourself</div>
    </>
  );
}
