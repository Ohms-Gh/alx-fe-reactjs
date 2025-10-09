import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
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
        value={username}           
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}              
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}      
        onChange={(e) => setPassword(e.target.value)}
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
