import React, {useContext} from "react";
import AuthApi from '../utils/AuthAPI';
export default function Dashboard() {
  const authApi = useContext(AuthApi);
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={()=>authApi.setAuth(false)}>logOut</button>
    </>
  );
}
