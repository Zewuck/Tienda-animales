import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUp } from "../components/auth-api";

import AuthApi from "../utils/AuthAPI";

export default function Register() {
  const authApi = useContext(AuthApi);
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={(valores) => {
          const errores = {};
          if (!valores.name) {
            errores.name = "Porfavor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre solo puede contener letras y espacios ";
          }

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
          const name = values.name;
          const email = values.email;
          const password = values.password;
          const res = await signUp({ name, email, password });
          console.log(res);
          if (res.data.auth) {
            authApi.setAuth(true);
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <label htmlFor="Nombre">Nombre</label>
              <Field name="name" id="name" type="text" required />
              <ErrorMessage
                name="name"
                component={() => <div>{errors.name}</div>}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" id="email" type="text" required />
              <ErrorMessage
                name="email"
                component={() => <div>{errors.email}</div>}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <Field name="password" id="password" type="password" required />
              <ErrorMessage
                name="password"
                component={() => <div>{errors.password}</div>}
              />
            </div>
            <button type="submit">Enviar</button>
            <ErrorMessage component={()=><div>{errors.form}</div>}/>
            
          </Form>
        )}
      </Formik>
    </div>
  );
}
