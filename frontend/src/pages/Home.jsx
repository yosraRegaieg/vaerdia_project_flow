import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-500 text-white p-10 text-3xl gap-4">
      <h1>Welcome to ProjectFlow 🚀</h1>
      <div className="flex gap-4">
        <Link className="bg-white text-purple-500 px-4 py-2 rounded" to="/login">
          Sign In
        </Link>
        <Link className="bg-white text-purple-500 px-4 py-2 rounded" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}