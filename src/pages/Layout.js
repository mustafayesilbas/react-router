import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ width: "30%" }}>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
