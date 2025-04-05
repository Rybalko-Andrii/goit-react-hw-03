import React from "react";
import s from "./Contact.module.css";

const Contact = ({ contact: { name, number, id }, deleteUser }) => {
  return (
    <>
      <div className={s.div}>
        <h3>{name}</h3>
        <a href={`tel:${number}`}>{number}</a>
      </div>
      <button className={s.button} type="button" onClick={() => deleteUser(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
