import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/dashboard");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bglg">
      <div className="w-[600px] h-[600px]  rounded-l-xl shadow-lime-700">
        
      </div>
      <div className="w-[600px] h-[600px]  rounded-r-xl flex justify-center items-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px] h-[500px]"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-6 text-center text-2xl font-bold w-full">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-green-900  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
