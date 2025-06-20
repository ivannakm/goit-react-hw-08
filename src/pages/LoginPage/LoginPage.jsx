import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // If logged in, redirect to contacts
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  return (
    <div lassName={css.box}>
      <h2 className={css.title}>Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
