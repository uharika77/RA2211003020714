import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
      <p className="text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Go Home</Link>
    </div>
  );
}

export default NotFound;
