// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// const Home = () => (
//   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//     <h1 className="text-4xl font-bold text-blue-600">Welcome to Social Media Analytics</h1>
//     <p className="text-gray-700 mt-4">Track and analyze your social media presence.</p>
//     <Link to="/about" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Learn More</Link>
//   </div>
// );

// const About = () => (
//   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//     <h1 className="text-3xl font-bold text-green-600">About This App</h1>
//     <p className="text-gray-700 mt-4">This app helps you analyze your social media performance.</p>
//     <Link to="/" className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg">Go Home</Link>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <Router>
//       <div className="bg-gray-100 min-h-screen">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";

function App() {
  return (
    <div>
      <h1>Social Media Web App</h1>
      <p>Welcome to the app! 🚀</p>
    </div>
  );
}

export default App;
