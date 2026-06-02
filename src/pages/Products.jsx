
// export const products = [
//   {
//     id: 1,
//     name: 'رژ لب مایع مخملی (سری صورتی)',
//     category: 'makeup',
//     price: 450000,
//     stock: 120,
//     status: 'active', // فعال
//     image: 'https://via.placeholder.com/50/ffb3d9/000000?text=Lipstick' // لینک نمونه تصویر
//   },
//   {
//     id: 2,
//     name: 'ادکلن زنانه گل رز',
//     category: 'perfume',
//     price: 1250000,
//     stock: 45,
//     status: 'low_stock', // کمبود موجودی
//     image: 'https://via.placeholder.com/50/ff85c0/000000?text=Perfume'
//   },
//   {
//     id: 3,
//     name: 'سرم ویتامین C پوست',
//     category: 'skincare',
//     price: 380000,
//     stock: 0,
//     status: 'out_of_stock', // ناموجود
//     image: 'https://via.placeholder.com/50/81ecec/000000?text=Serum'
//   },
//   {
//     id: 4,
//     name: 'سشوار حرفه‌ای یونیک',
//     category: 'electrical',
//     price: 890000,
//     stock: 15,
//     status: 'active',
//     image: 'https://via.placeholder.com/50/a29bfe/000000?text=HairDryer'
//   },
//   {
//     id: 5,
//     name: 'ریمل حجم‌دهنده مشکی',
//     category: 'makeup',
//     price: 210000,
//     stock: 300,
//     status: 'active',
//     image: 'https://via.placeholder.com/50/e17055/000000?text=Mascara'
//   },
// ];



// import React from 'react';
// import { products } from '../data/products';

// const Products = () => {

//   // تابعی برای تبدیل قیمت به فرمت پول (مثلا ۴۵۰,۰۰۰)
//   const formatPrice = (price) => {
//     return price.toLocaleString('fa-IR') + ' تومان';
//   };

//   // تعیین رنگ وضعیت بر اساس موجودی
//   const getStatusBadge = (status) => {
//     switch(status) {
//       case 'active': return <span className="badge bg-success">موجود</span>;
//       case 'low_stock': return <span className="badge bg-warning text-dark">کمبود موجودی</span>;
//       case 'out_of_stock': return <span className="badge bg-danger">ناموجود</span>;
//       default: return <span className="badge bg-secondary">نامشخص</span>;
//     }
//   };

//   return (
//     <div className="bg-white p-4 shadow-sm rounded-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h4 className="fw-bold" style={{ color: '#d63384' }}>لیست محصولات پینکی گرل</h4>
//         <button className="btn btn-sm px-3" style={{ backgroundColor: '#d63384', color: 'white', borderRadius: '10px' }}>
//           + افزودن محصول
//         </button>
//       </div>

//       <div className="table-responsive">
//         <table className="table table-hover align-middle">
//           <thead>
//             <tr>
//               <th>تصویر</th>
//               <th>نام محصول</th>
//               <th>دسته‌بندی</th>
//               <th>قیمت</th>
//               <th>موجودی</th>
//               <th>وضعیت</th>
//               <th>عملیات</th>
//             </tr>
//           </thead>
//           <tbody>

//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td>
//                   <img src={product.image} alt={product.name} className="rounded-circle" style={{ width: '40px', height: '40px' }} />
//                 </td>
//                 <td className="fw-bold">{product.name}</td>
//                 <td>

//                   <span className="badge bg-light text-dark border">
//                     {product.category === 'makeup' ? 'آرایشی' : 
//                      product.category === 'perfume' ? 'عطر' : 
//                      product.category === 'skincare' ? 'پوست' : 
//                      product.category === 'haircare' ? 'مو' : 'الکتریکی'}
//                   </span>
//                 </td>
//                 <td>{formatPrice(product.price)}</td>
//                 <td>{product.stock}</td>
//                 <td>{getStatusBadge(product.status)}</td>
//                 <td>
//                   <button className="btn btn-sm btn-outline-primary me-1">ویرایش</button>
//                   <button className="btn btn-sm btn-outline-danger">حذف</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {products.length === 0 && (
//         <div className="text-center text-muted py-4">محصولی برای نمایش وجود ندارد.</div>
//       )}
//     </div>
//   );
// };

// export default Products;