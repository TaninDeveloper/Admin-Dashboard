
import React from 'react';

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg bg-white px-4 mb-4">

      <div className="container-fluid">

        <div className="d-flex w-50 shadow-sm rounded-pill px-3 py-1 border">

          {/* <input 
            className="form-control border-0 bg-transparent shadow-none" 
            type="search" 
            placeholder="دنبال چی می‌گردی طنین؟..." 
          />
          <button className="btn btn-link text-pink p-0" style={{ color: '#d63384' }}>🔍</button> */}

        </div>
        
        <div className="ms-auto d-flex align-items-center">

          <div className="me-3 text-end">

            <small className="text-muted d-block">مدیر ارشد</small>

            <span className="fw-bold" style={{ color: '#d63384' }}>طنین سلیمانیان </span>

          </div>

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