import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


export default function Contacto() {
  return (
    <>
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
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo ";
          }

          if (!valores.mensaje) {
            errores.mensaje = "Porfavor ingrese un mensaje";
          } else if (!/^[\s\S]{0,400}$/.test(valores.mensaje)) {
            errores.mensaje = "el mensaje solo puede tener maximo 400 caracteres ";
           }
          return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
          resetForm();
          console.log(valores);
        }}
      >
        {({errors,handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                name="nombre"
                id="nombre"
              />
              <ErrorMessage name="nombre" component={()=>(<div>{errors.nombre}</div>)}/>
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="email"
                name="correo"
                id="correo"
              />
              <ErrorMessage name="correo" component={()=>(<div>{errors.correo}</div>)}/>
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje</label>
              <Field name="mensaje" as="textarea" id="mensaje" rows="5" cols="30"></Field>
              <ErrorMessage name="mensaje" component={()=>(<div>{errors.mensaje}</div>)}/>

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
