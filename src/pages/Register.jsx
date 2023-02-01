import React, {useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthApi from '../utils/AuthAPI';

export default function Register() {
  const authApi = useContext(AuthApi);
  
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          username: "",
          password: "",
        }}
        onSubmit={(values)=>{
          console.log(values)
          authApi.setAuth(true);
        }}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="Nombre">Nombre</label>
              <Field name="name" id="name" type="text" required />
            </div>
            <div>
              <label htmlFor="username">Usuario</label>
              <Field name="username" id="username" type="text" required />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <Field name="password" id="password" type="password" required />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
