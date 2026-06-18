
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Settings = () => {

  const saveSettings = () => {
    toast.success('تغییرات با موفقیت ثبت شد ✨', {
      style: { borderRadius: '15px', background: '#fff0f6', color: '#d63384', fontFamily: 'Vazir' },
    });
  };

  return (

    <div className="w-100 min-vh-100" 
    style={{ fontFamily: 'Vazir', direction: 'ltr', backgroundColor: '#fdfdfd' }}>
      <Toaster position="top-right" />

      <div className="container-fluid py-4 px-3 px-md-5">

        <div className="mb-4 pt-5 pt-md-0"> 

          <h2 className="fw-bold" 
          style={{ color: '#333', fontSize: '26px' }}>
            Settings
          </h2>

          <p className="text-muted small">پنل مدیریت اختصاصی پینکی‌گرل</p>

        </div>

        <div className="card border-0 shadow-sm mx-0" 
             style={{borderRadius: '25px',backgroundColor: '#ffffff', maxWidth: '900px', width: '100%'}}>

          <div className="card-body p-4 p-md-5">

            <div className="row g-4">

              <div className="col-12 col-lg-6">

                <label className="form-label small fw-bold" 
                style={{ color: '#d63384' }}>
                  Shop Name
                </label>

                <input 
                type="text" 
                className="form-control border-0 bg-light p-3" 
                defaultValue="پینکی گرل شاپ 🎀" 
                style={{ borderRadius: '15px' }} />

              </div>

              <div className="col-12 col-lg-6">

                <label className="form-label small fw-bold" 
                style={{ color: '#d63384' }}>
                  Theme Color
                </label>

                <div className="d-flex align-items-center gap-3 p-2 bg-light" 
                style={{ borderRadius: '15px' }}>

                  <input 
                  type="color" 
                  className="form-control form-control-color border-0 bg-transparent" 
                  defaultValue="#d63384" 
                  style={{ width: '45px', height: '40px' }} />

                  <span className="text-muted small">انتخاب رنگ تم</span>

                </div>

              </div>

              <div className="col-12">

                <div className="p-3" 
                style={{ backgroundColor: '#fff5f8', borderRadius: '20px' }}>

                  <div className="d-flex justify-content-between align-items-center">

                    <span className="small fw-bold" 
                    style={{ color: '#555' }}>
                      SMS Notification
                    </span>

                    <div className="form-check form-switch m-0 p-0">

                      <input 
                      className="form-check-input" 
                      type="checkbox" defaultChecked 
                      style={{ width: '45px', height: '22px', cursor: 'pointer', margin: 0, float: 'none' }} />

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-12 mt-4">

                <button className="btn w-100 text-white shadow-sm border-0 py-3" 
                  style={{ backgroundColor: '#ff85c0', borderRadius: '15px', fontWeight: 'bold' }} 
                  onClick={saveSettings}>
                  Save All Changes
                </button>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;