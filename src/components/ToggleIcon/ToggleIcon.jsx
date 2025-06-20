import css from "./ToggleIcon.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ToggleIcon = ({ onClick, showPassword }) => {
  return (
    <button className={css.iconBtn} onClick={onClick}>
      {showPassword ? <FaEye /> : <FaEyeSlash />}
    </button>
  );
};

export default ToggleIcon;
