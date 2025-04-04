import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import React, { useId } from "react";

import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?\d{5,13}$/, "Number must be 5-13 digits")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />

          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} placeholder="+380" />
          <ErrorMessage name="number" component="span" />

          <button type="submit" disabled={!isValid || !dirty}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
