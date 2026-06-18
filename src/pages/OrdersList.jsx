
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const initialOrders = [
  { id: '1001', customer: 'الناز منفرد', date: '۱۴۰۳/۰۳/۱۵', total: '۴۵۰,۰۰۰ تومان', status: 'pending', statusText: 'در انتظار پرداخت', items: 'تینت لب، کرم پودر' },
  { id: '1002', customer: 'مریم شکری', date: '۱۴۰۳/۰۳/۱۶', total: '۱,۲۰۰,۰۰۰ تومان', status: 'processing', statusText: 'در حال آماده‌سازی', items: 'عطر شنل' },
  { id: '1003', customer: 'سحر غلامی', date: '۱۴۰۳/۰۳/۱۷', total: '۸۹۰,۰۰۰ تومان', status: 'shipped', statusText: 'ارسال شده', items: 'پک مراقبت مو' },
  { id: '1004', customer: 'نیکی علیزاده', date: '۱۴۰۳/۰۳/۱۸', total: '۳۰۰,۰۰۰ تومان', status: 'cancelled', statusText: 'لغو شده', items: 'خط چشم ماژیکی' },
  { id: '1005', customer: 'سارا هدایتی', date: '۱۴۰۳/۰۳/۱۹', total: '۵۰۰,۰۰۰ تومان', status: 'pending', statusText: 'در انتظار پرداخت', items: 'رژگونه قلبی' },
];

const OrdersList = () => {

  const { status } = useParams();
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id, newStatus, newStatusText) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === id ? { ...order, status: newStatus, statusText: newStatusText } : order
      )
    );
    toast.success(`وضعیت سفارش #${id} تغییر کرد ✨`, {
        style: { borderRadius: '10px', background: '#fff', color: '#d63384', border: '1px solid #ffd6e7' }
    });
  };

  const filteredOrders = !status || status === 'all' 
    ? orders 
    : orders.filter(order => order.status === status);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'pending': return { bg: '#fff9db', color: '#f59f00' };
      case 'processing': return { bg: '#e3faf3', color: '#0ca678' };
      case 'shipped': return { bg: '#e7f5ff', color: '#1c7ed6' };
      case 'cancelled': return { bg: '#fff5f5', color: '#fa5252' };
      default: return { bg: '#f8f9fa', color: '#868e96' };
    }
  };

  return (

    <div className="container-fluid p-3 p-md-4" 
    style={{ fontFamily: 'Vazir', direction: 'rtl', textAlign: 'right' }}>
      <Toaster position="top-center" />

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">

        <div>

          <h2 className="fw-bold" 
          style={{ color: '#d63384' }}>
            📦 مدیریت سفارشات
          </h2>

          <p className="text-muted small mb-0">
            نمایش لیست: 
            <span className="fw-bold" 
            style={{ color: '#ff85c0' }}>
              {status || 'همه'}
            </span>
          </p>

        </div>

        <div className="badge rounded-pill shadow-sm" 
        style={{ backgroundColor: '#fff0f6', color: '#d63384', padding: '12px 20px', border: '1px solid #ffd6e7' }}>
          {filteredOrders.length} سفارش یافت شد
        </div>

      </div>


      <div className="card border-0 shadow-sm" 
      style={{ borderRadius: '20px', overflow: 'hidden' }}>

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead style={{ backgroundColor: '#fff9fb' }}>
              <tr style={{ color: '#d63384', fontSize: '0.9rem' }}>
                <th className="p-4">کد سفارش</th>
                <th>مشتری</th>
                <th>تاریخ</th>
                <th>محصولات</th>
                <th>مبلغ</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map(order => {
                const style = getStatusStyle(order.status);
                return (
                  <tr key={order.id} style={{ fontSize: '0.85rem' }}>
                    <td className="p-4 fw-bold text-muted">#{order.id}</td>
                    <td className="fw-bold">{order.customer}</td>
                    <td className="text-muted small">{order.date}</td>
                    <td className="text-truncate" style={{ maxWidth: '150px' }}>{order.items}</td>
                    <td className="fw-bold" style={{ color: '#d63384' }}>{order.total}</td>
                    <td>
                      <span className="badge p-2 rounded-3" style={{ backgroundColor: style.bg, color: style.color }}>
                        {order.statusText}
                      </span>
                    </td>

                    <td>

                      <div className="d-flex gap-2">
                        {order.status === 'pending' && (
                          <button 
                            className="btn btn-sm btn-success rounded-pill px-3" 
                            style={{ fontSize: '11px' }}
                            onClick={() => updateStatus(order.id, 'processing', 'در حال آماده‌سازی')}>
                            تایید
                          </button>
                        )}

                        {order.status === 'processing' && (
                          <button 
                            className="btn btn-sm btn-primary rounded-pill px-3" 
                            style={{ fontSize: '11px' }}
                            onClick={() => updateStatus(order.id, 'shipped', 'ارسال شده')}>
                            ارسال
                          </button>
                        )}

                        {(order.status === 'pending' || order.status === 'processing') && (
                          <button 
                            className="btn btn-sm btn-outline-danger rounded-pill px-3" 
                            style={{ fontSize: '11px' }}
                            onClick={() => updateStatus(order.id, 'cancelled', 'لغو')}>
                            لغو
                          </button>
                        )}

                        {(order.status === 'shipped' || order.status === 'cancelled') && (
                          <span className="text-muted small">تکمیل شده</span>
                        )}

                      </div>

                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="text-center p-5">

              <p className="text-muted">طنین جان، سفارشی در این دسته نیست 🌸</p>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;