import "../fondoinicio.css";
import { Link } from "react-router-dom";

export function Inicio() {
  return (
    <>
      <div className="background row">
        <div className="textoInicioFondo col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h1 className="title">Cat's Shop</h1>
          <p className="parrafoInicio">
            Elige la comida para perro o gato favorita y en menos de tres horas
            estará en la puerta de tu casa, también puedes programar la entrega
            en el horario de tu elección.
          </p>
          <button>
            <Link to={"/tienda"}>IR A LA TIENDA</Link>
          </button>
          </div>
          <div className="gato-container col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={require("../imagen-gato.png")} className="gato" alt="" />
          </div>
          <div className="olaContainer">
          <img src={require("../wave-pink.png")} className="fondo" alt="" />
          </div>
      </div>
      <div>
        <h2>Lorem ipsum dolor sit no </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          repudiandae suscipit libero, quaerat officiis nisi enim iste, soluta
          aalksdfjlkasjdlkfjasdfklajsdlfa
        </p>
        <button>
          <Link to={"/acerca"}>CONOCE MAS SOBRE NOSTROS</Link>
        </button>
      </div>
      <div>
        <h2>Productos</h2>
        <div>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            quaerat tempore obcaecati fuga, hic ab rem perferendis ad totam
            pariatur nulla laborum qui ut enim? Numquam quis natus officia
            perferendis.
          </p>
          <button>Comprar</button>
        </div>
      </div>
      <div>
        <h2>Blog Cattitos</h2>
        <div>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            quaerat tempore obcaecati fuga, hic ab rem perferendis ad totam
            pariatur nulla laborum qui ut enim? Numquam quis natus officia
            perferendis.
          </p>
        </div>
      </div>
      <div className="next"> KillYourself</div>
    </>
  );
}
