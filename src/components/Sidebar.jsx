
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar  () {

  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { name: 'پیشخوان', icon: '🏠', path: '/' },
    { name: 'محصولات', icon: '💄', path: '/products', hasSub: true, id: 'products' },
    { name: 'سفارشات', icon: '📦', path: '/orders', hasSub: true, id: 'orders' },
    { name: 'مشتریان', icon: '👥', path: '/customers' },
    { name: 'تخفیف‌ها', icon: '🎫', path: '/coupons' },
    { name: 'نظرات', icon: '💬', path: '/comments' },
    { name: 'تنظیمات', icon: '⚙️', path: '/settings' },
  ];


  const productSubs = [
    { name: 'همه محصولات', path: '/products/all' },
    { name: 'عطر و ادکلن', path: '/products/perfume' },
    { name: 'مراقبت از پوست', path: '/products/skincare' },
    { name: 'مراقبت از مو', path: '/products/haircare' },
    { name: 'آرایشی', path: '/products/makeup' },
    { name: 'لوازم الکتریکی', path: '/products/electrical' },
  ];


  const orderSubs = [
    { name: 'همه سفارشات', path: '/orders/all' },
    { name: 'در انتظار پرداخت', path: '/orders/pending' },
    { name: 'در حال آماده‌سازی', path: '/orders/processing' },
    { name: 'ارسال شده', path: '/orders/shipped' },
    { name: 'لغو شده', path: '/orders/cancelled' },
  ];


  const getSubItems = (id) => {
    if (id === 'products') return productSubs;
    if (id === 'orders') return orderSubs;
    return [];
  };


  const toggleMenu = (id) => {
    if (openMenu === id) {
      setOpenMenu(null); 
    } else { 
      setOpenMenu(id); 
    }
  };


  const linkStyle = (path) => ({
    backgroundColor: location.pathname === path ? '#fff0f6' : 'transparent',
    color: location.pathname === path ? '#d63384' : '#555',
    borderRadius: '10px',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    textDecoration: 'none',
  });


  const subLinkStyle = (path) => ({
    color: location.pathname === path ? '#d63384' : '#777',
    fontSize: '0.85rem',
    padding: '8px 45px', 
    display: 'block',
    textDecoration: 'none',
    borderRadius: '8px',
    backgroundColor: location.pathname === path ? '#fff9fb' : 'transparent',
    marginBottom: '2px',
  });


  return (
    <div className="col-md-2 vh-100 p-3 shadow-sm" style={{ backgroundColor: '#fff', position: 'sticky', top: 0 }}>

      <div className="text-center mb-4">

        <h4 style={{ color: '#d63384', fontWeight: '900', letterSpacing: '1px' }}>
            PINKY GIRL
        </h4>

        <div style={{ height: '3px', width: '40px', backgroundColor: '#ff85c0', margin: 'auto' }}>
        </div>
      </div>

      <div className="mb-4">

         <input 
            type="search" 
            className="form-control" 
            placeholder="جستجو..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
            backgroundColor: '#fff0f6', 
            minWidth: '140px',
            border: '1px solid #ede1e6ff',
            borderRadius: '10px',
            padding: '8px 15px',
            fontSize: '0.9rem'
           }} />


        {searchTerm && (

          <small style={{ color: '#d63384', display: 'block', marginTop: '5px' }}>

            {searchTerm}

          </small>
        )}

      </div>

      <ul className="nav flex-column">

        {menuItems.map((item) => (

          <li className="nav-item" key={item.path}>

            {item.hasSub ? (

              <>

                <div className="nav-link" 
                  style={{ ...linkStyle(item.path), cursor: 'pointer' }}

                  onClick={() => toggleMenu(item.id)}>

                  <span>
                    <span className="me-2">{item.icon}</span> 
                    {item.name}
                  </span>

                  <small>{openMenu === item.id ? '➖' : '➕'}</small>

                </div>

                {openMenu === item.id && (

                  <div className="mb-2">

                    {getSubItems(item.id).map((sub) => (

                      <Link key={sub.path} to={sub.path} 
                        style={subLinkStyle(sub.path)}>

                        {sub.name}

                      </Link>
                    ))}
                  </div>
                )}

              </>

            ) : (

              <Link to={item.path} className="nav-link" 
                style={linkStyle(item.path)}>

                <span>
                    <span className="me-2">{item.icon}</span> 
                    {item.name}
                </span>

              </Link>
            )}

          </li>

        ))}

      </ul>

    </div>
  );
};

export default Sidebar;
