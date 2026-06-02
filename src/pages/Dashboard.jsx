
import React, { useState } from 'react';

const Dashboard = () => {

  const initialStats = {
    orders: 1250,
    sales: 45000000,
    users: 340,
    messages: 12
  };


  const [stats, setStats] = useState(initialStats);

  const initialOrders = [
    { id: 101, customer: 'سارا محمدی', status: 'ارسال شده', amount: '1,200,000' },
    { id: 102, customer: 'علی رضایی', status: 'در انتظار پرداخت', amount: '850,000' },
    { id: 103, customer: 'مریم کیانی', status: 'در حال آماده‌سازی', amount: '2,100,000' },
  ];

  const [recentOrders, setRecentOrders] = useState(initialOrders);

  const addNewOrder = () => {
    const newAmount = Math.floor(Math.random() * 1000000) + 500000;


    setStats(prev => ({
      ...prev,
      orders: prev.orders + 1,
      sales: prev.sales + newAmount,
    }));


    const newOrder = {
      id: Math.floor(Math.random() * 10000),
      customer: 'کاربر جدید',
      status: 'در انتظار پرداخت',
      amount: newAmount.toLocaleString()
    };

    setRecentOrders(prev => [newOrder, ...prev]);
  };


  const resetStats = () => {
    setStats(initialStats);
    setRecentOrders(initialOrders);
  };


  return (
    <div className="p-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 style={{ color: '#333', fontWeight: 'bold' }}>پیشخوان مدیریت</h2>

        <div className="d-flex gap-2">

          <button 
            className="btn btn-outline-danger btn-sm" 
            onClick={addNewOrder}
            style={{ borderRadius: '20px' }}
          >
            🎲 ثبت سفارش جدید
          </button>

          <button 
            className="btn btn-outline-secondary btn-sm" 
            onClick={resetStats}
            style={{ borderRadius: '20px' }}
          >
            ↺ ریست کردن آمار
          </button>

        </div>
      </div>

      <div className="row mb-4">

        <div className="col-md-3">

          <div className="card shadow-sm border-0 p-3 mb-2"
          style={{ borderRight: '4px solid #d63384', backgroundColor: '#fff5f8' }}>

            <h6 className="text-muted">تعداد سفارشات</h6>

            <h3>{stats.orders}</h3>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow-sm border-0 p-3 mb-2" 
          style={{ borderRight: '4px solid #198754', backgroundColor: '#f0fff4' }}>

            <h6 className="text-muted">مجموع فروش (تومان)</h6>

            <h3>{stats.sales.toLocaleString()}</h3>

          </div>
        </div>

        <div className="col-md-3">

          <div className="card shadow-sm border-0 p-3 mb-2" 
          style={{ borderRight: '4px solid #0dcaf0', backgroundColor: '#f0faff' }}>

            <h6 className="text-muted">کاربران فعال</h6>

            <h3>{stats.users}</h3>

          </div>
        </div>

        <div className="col-md-3">

          <div className="card shadow-sm border-0 p-3 mb-2"
           style={{ borderRight: '4px solid #ffc107', backgroundColor: '#fffbea' }}>

            <h6 className="text-muted">پیام‌های جدید</h6>

            <h3>{stats.messages}</h3>

          </div>

        </div>
      </div>

      <div className="card shadow-sm border-0">

        <div className="card-header bg-white py-3">

          <h5 className="mb-0">آخرین سفارشات</h5>

        </div>

        <div className="card-body">

          <table className="table table-hover">

            <thead>

              <tr>
                <th>#</th>
                <th>مشتری</th>
                <th>وضعیت</th>
                <th>مبلغ</th>
              </tr>

            </thead>

            <tbody>

              {recentOrders.map(order => (
                <tr key={order.id}>

                  <td>{order.id}</td>
                  <td>{order.customer}</td>

                  <td>
                    <span className={`badge ${
                      order.status === 'ارسال شده' ? 'bg-success' : 
                      order.status === 'در انتظار پرداخت' ? 'bg-warning text-dark' : 'bg-info'
                    }`}>
                      {order.status}
                    </span>
                  </td>

                  <td>{order.amount} تومان</td>

                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
