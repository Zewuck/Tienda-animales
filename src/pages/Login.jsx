import React,{useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthApi from '../utils/AuthAPI';

export default function Login() {
  const authApi = useContext(AuthApi);
  return (
    <div>
      <Formik
        initialValues={{
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
