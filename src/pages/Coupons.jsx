
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Coupons = () => {

  const [coupons, setCoupons] = useState([]);
  const [newCoupon, setNewCoupon] = useState({ code: '', percent: '', expiry: '' });

  useEffect(() => {
    const savedCoupons = localStorage.getItem('pinky_coupons');
    if (savedCoupons) {
      setCoupons(JSON.parse(savedCoupons));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pinky_coupons', JSON.stringify(coupons));
  }, [coupons]);

  const addCoupon = (e) => {
    e.preventDefault();
    if (!newCoupon.code || !newCoupon.percent) {
      toast.error('لطفاً فیلدها را پر کن طنین جان! ✨');
      return;
    }

    const couponToAdd = { ...newCoupon, id: Date.now() };
    setCoupons([couponToAdd, ...coupons]);
    setNewCoupon({ code: '', percent: '', expiry: '' });
    toast.success('کد تخفیف جدید با موفقیت ساخته شد 🎀');
  };

  const deleteCoupon = (id) => {
    setCoupons(coupons.filter(c => c.id !== id));
    toast.error('کد تخفیف حذف شد');
  };

  return (

    <div className="p-4" 
    style={{ fontFamily: 'Vazir', direction: 'rtl' }}>
      <Toaster />

      <h2 className="mb-4" 
      style={{ color: '#d63384', fontWeight: 'bold' }}>
        🎫 مدیریت کدهای تخفیف
      </h2>

      <div className="row">

        <div className="col-md-4 mb-4">

          <div className="card border-0 shadow-sm p-4" 
          style={{ borderRadius: '20px' }}>

            <h5 className="mb-4" 
            style={{ color: '#555' }}>ایجاد کد جدید</h5>

            <form onSubmit={addCoupon}>

              <div className="mb-3">

                <label className="small mb-1">کد تخفیف (مثلاً: SPRING2024)</label>

                <input 
                type="text" 
                className="form-control" 
                style={{ borderRadius: '10px', backgroundColor: '#fff0f6' }} 
                value={newCoupon.code} onChange={(e) => setNewCoupon({...newCoupon, code: e.target.value.toUpperCase()})} />

              </div>

              <div className="mb-3">

                <label className="small mb-1">درصد تخفیف</label>

                <input type="number" className="form-control" 
                style={{ borderRadius: '10px', backgroundColor: '#fff0f6' }}
                value={newCoupon.percent} onChange={(e) => setNewCoupon({...newCoupon, percent: e.target.value})} />
            
              </div>

              <div className="mb-3">

                <label className="small mb-1">تاریخ انقضا</label>

                <input 
                type="text" 
                className="form-control" 
                placeholder="۱۴۰۳/۰۳/۳۱" 
                style={{ borderRadius: '10px', backgroundColor: '#fff0f6' }}
                value={newCoupon.expiry} onChange={(e) => setNewCoupon({...newCoupon, expiry: e.target.value})} />
            
              </div>

              <button className="btn w-100 mt-2" 
              style={{ backgroundColor: '#d63384', color: 'white', borderRadius: '12px' }}>
                ساخت کد تخفیف ✨
              </button>

            </form>

          </div>

        </div>

        <div className="col-md-8">

          <div className="card border-0 shadow-sm p-4" 
          style={{ borderRadius: '20px' }}>

            <h5 className="mb-4" 
            style={{ color: '#555' }}>کدهای فعال</h5>

            <div className="table-responsive">

              <table className="table table-hover">

                <thead>
                  <tr style={{ color: '#d63384' }}>
                    <th>کد</th>
                    <th>درصد</th>
                    <th>انقضا</th>
                    <th>عملیات</th>
                  </tr>
                </thead>

                <tbody>
                  {coupons.map(coupon => (
                    <tr key={coupon.id} 
                    className="align-middle">
                      <td className="fw-bold">{coupon.code}</td>
                      <td><span className="badge bg-light text-danger">{coupon.percent}%</span></td>
                      <td>{coupon.expiry || 'بدون محدودیت'}</td>
                      <td>

                        <button className="btn btn-sm btn-outline-danger" 
                        onClick={() => deleteCoupon(coupon.id)} 
                        style={{ borderRadius: '8px' }}>
                          حذف
                        </button>

                      </td>
                    </tr>
                  ))}
                  {coupons.length === 0 && (
                    <tr>
                      <td colSpan="4" 
                      className="text-center text-muted p-5">هنوز هیچ کد تخفیفی نساختی 🌸</td>
                    </tr>
                  )}
                </tbody>

              </table>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
