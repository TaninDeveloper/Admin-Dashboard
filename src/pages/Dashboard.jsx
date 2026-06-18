
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import toast, { Toaster } from 'react-hot-toast'; 

const StatCard = ({ title, value, color, bgColor }) => (

  <div className="col-md-3">
    <div className="card shadow-sm border-0 p-3 mb-2"
      style={{ borderLeft: `4px solid ${color}`, backgroundColor: bgColor, direction: 'ltr', textAlign: 'left' }}>
     
      <h6 className="text-muted small">
        {title}
      </h6>

      <h3 style={{ fontWeight: 'bold' }}>
        {value}
      </h3>

    </div>

  </div>
);

const Dashboard = () => {

  const initialStats = { orders: 1250, sales: 45000000, users: 340, messages: 12 };

  const chartData = [
    { name: 'شنبه', sales: 4000 }, { name: '۱شنبه', sales: 3000 },
    { name: '۲شنبه', sales: 5000 }, { name: '۳شنبه', sales: 2780 },
    { name: '۴شنبه', sales: 1890 }, { name: '۵شنبه', sales: 2390 }, { name: 'جمعه', sales: 3490 },
  ];

  const [stats, setStats] = useState(initialStats);

  const [recentOrders, setRecentOrders] = useState([
    { id: 1001, customer: 'الناز منفرد', status: 'در انتظار پرداخت', amount: '450,000', date: '۱۴۰۳/۰۳/۱۵', phone: '۰۹۱۲۱۱۱۱۱۱۱' },
    { id: 1002, customer: 'مریم شکری', status: 'در حال آماده‌سازی', amount: '1,200,000', date: '۱۴۰۳/۰۳/۱۶', phone: '۰۹۳۵۲۲۲۲۲۲۲' },
    { id: 1003, customer: 'سحر غلامی', status: 'ارسال شده', amount: '890,000', date: '۱۴۰۳/۰۳/۱۷', phone: '۰۹۱۹۳۳۳۳۳۳۳' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleShowDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleDeleteOrder = (order) => {
    toast((t) => (
      <div style={{ direction: 'ltr', textAlign: 'left' }}>
        آیا از حذف سفارش <b>{order.customer}</b> مطمئنی؟ 🧐
        <br />

        <button 
          className="btn btn-sm btn-danger mt-2 me-2" 
          onClick={() => {setRecentOrders(recentOrders.filter(o => o.id !== order.id));
            const orderAmount = parseInt(order.amount.replace(/,/g, ''));
            setStats(prev => ({ ...prev, orders: prev.orders - 1, sales: prev.sales - orderAmount }));
            toast.dismiss(t.id);
            toast.success('با موفقیت حذف شد ✨');}}>
          بله
        </button>

        <button className="btn btn-sm btn-light mt-2" 
        onClick={() => toast.dismiss(t.id)}>
          لغو
        </button>

      </div>

    ), { duration: 5000 });
  };

  const addNewOrder = () => {
    const names = ['کاربر جدید'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const newAmount = Math.floor(Math.random() * 1000000) + 500000;

    setStats(prev => ({ ...prev, orders: prev.orders + 1, sales: prev.sales + newAmount }));

    const newOrder = {
      id: Math.floor(Math.random() * 9000) + 1000,
      customer: randomName,
      status: 'در انتظار پرداخت',
      amount: newAmount.toLocaleString(),
      date: 'امروز',
      phone: '۰۹' + Math.floor(Math.random() * 900000000)
    };

    setRecentOrders(prev => [newOrder, ...prev]);
    toast.success(`سفارش جدید برای ${randomName} ثبت شد! 🌸`);
  };

  return (

    <div className="p-4" 
    style={{ fontFamily: 'Vazir', direction: 'ltr', textAlign: 'left' }}>
      <Toaster position="top-right" />

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 style={{ color: '#333', fontWeight: 'bold' }}>پیشخوان مدیریت</h2>

        <button className="btn btn-danger" 
        onClick={addNewOrder} 
        style={{ borderRadius: '20px', backgroundColor: '#d63384', border: 'none' }}>
          + ثبت سفارش جدید
        </button>

      </div>

      <div className="row mb-4"
      style={{ marginTop: '40px'}}>

        <StatCard title="تعداد سفارشات" value={stats.orders} color="#d63384" bgColor="#fff5f8" />
        <StatCard title="مجموع فروش" value={`${stats.sales.toLocaleString()} `} color="#198754" bgColor="#f0fff4" />
        <StatCard title="کاربران فعال" value={stats.users} color="#0dcaf0" bgColor="#f0faff" />
        <StatCard title="پیام‌ها" value={stats.messages} color="#ffc107" bgColor="#fffbea" />
     
      </div>

      <div className="card shadow-sm border-0 p-4 mb-4" 
      style={{ borderRadius: '15px', marginTop: '60px' }}>

        <h5 className="mb-4" 
        style={{ color: '#d63384' }}>📈 روند فروش هفته</h5>

        <div style={{ width: '100%', height: 250 }}>

          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{fontSize: 12}} />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#d63384" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="card shadow-sm border-0" 
      style={{ borderRadius: '15px', overflow: 'hidden', marginTop: '60px' }}>

        <div className="card-body p-0">

          <table className="table table-hover mb-0 text-center align-middle">

            <thead style={{ backgroundColor: '#f8f9fa' }}>
              <tr>
                <th className="p-3">کد</th>
                <th className="p-3">مشتری</th>
                <th className="p-3">مبلغ</th>
                <th className="p-3">عملیات</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td className="p-3 text-muted">#{order.id}</td>
                  <td className="p-3 fw-bold">{order.customer}</td>
                  <td className="p-3 text-success fw-bold">{order.amount} تومان</td>
                  <td className="p-3">

                    <button className="btn btn-sm btn-outline-primary me-2"
                     style={{ borderRadius: '8px' }} 
                     onClick={() => handleShowDetails(order)}>
                      👁️
                    </button>

                    <button 
                    className="btn btn-sm btn-outline-danger" 
                    style={{ borderRadius: '8px' }} 
                    onClick={() => handleDeleteOrder(order)}>
                      🗑️
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

      {showModal && selectedOrder && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center',
          alignItems: 'center', zIndex: 2000, direction: 'ltr'}}>

          <div className="card p-4 shadow-lg border-0" 
          style={{ width: '400px', borderRadius: '25px', textAlign: 'left' }}>

            <div className="text-center mb-3">

                <h4 style={{ color: '#d63384', fontWeight: 'bold' }}>جزئیات سفارش</h4>

                <hr style={{ opacity: 0.1 }} />

            </div>

            <div className="mb-2">
              <strong>نام مشتری:</strong> 
              <span className="text-muted">{selectedOrder.customer}</span>
            </div>

            <div className="mb-2">
              <strong>تاریخ ثبت:</strong> 
              <span className="text-muted">{selectedOrder.date}</span>
            </div>

            <div className="mb-2">
              <strong>شماره تماس:</strong> 
              <span className="text-muted">{selectedOrder.phone}</span>
            </div>

            <div className="mb-2">
              <strong>مبلغ کل:</strong> 
              <span className="text-success fw-bold">{selectedOrder.amount} تومان</span>
            </div>

            <div className="mb-3">
              <strong>وضعیت:</strong> 
              <span className="badge bg-info-subtle text-info p-2">{selectedOrder.status}</span>
            </div>

            <button className="btn mt-3 w-100 text-white" 
                style={{ backgroundColor: '#ff85c0', borderRadius: '15px', fontWeight: 'bold', border: 'none' }}
                onClick={() => setShowModal(false)}>
                بستن پنجره
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Dashboard;