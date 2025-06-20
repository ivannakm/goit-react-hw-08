import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const addActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink className={addActive} to="/contacts">
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
