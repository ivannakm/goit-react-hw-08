import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the Phonebook App!</h1>
      <p className={css.text}>
        Manage your contacts easily. Register or log in to get started.
      </p>
      <div className={css.buttons}>
        <Link to="/register" className={css.link}>
          Register
        </Link>
        <Link to="/login" className={css.link}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
