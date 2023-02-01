import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Login() {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Usuario</label>
              <Field name="username" id="username" type="text"/>
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <Field name="password" id="password" type="password"/>
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
