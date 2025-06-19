import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  console.log(contact);
  return (
    <div className={css.contact}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
