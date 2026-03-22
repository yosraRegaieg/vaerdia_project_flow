import { useState } from "react";
import { register } from "../services/authService";

export default function Register({ switchTab }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError(""); setLoading(true);
    try {
      await register(form);
      switchTab(); // go back to login
      setForm({ name: "", email: "", password: "" });
    } catch {
      setError("Registration failed. Email may already exist.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => e.key === "Enter" && handleSubmit();

  return (
    <div className="card w-full bg-white rounded-2xl p-8 shadow-lg">
      <div className="card-title text-xl font-bold mb-1">Register</div>
      <div className="card-sub text-sm text-gray-400 mb-6">Join the VAERDIA team</div>

      <div className="field mb-3">
        <label className="text-xs font-semibold text-gray-600 uppercase">Full Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onKeyDown={handleKey}
          className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-700 focus:ring focus:ring-blue-100"
        />
      </div>

      <div className="field mb-3">
        <label className="text-xs font-semibold text-gray-600 uppercase">Email</label>
        <input
          type="email"
          placeholder="you@vaerdia.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onKeyDown={handleKey}
          className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-700 focus:ring focus:ring-blue-100"
        />
      </div>

      <div className="field mb-3">
        <label className="text-xs font-semibold text-gray-600 uppercase">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          onKeyDown={handleKey}
          className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-700 focus:ring focus:ring-blue-100"
        />
      </div>

      {error && <div className="error-box text-red-600 bg-red-100 p-2 rounded mb-3">{error}</div>}

      <button
        className="submit-btn w-full bg-gradient-to-br from-[#0a1628] to-[#0f4480] text-white py-3 rounded-lg font-medium hover:shadow-lg disabled:opacity-50"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Loading..." : "Create Account →"}
      </button>

      <div className="text-xs text-center mt-4">
        Already have an account?{" "}
        <button onClick={switchTab} className="text-blue-600 font-medium">Login</button>
      </div>
    </div>
  );
}