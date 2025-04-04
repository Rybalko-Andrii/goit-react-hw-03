import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ userContacts, deleteUser }) => {
  return (
    <>
      <ul>
        {userContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} deleteUser={deleteUser} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
