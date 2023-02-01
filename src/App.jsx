import React, { useState } from "react";
import Routes from './routes/routes'
import { BrowserRouter as Router } from "react-router-dom";
import AuthApi from "./utils/AuthAPI";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
     <AuthApi.Provider>
      <Router>
        <Routes></Routes>
      </Router>
    </AuthApi.Provider>
    </div>
  );
};



export default App;
