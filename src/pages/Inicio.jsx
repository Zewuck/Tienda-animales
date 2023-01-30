import "../fondoinicio.css";
import { Link } from "react-router-dom";
import { img } from "../assets/imagenes.js";

export function Inicio() {
  return (
    <div className="fondoInicio">
      <div className="background row">
        <div className="textoInicioFondo col-sm-12 col-md-6 col-lg-8 col-xl-8">
          <div className="textoInicio">
            <h1 className="title">Domiciolios el mismo dia</h1>
            <p className="parrafoInicio">
              Elige la comida para perro o gato favorita y en menos de tres
              horas estará en la puerta de tu casa, también puedes programar la
              entrega en el horario de tu elección.
            </p>
            <div className="buttonContainer">
              <button className="boton">
                <Link
                  to={"/tienda"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  IR A LA TIENDA
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="gato-container col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <img src={img.gato} className="gato" alt="" />
        </div>
      </div>
      <div className="inicio">
        <h1 className="productos productos-container">
          Los mejores productos de nuestra tienda
        </h1>
        <div className="row productos-container">
          <div className="col-sm-3 col-md-6 col-lg-3 col-xl-3">
            <div className="producto imagen-producto1">
              <h4 className="concentrado">Concentrado</h4>
            </div>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3 col-xl-3">
            <div className="producto imagen-producto2">
              <h4 className="concentrado">Humedo</h4>
            </div>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3 col-xl-3">
            <div className="producto imagen-producto3">
              <h4 className="concentrado">Medicado</h4>
            </div>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3 col-xl-3">
            <div className="producto imagen-producto4">
              <h4 className="concentrado">Arena y Accesorios</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bloque-bloque-container">
        <div className="bloque-container row">
          <div className="bloque row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <img src="" alt="" />
              <h2>Productos Siempre Disponibles</h2>
              <p>
                Aseguramos que los productos que compras están disponibles,
                evitando esperas o devoluciones de dinero.
              </p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <img src="" alt="" />
              <h2>Seguimiento y comunicacion constante</h2>
              <p>
                Aseguramos que los productos que compras están disponibles,
                evitando esperas o devoluciones de dinero.
              </p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <img src="" alt="" />
              <h2>En cali entragas el mismo dia</h2>
              <p>Tendrás tu pedido en tu domicilio en menos de 4 horas.</p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <img src="" alt="" />
              <h2>Multiples metodos de pagos seguros</h2>
              <p>
                Aseguramos que los productos que compras están disponibles,
                evitando esperas o devoluciones de dinero.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="productos2">Productos</h1>
        <div className="row productos2-container">
          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="gustan">
              <img src="" alt="" />
              <h4>Ecocat- Arena para gatos</h4>
              <h3>$precio</h3>
              <button>Comprar</button>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="gustan">
              <img src="" alt="" />
              <h4>Ecocat- Arena para gatos</h4>
              <h3>$precio</h3>
              <button>Comprar</button>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="gustan">
              <img src="" alt="" />
              <h4>Ecocat- Arena para gatos</h4>
              <h3>$precio</h3>
              <button>Comprar</button>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="gustan">
              <img src="" alt="" />
              <h4>Ecocat- Arena para gatos</h4>
              <h3>$precio</h3>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Testimonios</h1>
        <div>
          <p>
            Una de las cosas que más destaco es la versatilidad que tienen para
            poder captar lo que realmente el cliente necesita y lo que el
            cliente quiere proyectar y dar a conocer en sus páginas digitales.
            Son una empresa que realmente trabaja para ti con amor, dedicación,
            compromiso y responsabilidad, nunca hay un no como respuesta.
          </p>
          <h3>Nombre Apellido</h3>
          <img src="" alt="" />
        </div>
        <div>
          <p>
            Una de las cosas que más destaco es la versatilidad que tienen para
            poder captar lo que realmente el cliente necesita y lo que el
            cliente quiere proyectar y dar a conocer en sus páginas digitales.
            Son una empresa que realmente trabaja para ti con amor, dedicación,
            compromiso y responsabilidad, nunca hay un no como respuesta.
          </p>
          <h3>Nombre Apellido</h3>
          <img src="" alt="" />
        </div>
        <div>
          <p>
            Una de las cosas que más destaco es la versatilidad que tienen para
            poder captar lo que realmente el cliente necesita y lo que el
            cliente quiere proyectar y dar a conocer en sus páginas digitales.
            Son una empresa que realmente trabaja para ti con amor, dedicación,
            compromiso y responsabilidad, nunca hay un no como respuesta.
          </p>
          <h3>Nombre Apellido</h3>
          <img src="" alt="" />
        </div>
      </div>
      <div className="next"> KillYourself</div>
    </div>
  );
}
