import { Link } from "react-router-dom";
import {img} from '../assets/imagenes.js'

import "../fondoinicio.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"}>
          <img src={img.logo} className="logo" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/acerca"}>
                  Acerca de
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to={"/contacto"}>
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to={"/tienda"}>
                  tienda
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
