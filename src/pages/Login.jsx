import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signIn } from "../components/auth-api";
import { img } from "../assets/imagenes.js";
import AuthApi from "../utils/AuthAPI";
import "../fondoinicio.css";

export default function Login() {
  const authApi = useContext(AuthApi);
  return (
    <div>
      <section className="vh-150 nav-margin" style={{ background: "#ffd0e0" }}>
        <div
          style={{
            background:
              "url(https://img.freepik.com/vector-premium/lindo-patron-transparente-brillante-lapiz-crayon-textura-animal-mascota-pata-colores-pastel_499817-58.jpg?w=740)",
            objectFit: "cover",
            opacity: "1",
          }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-sm-6 col-lg-6 col-xl-4">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-12 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <img
                              src={img.logo}
                              style={{ color: "#ff6219" }}
                              className="logo-login"
                            />
                          </div>

                          <h5
                            className="fw-normal mb-3 pb-3 boogaloo"
                            style={{ letterSpacing: "1px", fontSize: "30px" }}
                          >
                            Inicia Sesión
                          </h5>

                          <div className="wrap-input1 validate-input form-outline mb-4">
                            <input
                              className="input1"
                              type="correo"
                              name="correo"
                              id="correo"
                              placeholder="Email"
                            />
                          </div>

                          <div className="wrap-input1 validate-input form-outline mb-4">
                            <input
                              className="input1"
                              type="password"
                              name="Password"
                              id="password"
                              placeholder="Password"
                            />
                          </div>

                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-pink btn-lg btn-block button"
                              type="button"
                            >
                              Login
                            </button>
                          </div>

                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            ¿No tienes cuenta?{" "}
                            <a href="/register" style={{ color: "#393f81" }}>
                              Entre aquí
                            </a>
                          </p>
                          <a href="#!" className="small text-muted">
                            Terms of use Privacy policy
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          const errores = {};

          if (!valores.email) {
            errores.email = "Porfavor ingrese un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo ";
          }

          if (!valores.password) {
            errores.password = "Porfavor ingrese una contraseña";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
              valores.password
            )
          ) {
            errores.password = `la contraseña debe tener de 8 a 25 caracteres con una combinación de letras, números y símbolos`;
          }
          return errores;
        }}
        onSubmit={async (values) => {
          const email = values.email;
          const password = values.password;
          const res = await signIn({ email, password });
          console.log(res);
          if (res.data.auth) {
            authApi.setAuth(true);
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" id="email" type="text" />
              <ErrorMessage
                name="email"
                component={() => <div>{errors.email}</div>}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <Field name="password" id="password" type="password" />
              <ErrorMessage
                name="password"
                component={() => <div>{errors.password}</div>}
              />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
