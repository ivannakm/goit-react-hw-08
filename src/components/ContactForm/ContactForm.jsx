import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
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
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    // const newContact = {
    //   ...values,
    //   id: crypto.randomUUID(),
    // };
    dispatch(addContact(values));
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
          <label htmlFor={nameId} className={css.formLabel}>
            Name
            <Field id={nameId} name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
        </div>
        <div className={css.fieldGroup}>
          <label htmlFor={numberId} className={css.formLabel}>
            Number
            <Field id={numberId} name="number" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
