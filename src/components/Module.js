import { Outlet, NavLink } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const module = getModule();
  return (
    <div className="container">
      <h1>Module</h1>

      <ul className="diplomas">
        {module.map(mod => (
          <li key={mod.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "module-active" : null
              }
              to={mod.desc}
            >
              {mod.name}
              {mod.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}