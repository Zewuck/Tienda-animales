import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../contacto.css";
import { img } from "../assets/imagenes.js";

export default function Contacto() {
  return (
    <>
    <div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src={img.contacto} className="imagen-contacto" alt="IMG"/>
			</div>

			<form className="contact1-form validate-form">
				<span className="contact1-form-title">
					Get in touch
				</span>

				<div className="wrap-input1 validate-input" data-validate = "Name is required">
					<input className="input1" type="text" name="name" placeholder="Name"/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input1" type="text" name="email" placeholder="Email"/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Subject is required">
					<input className="input1" type="text" name="subject" placeholder="Subject"/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="message" placeholder="Message"></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn button">
					<button className="contact1-form-btn button">
						<span>
							Send Email
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
      
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          mensaje: "",
        }}
        validate={(valores) => {
          const errores = {};
          if (!valores.nombre) {
            errores.nombre = "Porfavor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios ";
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

          if (!valores.mensaje) {
            errores.mensaje = "Porfavor ingrese un mensaje";
          } else if (!/^[\s\S]{0,400}$/.test(valores.mensaje)) {
            errores.mensaje =
              "el mensaje solo puede tener maximo 400 caracteres ";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log(valores);
        }}
      >
        {({ errors, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field type="text" name="nombre" id="nombre" />
              <ErrorMessage
                name="nombre"
                component={() => <div>{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field type="email" name="correo" id="correo" />
              <ErrorMessage
                name="correo"
                component={() => <div>{errors.correo}</div>}
              />
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje</label>
              <Field
                name="mensaje"
                as="textarea"
                id="mensaje"
                rows="5"
                cols="30"
              ></Field>
              <ErrorMessage
                name="mensaje"
                component={() => <div>{errors.mensaje}</div>}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
