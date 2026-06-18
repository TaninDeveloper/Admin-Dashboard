
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {

  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); // مدیریت باز/بسته شدن در موبایل

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
    setOpenMenu(openMenu === id ? null : id);
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
    transition: '0.2s'
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

  const filteredMenu = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div style={{fontFamily: 'Vazir'}}>

      <button className="btn d-md-none shadow-sm" 
      onClick={() => setIsOpen(!isOpen)}
      style={{position: 'fixed', top: '15px', left: '15px', zIndex: 1100, backgroundColor: '#d63384', color: 'white', borderRadius: '12px', width: '45px', height: '45px', border: 'none'}}>
        {isOpen ? '✕' : '☰'}
      </button>

      <style>{`
        .sidebar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          background-color: #fff;

          z-index: 1050;
          transition: transform 0.3s ease-in-out;
          width: 260px;
          padding: 20px;
          box-shadow: 2px 0 15px rgba(0,0,0,0.05);
        }
        @media (max-width: 767.98px) {
          .sidebar-wrapper {
            transform: translateX(${isOpen ? '0' : '-100%'});
          }
        }
        @media (min-width: 768px) {
          .sidebar-wrapper {
            transform: translateX(0);
          }
        }
      `}
      </style>

      <div className="sidebar-wrapper">

        <div className="text-center mb-4">

          <h4 style={{ color: '#d63384', fontWeight: '900', letterSpacing: '1px' }}>PINKY GIRL</h4>

          <div style={{ height: '3px', width: '40px', backgroundColor: '#ff85c0', margin: 'auto' }}></div>
       
        </div>

        <div className="mb-4">

          <input 
            type="search" 
            className="form-control border-0" 
            placeholder="جستجو در منو..." 
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            style={{backgroundColor: '#fff0f6', borderRadius: '10px', padding: '10px 15px', fontSize: '0.9rem'}} />
      
        </div>

        <ul className="nav flex-column p-0" 
        style={{ listStyle: 'none' }}>
          {filteredMenu.map((item) => (

            <li className="nav-item"
             key={item.id || item.path}>
              {item.hasSub ? (

                <>
                  <div style={{ ...linkStyle(item.path), cursor: 'pointer' }}
                    onClick={() => toggleMenu(item.id)}>

                    <span>
                      <span className="me-2">{item.icon}</span> 
                      {item.name}
                    </span>

                    <small style={{ fontSize: '10px' }}>{openMenu === item.id ? '➖' : '➕'}</small>
                  
                  </div>

                  {(openMenu === item.id || searchTerm !== '') && (

                    <div className="mb-2">
                      {getSubItems(item.id).map((sub) => (

                        <Link key={sub.path} 
                        to={sub.path} 
                        style={subLinkStyle(sub.path)}
                        onClick={() => setIsOpen(false)}>
                          {sub.name}
                        </Link>

                      ))}

                    </div>

                  )}

                </>

              ) : (

                <Link to={item.path} 
                  style={linkStyle(item.path)}
                  onClick={() => setIsOpen(false)}>
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

      {isOpen && (

        <div className="d-md-none" 
          onClick={() => setIsOpen(false)}
          style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', zIndex: 1040}}>
        </div>
      )}
      
    </div>
  );
}

export default Sidebar;