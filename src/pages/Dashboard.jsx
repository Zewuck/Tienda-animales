import React, { useContext } from "react";
import AuthApi from "../utils/AuthAPI";
import { logOut} from "../components/auth-api";
export default function Dashboard() {
  const authApi = useContext(AuthApi);
  return (
    <div className= "nav-margin">
      <h1>Dashboard</h1>
      <h2>Welcome</h2>
      <button
        onClick={async() => {
          const res = await logOut();
          authApi.setAuth(res.data.auth);
        }}
      >
        logOut
      </button>
    </div>
  );
}
