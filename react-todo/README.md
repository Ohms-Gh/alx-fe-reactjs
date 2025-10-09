# 🧾 React Todo App

A simple **React Todo List** application that allows users to **add**, **delete**, and **toggle** todos.  
Built with **React**, tested with **Jest** and **React Testing Library**.

---

## 🚀 Features

- ✅ Add new todos
- ✏️ Toggle completion status by clicking a todo
- ❌ Delete todos individually
- 🧪 Fully tested with Jest and React Testing Library
- ⚡ Simple state management using React hooks

---

## 🏗 Project Setup

### 1️⃣ Create the React App

```bash
npx create-react-app react-todo
cd react-todo
2️⃣ Install Dependencies
bash
Copy code
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
These dependencies enable the Jest testing environment and DOM-specific assertions.

3️⃣ Folder Structure
css
Copy code
react-todo/
│
├── src/
│   ├── components/
│   │   └── TodoList.js
│   ├── __tests__/
│   │   └── TodoList.test.js
│   └── setupTests.js
└── package.json
⚙️ Component Details
📁 src/components/TodoList.js
Implements the main functionality:

Displays a list of initial demo todos

Adds a new todo from user input

Toggles a todo’s completion by clicking it

Deletes a todo by clicking the delete button

🧩 src/setupTests.js
Sets up the test environment by importing the DOM matchers:

js
Copy code
import "@testing-library/jest-dom";
🧪 Testing
Run All Tests
bash
Copy code
npm test
Test Cases Include:
Initial Render — verifies that demo todos are displayed

Add Todo — simulates adding a new todo

Toggle Todo — ensures todos toggle between completed and not completed

Delete Todo — confirms todos are removed properly

📦 package.json Configuration
Ensure your scripts and Jest setup look like this:

json
Copy code
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "jest",
  "eject": "react-scripts eject"
},
"jest": {
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
  "moduleFileExtensions": ["js", "jsx"]
}
🧠 Example Tests
Example from src/__tests__/TodoList.test.js:

jsx
Copy code
test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add new todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Write Tests" } });
  fireEvent.click(button);

  expect(screen.getByText("Write Tests")).toBeInTheDocument();
});
✅ Expected Test Output
bash
Copy code
PASS  src/__tests__/TodoList.test.js
  TodoList Component
    ✓ renders initial todos (35 ms)
    ✓ adds a new todo (22 ms)
    ✓ toggles a todo's completion status (18 ms)
    ✓ deletes a todo (25 ms)
📘 Summary
Functionality	Verified By Tests
Initial Render	✅
Add Todo	✅
Toggle Todo	✅
Delete Todo	✅

🧩 Technologies Used
React 18

Jest

React Testing Library

🧑‍💻 Author
Bismark Asare
📧 [nhanhaasare94@gmail.com]
🌐 github.com/Ohms-Gh
