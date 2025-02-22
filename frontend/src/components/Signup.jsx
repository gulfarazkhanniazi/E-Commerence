/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserState";

export default function SignupModal({ setIsSignup, setLoginOpen }) { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Name Validation (Allow spaces but not at the start)
  const handleNameChange = (e) => {
    let value = e.target.value;
    if (value.startsWith(" ")) return; // Prevent leading spaces
    setName(value);
  };

  // Email Validation (No spaces at all)
  const handleEmailChange = (e) => {
    let value = e.target.value.replace(/\s/g, ""); // Remove spaces if pasted
    setEmail(value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!name ||!email ||!password ||!confirmPassword) {
      setError("All fields are required.");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      dispatch(login(data.user));
      setIsSignup(false);
      setLoginOpen(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="flex flex-col justify-center items-center h-full select-none">
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <p className="m-0 text-[16px] font-semibold dark:text-white">Create an Account</p>
          <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
            Sign up to explore all features and get started.
          </span>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Name Input */}
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold text-xs text-gray-400">Full Name</label>
          <input
            placeholder="John Doe"
            className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>

        {/* Email Input */}
        <div className="w-full flex flex-col gap-2 mt-3">
          <label className="font-semibold text-xs text-gray-400">Email</label>
          <input
            placeholder="example@email.com"
            className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
            onKeyDown={(e) => e.key === " " && e.preventDefault()} // Prevent space typing
          />
        </div>

        {/* Password Input */}
        <div className="w-full flex flex-col gap-2 mt-3">
          <label className="font-semibold text-xs text-gray-400">Password</label>
          <input
            placeholder="••••••••"
            required
            className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password Input */}
        <div className="w-full flex flex-col gap-2 mt-3">
          <label className="font-semibold text-xs text-gray-400">Confirm Password</label>
          <input
            placeholder="••••••••"
            required
            className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-500 text-gray-900"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-5 py-1 px-8 bg-yellow-300 hover:bg-yellow-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
        >{loading? "Loading..." : "Sign Up"}</button>

        {/* Toggle to Login */}
        <p
          className="text-center text-sm pt-2 cursor-pointer hover:underline"
          onClick={() => setIsSignup(false)}
        >
          Already have an account? <span className="text-blue-500 text-lg">Login</span>
        </p>
      </div>
    </form>
  );
}
