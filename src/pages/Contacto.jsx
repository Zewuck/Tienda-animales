import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../contacto.css";
import { img } from "../assets/imagenes.js";

export default function Contacto() {
  return (
    <>

      {/* FORMIK */}
      <div className="contact1">
        <div className="container-contact1">
          <div className="contact1-pic js-tilt" data-tilt>
            <img src={img.contacto} className="imagen-contacto" alt="IMG" />
          </div>
          <Formik
            initialValues={{
              nombre: "",
              correo: "",
              subject: "",
              mensaje: "",
            }}
            validate={(valores) => {
              const errores = {};
              if (!valores.nombre) {
                errores.nombre = "Porfavor ingrese un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre =
                  "El nombre solo puede contener letras y espacios ";
              }

              if (!valores.correo) {
                errores.correo = "Porfavor ingrese un correo electronico";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.correo
                )
              ) {
                errores.correo =
                  "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo ";
              }
              if (!valores.subject) {
                errores.subject = "Porfavor ingrese un asunto";
              } else if (!/^[\s\S]{0,50}$/.test(valores.subject)) {
                errores.subject =
                  "El asunto solo puede tener maximo 50 caracteres ";
              }

              if (!valores.mensaje) {
                errores.mensaje = "Porfavor ingrese un mensaje";
              } else if (!/^[\s\S]{0,400}$/.test(valores.mensaje)) {
                errores.mensaje =
                  "El mensaje solo puede tener maximo 400 caracteres ";
              }
              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log(valores);
            }}
          >
            {({ errors, handleSubmit, isSubmitting }) => (
              <Form
                onSubmit={handleSubmit}
                className="contact1-form validate-form"
              >
                <span className="contact1-form-title">Get in touch</span>

                <div className="wrap-input1 validate-input">
                  <Field
                    className="input1"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Name"
                  />
                  <span className="shadow-input1"></span>
                  <ErrorMessage
                    name="nombre"
                    component={() => <div>{errors.nombre}</div>}
                  />
                </div>
                <div className="wrap-input1 validate-input">
                  <Field
                    className="input1"
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="correo"
                    component={() => <div>{errors.correo}</div>}
                  />
                </div>
                <div className="wrap-input1 validate-input">
                  <Field
                    className="input1"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                  <ErrorMessage
                    name="subject"
                    component={() => <div>{errors.subject}</div>}
                  />
                </div>
                <div className="wrap-input1 validate-input">
                  <Field
                    className="input1"
                    name="mensaje"
                    as="textarea"
                    id="mensaje"
                    rows="5"
                    cols="30"
                    placeholder="Message"
                  ></Field>
                  <ErrorMessage
                    name="mensaje"
                    component={() => <div>{errors.mensaje}</div>}
                  />
                </div>

                <div className="container-contact1-form-btn button">
                  <button className="contact1-form-btn button">
                    <span>
                      Send Email
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>

                {/*className="contact1-form-btn button" */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
