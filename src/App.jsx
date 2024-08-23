import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
