import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>Tienda mascotas</h1>
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/acerca"}>Acerca de</Link>
        </li>
        <li>
          <Link to={"/contacto"}>Contacto</Link>
        </li>

        <li>
          <Link to={"/tienda"}>tienda</Link>
        </li>
      </ul>
    </div>
  );
}
