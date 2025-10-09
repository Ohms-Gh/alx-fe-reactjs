🧠 React Query Demo

A simple React application demonstrating advanced data fetching, caching, and updating using React Query.
This project fetches posts from the JSONPlaceholder API
 and shows how React Query optimizes data handling for better performance and user experience.

🚀 Features

⚡ Efficient Data Fetching: Uses useQuery to fetch posts asynchronously.

🔁 Smart Caching: Automatically caches API responses, minimizing unnecessary network requests.

🔄 On-Demand Refetching: Includes a manual refresh button to demonstrate React Query’s refetching capability.

🧩 Configurable Stale Time & Cache Time: Demonstrates how to fine-tune React Query’s caching behavior.

🧰 Integrated React Query Devtools: Visualize queries, cache states, and background updates in real-time.

🛠️ Technologies Used

React 18+

Vite (for fast development setup)

React Query

Axios (for API calls)

Tailwind CSS (for styling)

@tanstack/react-query-devtools (for debugging)

📦 Installation & Setup

Follow these steps to run the project locally:

# 1. Create the project
npm create vite@latest react-query-demo -- --template react

# 2. Move into the project folder
cd react-query-demo

# 3. Install dependencies
npm install react-query axios @tanstack/react-query-devtools

# 4. Start the development server
npm run dev


Then open the provided local URL (usually http://localhost:5173) in your browser.

🌐 API Source

This project uses the JSONPlaceholder API, a free fake REST API for testing and prototyping:

https://jsonplaceholder.typicode.com/posts

🧩 Components Overview

App.jsx:
Initializes the React Query client and provides it to the entire app via the QueryClientProvider.
Integrates the ReactQueryDevtools for inspecting query behavior.

PostsComponent.jsx:
Uses the useQuery hook to fetch and display posts.
Includes a loading state, error handling, and a button to manually refetch posts.

🧠 Learning Objectives

This project demonstrates:

Setting up React Query in a React application.

Managing data fetching and caching efficiently.

Implementing refetching and understanding how React Query reduces redundant API calls.

Observing cache behavior using the React Query Devtools.

🧪 Testing the App

Open Network tab in browser DevTools:

On first load → API request is made.

On navigating away and back → Data is served instantly from cache.

Click the Refetch button:

Watch React Query update the cache with fresh data.

Open React Query Devtools:

Inspect query states, cache duration, and stale times.

🧰 Recommended Tools

React Query Devtools Documentation

JSONPlaceholder API Docs

React Query Official Docs

📄 License

This project is open source and available under the MIT License
.
