
import React from 'react';

const Customers = () => {

  const customerList = [
    { id: 1, name: 'الناز منفرد', city: 'تهران', totalPurchase: '۳,۴۰۰,۰۰۰', count: 5, rank: 'طلایی' },
    { id: 2, name: 'مریم شکری', city: 'اصفهان', totalPurchase: '۱,۲۰۰,۰۰۰', count: 2, rank: 'نقره‌ای'},
    { id: 3, name: 'سحر غلامی', city: 'شیراز', totalPurchase: '۸۹۰,۰۰۰', count: 1, rank: 'برنزی'},
    { id: 4, name: 'سارا هدایتی', city: 'کرج', totalPurchase: '۱۵,۰۰۰,۰۰۰', count: 12, rank: 'VIP'},
    { id: 5, name: 'نیکی علیزاده', city: 'کرج', totalPurchase: '۱۵,۰۰۰,۰۰۰', count: 12, rank: 'VIP'},
  ];

  return (

    <div className="p-4" 
    style={{ fontFamily: 'Vazir', direction: 'rtl', textAlign: 'right' }}>

      <h2 className="fw-bold mb-4" 
      style={{ color: '#d63384' }}>
        👥 مدیریت مشتریان
      </h2>

      <div className="row">
        {customerList.map(c => (

          <div className="col-md-4 mb-4" 
          key={c.id}>

            <div className="card border-0 shadow-sm text-center p-4" 
            style={{ borderRadius: '25px' }}>

              <div style={{ fontSize: '50px', marginBottom: '15px' }}>
                {c.avatar}
              </div>

              <h5 className="fw-bold">
                {c.name}
              </h5>

              <p className="text-muted small">
                {c.city}
              </p>

              <div className="badge mb-3" 
              style={{ backgroundColor: c.rank === 'VIP' ? '#d63384' : '#ff85c0' }}>
                سطح {c.rank}
              </div>

              <div className="d-flex justify-content-around border-top pt-3">

                <div>

                  <small className="text-muted d-block">کل خرید</small>

                  <span className="fw-bold text-success">{c.totalPurchase}</span>

                </div>

                <div>

                  <small className="text-muted d-block">تعداد سفارش</small>

                  <span className="fw-bold">{c.count}</span>

                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;

