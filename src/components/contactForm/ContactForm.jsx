import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm({ addContact }) {
  const UserSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    usernumber: Yup.string()
      .min(10, "Too short!")
      .max(13, "Too long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(), // Generate a unique ID
      name: values.username,
      number: values.usernumber,
    };

    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", usernumber: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <Field type="text" name="username" placeholder="Name" />
          <ErrorMessage name="username" component="div" />
        </div>
        <div>
          <Field type="text" name="usernumber" placeholder="Number" />
          <ErrorMessage name="usernumber" component="div" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
