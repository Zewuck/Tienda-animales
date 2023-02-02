import "../fondoinicio.css";
import { Link } from "react-router-dom";
import { img } from "../assets/imagenes.js";

export function Inicio() {
  return (
    <>
      <div className="fondoInicio">
        <div className="background row">
          <div className="textoInicioFondo col-sm-12 col-md-6 col-lg-8 col-xl-8">
            <div className="textoInicio">
              <h1 className="title">Domiciolios el mismo dia</h1>
              <p className="parrafoInicio">
                Elige la comida para perro o gato favorita y en menos de tres
                horas estará en la puerta de tu casa, también puedes programar
                la entrega en el horario de tu elección.
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
      </div>
      <hr></hr>
      <div className="inicio">
        <h1 className="productos productos-container">
          <span className="titulo-1">
            CONCIENTE TU PELUDO CON LOS MEJORES PRODUCTOS
          </span>
        </h1>
        <section className="product">
          <button className="pre-btn">
            <img src={img.arrow} alt=""/>
          </button>
          <button className="nxt-btn">
            <img src={img.arrow} alt="" />
          </button>
          <div className="product-container">
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={img.concentrado}
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bloque-bloque-container">
        <div className="bloque-container">
          <div className="bloque row">
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <div className="bloque-franja">
                <div className="container-imagen-franja">
                  <div className="container-imagen-franja-caja"></div>
                  <div className="img-container">
                    <img src={img.caja} alt="" className="imagen-franja" />
                  </div>
                </div>
                <h2 className="franja-titulo">Productos Siempre Disponibles</h2>
                <p>
                  <span>
                    Aseguramos que los productos que compras están disponibles,
                    evitando esperas o devoluciones de dinero.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <div className="bloque-franja">
                <div className="container-imagen-franja">
                  <div className="container-imagen-franja-caja"></div>
                  <div className="img-container">
                    <img src={img.camion} alt="" className="imagen-franja" />
                  </div>
                </div>
                <h2 className="franja-titulo">
                  Seguimiento y comunicacion constante
                </h2>
                <p>
                  <span>
                    Aseguramos que los productos que compras están disponibles,
                    evitando esperas o devoluciones de dinero.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <div className="bloque-franja">
                <div className="container-imagen-franja">
                  <div className="container-imagen-franja-caja"></div>
                  <div className="img-container">
                    <img src={img.camion} alt="" className="imagen-franja" />
                  </div>
                </div>
                <h2 className="franja-titulo">En cali entragas el mismo dia</h2>
                <p>
                  <span>
                    Tendrás tu pedido en tu domicilio en menos de 4 horas.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <div className="bloque-franja">
                <div className="container-imagen-franja">
                  <div className="container-imagen-franja-caja"></div>
                  <div className="img-container">
                    <img src={img.caja} alt="" className="imagen-franja" />
                  </div>
                </div>
                <h2 className="franja-titulo">
                  Multiples metodos de pagos seguros
                </h2>
                <p>
                  <span>
                    Aseguramos que los productos que compras están disponibles,
                    evitando esperas o devoluciones de dinero.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="productos productos-container">
          <hr className="linea2"></hr>
          <span className="titulo-1">
            PRODUCTOS QUE MÁS GUSTAN A LOS PELUDITOS EN CATTITOS
          </span>
        </h1>
        <section className="product">
          <button className="pre-btn">
            <img src={img.arrow} alt="" />
          </button>
          <button className="nxt-btn">
            <img src={img.arrow} alt="" />
          </button>
          <div className="product-container">
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product ..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product ..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
            <div className="product-card2">
              <div className="product-image2">
                <span className="discount-tag">50% off</span>
                <img src={img.petfood} className="product-thumb" alt="" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                  a short line about the pet food product..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="fondo-azul">

        <div className="nuestros-clientes-container">
        <img className="center" src={img.pink} alt=""/>
        </div>

        <div className="container mt-5 mb-5">
          <div className="row g-2">
            <div className="col-md-4">
              <div className="card p-3 text-center px-4 mx-1">
                <div className="user-image">
                  <img
                    src={img.gatotel}
                    className="rounded-circle"
                    width="80"
                    alt=""
                  />
                </div>
                <div className="user-content">
                  <h5 className="mb-0">Bruce Hardy</h5>
                  <span>Software Developer</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 text-center px-4 mx-1">
                <div className="user-image">
                  <img
                    src={img.gatolente}
                    className="rounded-circle"
                    width="80"
                    alt=""
                  />
                </div>

                <div className="user-content">
                  <h5 className="mb-0">Mark Smith</h5>
                  <span>Web Developer</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 text-center px-4 mx-1">
                <div className="user-image">
                  <img
                    src={img.gatotel}
                    className="rounded-circle"
                    width="80"
                    alt=""
                  />
                </div>

                <div className="user-content">
                  <h5 className="mb-0">Veera Duncan</h5>
                  <span>Software Architect</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
