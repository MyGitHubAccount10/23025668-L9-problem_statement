import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rp-logo.a76b4d6a8e6239425057.png";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/diplomas" className={getClass}>
          Diplomas
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
