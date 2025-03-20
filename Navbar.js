import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SocialApp</h1>
        <div>
          <Link to="/" className="mx-4 hover:underline">Home</Link>
          <Link to="/profile" className="mx-4 hover:underline">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
