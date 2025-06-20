import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import usePasswordToggle from "../hooks/usePasswordToggle";
import toast from "react-hot-toast";
import ToggleIcon from "../ToggleIcon/ToggleIcon";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = usePasswordToggle([
    "password",
    "confirmPassword",
  ]);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(login(values)).unwrap();
      toast.success(`${data.user.name} sucsesfully login`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };

  return (
    <div className={css.box}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <div className={css.fieldBox}>
            <label className={css.label}>
              Password
              <Field
                type={showPassword.password ? "text" : "password"}
                name="password"
                className={css.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
              <ToggleIcon
                onClick={() => setShowPassword("password")}
                showPassword={showPassword.password}
              />
            </label>
          </div>

          <div className={css.fieldBox}>
            <label className={css.label}>
              Password
              <Field
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                className={css.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
              <ToggleIcon
                onClick={() => setShowPassword("confirmPassword")}
                showPassword={showPassword.confirmPassword}
              />
            </label>
          </div>

          <button type="submit" className={css.button}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
