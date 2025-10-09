# 📝 React Form Handling — Controlled Components & Formik

This project demonstrates how to build and manage a **user registration form** in React using two different approaches:
1. **Controlled Components** — manually managing form state with React hooks.
2. **Formik + Yup** — handling complex form logic and validation more efficiently.

---

## 🚀 Project Setup

### 1. Create a New React Project

```bash
npm create vite@latest form-handling-react -- --template react
cd form-handling-react
npm install
2. (Optional) Start the Development Server
bash
Copy code
npm run dev
This will start the app on http://localhost:5173.

🧱 Step 1: Controlled Components Form
In this step, you’ll manage the form manually using React’s useState and simple validation.

📁 File Structure
css
Copy code
src/
 ┣ components/
 ┃ ┗ RegistrationForm.jsx
 ┣ App.jsx
 ┗ main.jsx
🧠 src/components/RegistrationForm.jsx
This component:

Uses useState for form data and validation.

Performs a mock API call on submit.

Validates that all fields are filled.

jsx
Copy code
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("User registered:", data);
      alert("User successfully registered!");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mx-auto mt-10">
      <h2 className="text-xl font-bold text-center">Register</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
🧭 Step 2: Transition to Formik
Formik makes handling forms simpler by automatically managing state, validation, and submission.

Install Formik and Yup
bash
Copy code
npm install formik yup
📁 Create src/components/FormikForm.jsx
jsx
Copy code
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

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

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-4 w-80">
          <Field name="username" type="text" placeholder="Username" className="border p-2 rounded" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />

          <Field name="email" type="email" placeholder="Email" className="border p-2 rounded" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

          <Field name="password" type="password" placeholder="Password" className="border p-2 rounded" />
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
🔄 Switching Between Forms
To test both forms, just import the one you want in App.jsx.

jsx
Copy code
// import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <FormikForm />
    </div>
  );
}

export default App;
⚙️ Optional: TailwindCSS Setup
For consistent and quick styling:

bash
Copy code
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Then edit tailwind.config.js:

js
Copy code
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
And add these lines to src/index.css:

css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
📡 Mock API
Both forms use the mock API endpoint:

arduino
Copy code
https://jsonplaceholder.typicode.com/users
This simulates a successful user registration.

🧠 Learning Outcomes
By completing this project, you will:

✅ Understand controlled components in React.
✅ Learn Formik’s declarative form management.
✅ Implement schema-based validation with Yup.
✅ Practice API integration with fetch().

🏁 Run the Project
bash
Copy code
npm run dev
Then visit http://localhost:5173 in your browser.

📜 License
Created for educational purposes — Form Handling in React Tutorial.
