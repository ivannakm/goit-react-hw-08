import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // If logged in, redirect to contacts
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  const handleRegister = (credentials) => {
    dispatch(register(credentials));
  };

  return (
    <div className={css.box}>
      <h2 className={css.title}>Register</h2>
      <RegistrationForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
