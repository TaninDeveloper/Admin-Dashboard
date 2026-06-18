
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg bg-white px-4 mb-4"
    style={{fontFamily: 'Vazir'}}>

      <div className="container-fluid">
        
        <div className="ms-auto d-flex align-items-center">

          <Link to= '/'
          style={{textDecoration: 'none'}}>
          
          <div className="me-3 text-end">

            <small className="text-muted d-block">مدیر ارشد</small>

            <span className="fw-bold"
             style={{ color: '#d63384' }}>طنین سلیمانیان </span>

          </div>
          
          </Link>

          <div className="rounded-circle shadow-sm border border-2 border-white" 
            style={{width: '45px', height: '45px', background: 'linear-gradient(45deg, #ff85c0, #d63384)' 
            }}>

            </div>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;