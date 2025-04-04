import React from "react";

const Contact = ({ contact: { name, number, id }, deleteUser }) => {
  return (
    <>
      <div>
        <h3>{name}</h3>
        <a href={`tel:${number}`}>{number}</a>
      </div>
      <button type="button" onClick={() => deleteUser(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
