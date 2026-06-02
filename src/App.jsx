
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
// import Products from './pages/Products.jsx';


function App() {

  return (

    <Router>
      
      <div className="container-fluid p-0">

        <div className="row g-0">

          <div className="col-md-2">

            <Sidebar />

          </div>

          <div className="col-md-10 bg-light">

            <Navbar />

            <div className="p-4">

              <Routes>

                <Route path="/" element={<Dashboard />} />

                {/* <Route path="/products/" element={<Products />} /> */}

              </Routes>

            </div>

          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;







