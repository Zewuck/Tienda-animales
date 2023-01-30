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
      <div>
        <h1>Categorias </h1>
        <div>
          <img src="" alt="" />
          <h4>Concentrado</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Humedo</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Medicado</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Arena y accesorios</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Desparasitantes</h4>
        </div>

      </div>
      <div>
        <div>
          <img src="" alt="" />
          <h2>Productos Siempre Disponibles</h2>
          <p>
            Aseguramos que los productos que compras están disponibles, evitando
            esperas o devoluciones de dinero.
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <h2>Seguimiento y comunicacion constante</h2>
          <p>
            Aseguramos que los productos que compras están disponibles, evitando
            esperas o devoluciones de dinero.
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <h2>En cali entragas el mismo dia</h2>
          <p>Tendrás tu pedido en tu domicilio en menos de 4 horas.</p>
        </div>
        <div>
          <img src="" alt="" />
          <h2>Multiples metodos de pagos seguros</h2>
          <p>
            Aseguramos que los productos que compras están disponibles, evitando
            esperas o devoluciones de dinero.
          </p>
        </div>
      </div>
      <div>
        <h1>Productos</h1>
        <div>
          <img src="" alt="" />
          <h4>Ecocat- Arena para gatos</h4>
          <h3>$precio</h3>
          <button>Comprar</button>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Ecocat- Arena para gatos</h4>
          <h3>$precio</h3>
          <button>Comprar</button>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Ecocat- Arena para gatos</h4>
          <h3>$precio</h3>
          <button>Comprar</button>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Ecocat- Arena para gatos</h4>
          <h3>$precio</h3>
          <button>Comprar</button>
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
