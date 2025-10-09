# 🧭 React Router Advanced Routing

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?logo=reactrouter)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

---

## 📘 Overview

This project demonstrates **advanced routing techniques** in a React application using **React Router v6**.  
It includes working examples of:

- ✅ **Nested Routes**
- ✅ **Dynamic Routing**
- ✅ **Protected Routes (Authentication Required)**

Built with **Vite + React Router + React 18** for a fast, modern developer experience.

---

## 🚀 Features

| Feature | Description |
|----------|--------------|
| 🧩 **Nested Routes** | Manage sections like `/profile/details` and `/profile/settings` using `<Outlet>`. |
| 🔐 **Protected Routes** | Restrict access to certain routes unless authenticated. |
| 🔄 **Dynamic Routes** | Display user-generated content (e.g., `/blog/:postId`). |
| 🧭 **Navigation** | Client-side routing with `<Link>` and no page reloads. |

---

## 🛠️ Setup & Installation

### 1️⃣ Create the Project

```bash
npm create vite@latest react-router-advanced -- --template react
cd react-router-advanced
npm install react-router-dom
````

### 2️⃣ Run the Development Server

```bash
npm run dev
```

Then visit ➡️ **[http://localhost:5173/](http://localhost:5173/)**

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Profile/
│   │   ├── Profile.jsx
│   │   ├── ProfileDetails.jsx
│   │   ├── ProfileSettings.jsx
│   ├── Blog/
│       ├── Blog.jsx
│       ├── BlogPost.jsx
│
└── App.jsx
```

---

## 🧩 Routing Configuration (`App.jsx`)

```jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ProfileDetails from "./pages/Profile/ProfileDetails.jsx";
import ProfileSettings from "./pages/Profile/ProfileSettings.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogPost from "./pages/Blog/BlogPost.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Profile Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>

        {/* Dynamic Blog Route */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
```

---

## 🔐 Protected Route (`ProtectedRoute.jsx`)

```jsx
import { Navigate, Outlet } from "react-router-dom";

// Simulate authentication
const isAuthenticated = false; // change to true to test access

export default function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
```

---

## 🧠 How It Works

| Route Type    | Example Path       | Description                                |
| ------------- | ------------------ | ------------------------------------------ |
| **Nested**    | `/profile/details` | Renders sub-pages inside Profile layout.   |
| **Dynamic**   | `/blog/:postId`    | Loads post dynamically using route params. |
| **Protected** | `/profile`         | Redirects unauthenticated users to `/`.    |

---

## 🧪 Testing

1. Navigate between Home, About, Profile, and Blog pages.
2. Try accessing `/profile` with `isAuthenticated = false` → redirected to `/`.
3. Set `isAuthenticated = true` → Profile routes become accessible.
4. Visit `/blog/1`, `/blog/2`, etc. to test dynamic routing.

---

## 🖼️ Screenshots

> Replace these with your own screenshots once you run the app locally!

| Page         | Screenshot                                    |
| ------------ | --------------------------------------------- |
| 🏠 Home      | ![Home Page](docs/screenshots/home.png)       |
| 👤 Profile   | ![Profile Page](docs/screenshots/profile.png) |
| 📰 Blog Post | ![Blog Post](docs/screenshots/blogpost.png)   |

---

## 🧰 Built With

* ⚛️ [React 18](https://react.dev/)
* 🌐 [React Router v6](https://reactrouter.com/)
* ⚡ [Vite](https://vitejs.dev/)
* 💅 CSS / Tailwind (optional)

---

## 📜 License

This project is open-source under the **MIT License**.
Feel free to fork, modify, and share!

---

## 💡 Author

**Bismark Asare**
📧 [nhanhaasare94@gmail.com](nhanhaasare94@gmail.com)
🌐 [GitHub Profile](https://github.com/Ohms-Gh)

---

⭐ *If you found this project useful, don’t forget to give it a star on GitHub!* ⭐
