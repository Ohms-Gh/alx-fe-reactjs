import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("User registered:", data);
      alert("User successfully registered!");
      resetForm();
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold mb-4">Register with Formik</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 w-80">
          {/* Username Field */}
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded"
          />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />

          {/* Email Field */}
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

          {/* Password Field */}
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />

          <button type="submit" className="bg-green-500 text-white py-2 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
