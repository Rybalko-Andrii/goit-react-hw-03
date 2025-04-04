import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { getLocal, setLocal } from "../LocalStorage/LocalStorage";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = getLocal("contacts");
    return savedContacts && Object.keys(savedContacts).length > 0
      ? savedContacts
      : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setLocal("contacts", contacts);
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteUser = (userId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== userId);
    });
  };

  const visibleContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
    );
  });

  return (
    <ul >
      <li >
        <h1 >Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
      </li>
      <li >
        <ContactList userContacts={visibleContacts} deleteUser={deleteUser} />
      </li>
    </ul>
  );
};

export default App;
