import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavBarLink({ children, to }) {
  return (
    <NavLink to={to} className="hover:text-stone-300 transition">
      {children}
    </NavLink>
  );
}

export default NavBarLink;
