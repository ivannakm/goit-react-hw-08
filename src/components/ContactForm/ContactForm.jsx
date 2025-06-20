import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (contact, actions) => {
    console.log("Submitting contact to API:", contact);
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fieldGroup}>
          <label htmlFor="name" className={css.formLabel}>
            Name
          </label>
          <Field id="name" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.fieldGroup}>
          <label htmlFor="number" className={css.formLabel}>
            Number
          </label>
          <Field id="number" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
