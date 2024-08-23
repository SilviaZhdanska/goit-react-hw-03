import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ContactForm(){
  const UserSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Is required!"),
    usernumber: Yup.number()
      .min(10, "Too short!")
      .max(13, "Too long!")
      .required("Is required!"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
          <Formik initialValues={{ username: "", usernumber: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
      >
          <Form>
              <div>
                  <Field type="text" name='username' />
              <ErrorMessage name='username'/>
              </div>

              <div>
                  <Field type='text' name='usernumber' />
                  <ErrorMessage name="usernumber"/>
              </div>
              
          </Form>
          <Formik/>
  );
}
