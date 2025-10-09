# 🧩 React Form Handling — Controlled Components & Formik

![React](https://img.shields.io/badge/React-18.0.0-61DAFB?logo=react&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-3.0.0-ff69b4?logo=formik&logoColor=white)
![Yup](https://img.shields.io/badge/Yup-Validation-success)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

A practical React project demonstrating **form management** using:
- ✅ Controlled Components (manual state management)
- ⚙️ Formik + Yup (advanced form handling and validation)

---

## 🚀 Overview

This project walks you through **building and managing a user registration form** in React using two different approaches:

1. **Controlled Components** — manually handle input values and validation using React’s `useState`.
2. **Formik with Yup** — leverage Formik’s built-in form state management and Yup for schema-based validation.

Both approaches use a **mock API endpoint** to simulate user registration.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|----------|
| ⚛️ React (Vite) | Frontend framework |
| 🎯 Formik | Form management |
| ✅ Yup | Validation schema library |
| 💅 TailwindCSS *(optional)* | Styling framework |
| 🌐 Fetch API | Mock API communication |

---

## 📦 Project Setup

1. **Create the Project**
   - Use Vite to set up a new React project.
   - Navigate into the project directory.

2. **Install Dependencies**
   - React and Vite come by default.
   - Install Formik and Yup for the Formik step.
   - Optionally, install TailwindCSS for styling.

3. **Run the Development Server**
   - Start the app and open it in your browser at `http://localhost:5173`.

---

## 🧱 Step 1: Controlled Components

In this stage, you’ll:
- Build a **user registration form** with fields for username, email, and password.
- Use `useState` to manage form inputs and validation.
- Display basic validation messages.
- Submit the form data to a **mock API endpoint**.

This approach helps you understand the fundamentals of **form control in React**.

---

## 🚀 Step 2: Formik + Yup Integration

Next, you’ll refactor the form using **Formik**, making it cleaner and more scalable.

You will:
- Use Formik’s `<Form>`, `<Field>`, and `<ErrorMessage>` components.
- Replace manual validation with **Yup schema validation**.
- Simplify form submission logic using Formik’s `onSubmit` handler.
- Reset form state after successful submission.

Formik and Yup make form management **more declarative and maintainable**.

---

## 🎨 Optional Styling with TailwindCSS

You can use TailwindCSS to quickly style your form components with clean and responsive UI utilities.

**Optional setup includes:**
- Installing TailwindCSS and PostCSS.
- Configuring `tailwind.config.js`.
- Adding Tailwind directives to your main stylesheet.

---

## 📡 Mock API Endpoint

All form submissions (for both methods) send data to the mock API:
