import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports for react-router-dom v6
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li> {/* Changed <a> to <Link> for client-side navigation */}
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </nav>

        {/* Replace Switch with Routes and use element prop */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use 'element' with JSX */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
