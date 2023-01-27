import "../fondoinicio.css";
import { Link } from "react-router-dom";

export function Inicio() {
  return (
    <>
      <div className="background">
        <h1 className="title">Cat's Shop</h1>
        <p>
          Elige la comida para perro o gato favorita y en menos de tres horas
          estará en la puerta de tu casa, también puedes programar la entrega en
          el horario de tu elección.
        </p>
        <button>
          <Link to={"/tienda"}>IR A LA TIENDA</Link>
        </button>
        <div className="gato-container">
          <img src={require("../imagen-gato.png")} className="gato" alt="" />
          <img src={require("../wave-pink.png")} className="fondo" alt="" />
        </div>
      </div>
      <div>
        <h2>Lorem ipsum dolor sit no </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          repudiandae suscipit libero, quaerat officiis nisi enim iste, soluta aalksdfjlkasjdlkfjasdfklajsdlfa
        </p>
        <button>
          <Link to={"/acerca"}>CONOCE MAS SOBRE NOSTROS</Link>
        </button>
      </div>
      <div className="next"> KillYourself</div>
    </>
  );
}
