
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProductCategory from './pages/ProductCategory.jsx';
import Coupons from './pages/Coupons.jsx';
import Comments from './pages/Comments.jsx';
import OrdersList from './pages/OrdersList.jsx';
import Customers from './pages/Customers.jsx';
import Settings from './pages/Settings.jsx';



function App() {

  return (

    <Router>

      <div className="container-fluid p-0">

        <div className="d-flex">
          
          <div style={{ width: '250px', flexShrink: 0 }}>
            <Sidebar />
          </div>

          <div className="flex-grow-1 bg-light" 
          style={{ minHeight: '100vh' }}>
            <Navbar />

            <div className="p-4">

              <Routes>

                <Route path="/" element={<Dashboard />} />  

                <Route path="/customers" element={<Customers />} />

                <Route path="/coupons" element={<Coupons />} />

                <Route path="/comments" element={<Comments />} />

                <Route path="/orders/:status" element={<OrdersList />} />

                <Route path="/orders" element={<OrdersList />} />

                <Route path="/products/:category" element={<ProductCategory />} />

                <Route path="/products" element={<ProductCategory />} />

                <Route path="/settings" element={<Settings />} />

              </Routes>

            </div>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;







