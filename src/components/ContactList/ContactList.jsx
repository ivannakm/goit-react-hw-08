import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // const visibleContacts = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // });
  return (
    <>
      {" "}
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              contact={contact}
              onDelete={(id) => dispatch(deleteContact(id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
