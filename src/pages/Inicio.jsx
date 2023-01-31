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
      <hr></hr>
      <div className="inicio">
        <h1 className="productos productos-container">
          <span className="titulo-1">
            CONCIENTE TU PELUDO CON LOS MEJORES PRODUCTOS 
          </span>
        </h1>
        <section className="product">
          <button className="pre-btn">
            <img src={img.arrow} />
          </button>
          <button className="nxt-btn">
            <img src={img.arrow} />
          </button>
          <div className="product-container">
            <div className="product-card">
              <div className="product-image">
                <div className="producto imagen-producto1">
                  <img
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
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
                    src={
                      (require =
                        "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                    }
                    className="imagen-concentrado"
                    alt=""
                  />
                  <h4 className="concentrado">Concentrado</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="row productos-container">
          <div className="col-sm-3 col-md-6 col-lg-3 col-xl-3">
            <div className="producto imagen-producto1">
              <img
                src={
                  (require =
                    "https://t1.ea.ltmcdn.com/es/posts/3/6/2/los_mejores_alimentos_balanceados_para_perros_21263_600_square.jpg")
                }
                className="imagen-concentrado"
                alt=""
              />
              <h4 className="concentrado">Concentrado</h4>
            </div>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3 col-xl-3">
            <div className="producto imagen-producto2">
              <img
                src={
                  (require =
                    "https://www.wohlpet.com/wp-content/uploads/2021/10/COMIDA-HUMEDA-200x200.jpg")
                }
                className="imagen-concentrado"
                alt=""
              />
              <h4 className="concentrado">Humedo</h4>
            </div>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3 col-xl-3">
            <div className="producto imagen-producto3">
              <img
                src={
                  (require =
                    "https://www.wohlpet.com/wp-content/uploads/2021/10/COMIDA-SECA-Y-HUMEDA_opt-200x200.png")
                }
                className="imagen-concentrado"
                alt=""
              />
              <h4 className="concentrado">Medicado</h4>
            </div>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3 col-xl-3">
            <div className="producto imagen-producto4">
              <img
                src={
                  (require =
                    "https://www.wohlpet.com/wp-content/uploads/2021/10/ARENA-PARA-GATO-200x200.jpg")
                }
                className="imagen-concentrado"
                alt=""
              />
              <h4 className="concentrado">Arena y Accesorios</h4>
            </div>
          </div>
              </div> */}
      </div>
      <div className="bloque-bloque-container">
        <div className="bloque-container">
          <div className="bloque row">
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 franja">
              <div className="bloque-franja">
                <div className="container-imagen-franja">
                  <div className="container-imagen-franja-caja"></div>
                  <div className="img-container">
                    <img
                      src={
                        (require =
                          "https://www.wohlpet.com/wp-content/uploads/2022/03/caja-de-entrega.png")
                      }
                      alt=""
                      className="imagen-franja"
                    />
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
                    <img
                      src={
                        (require =
                          "https://www.wohlpet.com/wp-content/uploads/2022/03/seguimiento-del-tiempo.png")
                      }
                      alt=""
                      className="imagen-franja"
                    />
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
                    <img
                      src={
                        (require =
                          "https://www.wohlpet.com/wp-content/uploads/2020/04/camion.png")
                      }
                      alt=""
                      className="imagen-franja"
                    />
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
                    <img
                      src={
                        (require =
                          "https://www.wohlpet.com/wp-content/uploads/2020/04/pago-1.png")
                      }
                      alt=""
                      className="imagen-franja"
                    />
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
        <section class="product">
          <button class="pre-btn">
            <img src={img.arrow} alt="" />
          </button>
          <button class="nxt-btn">
            <img src={img.arrow} alt="" />
          </button>
          <div class="product-container">
            <div class="product-card2">
              <div class="product-image2">
                <span class="discount-tag">50% off</span>
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
                <img
                  src={
                    (require =
                      "https://img.freepik.com/psd-premium/maqueta-bolsa-comida-gatos_23-2149449156.jpg?w=2000")
                  }
                  className="product-thumb"
                  alt=""
                />
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
