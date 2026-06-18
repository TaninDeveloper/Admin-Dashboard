
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ProductCategory = () => {

  const { category } = useParams(); 

  const initialProducts = [
    { id: 1, name: 'عطر شنل صورتی', price: 1200000, stock: 5, img: '🌸', category: 'perfume' },
    { id: 2, name: 'ادکلن ویکتوریا سکرت', price: 850000, stock: 8, img: '✨', category: 'perfume' },
    { id: 3, name: 'کرم آبرسان نیوآ', price: 240000, stock: 3, img: '🧴', category: 'skincare' },
    { id: 4, name: 'سرم ویتامین سی', price: 420000, stock: 0, img: '🍊', category: 'skincare' },
    { id: 5, name: 'تینت لب اتود', price: 185000, stock: 12, img: '💄', category: 'makeup' },
    { id: 6, name: 'ریمل بل بلندکننده', price: 320000, stock: 6, img: '👁️', category: 'makeup' },
    { id: 7, name: 'ماسک مو کاتوس', price: 450000, stock: 4, img: '💆‍♀️️', category: 'haircare' },
    { id: 8, name: 'سشوار فیلیپس صورتی', price: 2100000, stock: 2, img: '🔌', category: 'electrical' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const filteredProducts = !category || category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  const getCategoryTitle = () => {
    switch (category) {
      case 'perfume': return 'عطر و ادکلن';
      case 'skincare': return 'مراقبت از پوست';
      case 'haircare': return 'مراقبت از مو';
      case 'makeup': return 'لوازم آرایشی';
      case 'electrical': return 'لوازم الکتریکی';
      default: return 'همه محصولات';
    }
  };

  const updateStock = (id, newStock) => {
    setProducts(products.map(p => p.id === id ? { ...p, stock: newStock } : p));
    toast.success('موجودی به‌روز شد 🎀');
  };

  return (

    <div className="p-3 p-md-4" 
    style={{ fontFamily: 'Vazir', direction: 'rtl', textAlign: 'right' }}>
      <Toaster position="top-center" />

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">

        <div>

          <h2 style={{ color: '#d63384', fontWeight: 'bold' }}>
            🛍️ مدیریت {getCategoryTitle()}
          </h2>

          <p className="text-muted small mb-0">لیست محصولات موجود در انبار پینکی گرل</p>

        </div>

        <button className="btn text-white px-4 shadow-sm" 
        style={{ backgroundColor: '#d63384', borderRadius: '15px' }}>
          + افزودن محصول جدید
        </button>

      </div>

      <div className="row">
        {filteredProducts.map(product => (
          
          <div className="col-12 col-sm-6 col-lg-4 mb-4" 
          key={product.id}>

            <div className="card border-0 shadow-sm p-3 h-100" 
            style={{ borderRadius: '25px', transition: '0.3s' }}>

              <div className="d-flex align-items-center mb-3">

                <div style={{fontSize: '35px', backgroundColor: '#fff0f6', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', marginLeft: '15px'}}>
                  {product.img}
                </div>

                <div>

                  <h6 className="mb-1 fw-bold" 
                  style={{ color: '#444' }}>
                    {product.name}
                  </h6>

                  <p className="text-muted small mb-0 fw-bold" 
                  style={{ color: '#d63384 !important' }}>
                    {product.price.toLocaleString()} تومان
                  </p>

                </div>

              </div>

              <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">

                <span className={`badge px-3 py-2 ${product.stock > 5 ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`} 
                style={{ borderRadius: '10px', fontSize: '12px' }}>
                  {product.stock > 0 ? `موجودی: ${product.stock} عدد` : 'ناموجود ⚠️'}
                </span>

                <div className="d-flex gap-1">

                  <button className="btn btn-sm btn-light border" 
                  style={{ borderRadius: '8px' }} 
                  onClick={() => updateStock(product.id, product.stock + 1)}>
                    ➕
                  </button>

                  <button className="btn btn-sm btn-light border" 
                  style={{ borderRadius: '8px' }} 
                  onClick={() => product.stock > 0 && updateStock(product.id, product.stock - 1)}>
                    ➖
                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-12 text-center p-5">

            <p className="text-muted">طنین جان، محصولی در این دسته پیدا نشد! 🌸</p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
