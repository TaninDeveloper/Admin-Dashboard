
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Comments = () => {
  const [comments, setComments] = useState([]);

  const initialComments = [
    { id: 1, user: 'سارا رضایی', product: 'تینت لب اتود', text: 'خیلی خوشرنگه، حتما پیشنهاد می‌کنم!', date: '۱۴۰۳/۰۳/۲۰', status: 'pending', stars: 5, reply: '' },
    { id: 2, user: 'مهسا علوی', product: 'کرم نیوآ', text: 'دیر به دستم رسید ولی کیفیتش خوب بود.', date: '۱403/۰۳/۲۲', status: 'approved', stars: 3, reply: 'ممنون از صبوری شما مهسا جان، خوشحالیم که راضی بودید.' },
    { id: 3, user: 'رویا محمدی', product: 'عطر شنل', text: 'ماندگاریش عالیه.', date: '۱۴۰۳/۰۳/۲۵', status: 'pending', stars: 4, reply: '' },
  ];

  useEffect(() => {
    const savedComments = localStorage.getItem('pinky_comments');
    if (savedComments && JSON.parse(savedComments).length > 0) {
      setComments(JSON.parse(savedComments));
    }
     else {
      setComments(initialComments);
      localStorage.setItem('pinky_comments', JSON.stringify(initialComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pinky_comments', JSON.stringify(comments));
  }, [comments]);

  const approveComment = (id) => {
    setComments(comments.map(c => c.id === id ? { ...c, status: 'approved' } : c));
    toast.success('نظر با موفقیت تایید شد ✨', {
      style: { border: '1px solid #d63384', color: '#d63384' }
    });
  };

  const handleReply = (id) => {
    toast((t) => (

      <div style={{ direction: 'rtl', textAlign: 'right', minWidth: '250px' }}>

        <p className="mb-2 small fw-bold" 
        style={{ color: '#d63384' }}>
          ✍️ پاسخ مدیریت پینکی گرل:
        </p>

        <div className="d-flex flex-column gap-2">

          <textarea 
            id={`reply-text-${id}`}
            className="form-control form-control-sm" 
            placeholder="متن پاسخ را اینجا بنویس..."
            rows="2"
            style={{ borderRadius: '10px', fontSize: '13px', border: '1px solid #ffd6e7' }}/>
          
          <div className="d-flex justify-content-end gap-2">

             <button className="btn btn-sm btn-light"
              style={{ fontSize: '11px' }}
              onClick={() => toast.dismiss(t.id)}>
              لغو
            </button>

            <button className="btn btn-sm text-white"
              style={{ backgroundColor: '#d63384', fontSize: '11px' }}
              onClick={() => {
                const replyValue = document.getElementById(`reply-text-${id}`).value;
                if (replyValue.trim()) {
                  setComments(comments.map(c => c.id === id ? { ...c, reply: replyValue, status: 'approved' } : c));
                  toast.dismiss(t.id);
                  toast.success('پاسخ شما با موفقیت ثبت شد 🎀');
                } 
                else {
                  toast.error('لطفاً متنی بنویسید');
                }
              }}>
              ثبت پاسخ
            </button>

          </div>

        </div>

      </div>

    ), { duration: 15000, position: 'top-center' });
  };

  const deleteComment = (id) => {
    toast((t) => (
      <div style={{ direction: 'rtl', textAlign: 'right' }}>

        <span className="small">از حذف این نظر مطمئنی طنین جان؟</span>

        <div className="mt-2 d-flex justify-content-end gap-2">

          <button className="btn btn-sm btn-outline-secondary" 
            style={{ fontSize: '11px' }}
            onClick={() => toast.dismiss(t.id)}>
            خیر
          </button>

          <button className="btn btn-sm btn-danger" 
            style={{ fontSize: '11px' }}
            onClick={() => {setComments(comments.filter(c => c.id !== id));
              toast.dismiss(t.id);
              toast.error('نظر حذف شد');
            }}>
            بله، حذف کن
          </button>

        </div>

      </div>

    ), { duration: 6000 });
  };

  return (

    <div className="container-fluid p-3 p-md-4" 
    style={{ fontFamily: 'Vazir', direction: 'rtl', textAlign: 'right' }}>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        
        <div>
          
          <h2 className="fw-bold" 
          style={{ color: '#d63384' }}>
            💬 مدیریت نظرات
          </h2>

          <p className="text-muted small mb-0">نظرات مشتریان پینکی گرل را اینجا مدیریت کن</p>

        </div>

        <div className="badge rounded-pill shadow-sm" 
        style={{ backgroundColor: '#fff0f6', color: '#d63384', padding: '12px 20px', border: '1px solid #ffd6e7' }}>
          {comments.filter(c => c.status === 'pending').length} نظر در انتظار بررسی
        </div>

      </div>

      <div className="card border-0 shadow-sm" 
      style={{ borderRadius: '20px', overflow: 'hidden' }}>

        <div className="table-responsive d-none d-md-block">

          <table className="table table-hover align-middle mb-0">

            <thead style={{ backgroundColor: '#fff9fb' }}>
              <tr style={{ color: '#d63384' }}>
                <th className="p-4">مشتری</th>
                <th>محصول</th>
                <th>متن نظر و پاسخ</th>
                <th>امتیاز</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>
              {comments.map(comment => (
                <tr key={comment.id}>
                  <td className="p-4">

                    <div className="d-flex align-items-center">

                      <div className="avatar-pink" 
                      style={{ width: '40px', height: '40px', backgroundColor: '#ffd6e7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d63384', fontWeight: 'bold', marginLeft: '10px' }}>
                        {comment.user.charAt(0)}
                      </div>

                      <span className="fw-bold">{comment.user}</span>

                    </div>

                  </td>

                  <td>
                    <span className="text-muted small">{comment.product}</span>
                  </td>

                  <td>
                    <div className="p-3 bg-light" 
                    style={{ borderRadius: '15px', maxWidth: '350px' }}>

                      <div className="mb-1">{comment.text}</div>
                      {comment.reply && (

                        <div className="mt-2 pt-2 border-top border-secondary-subtle" 
                        style={{ color: '#d63384', fontSize: '0.85rem' }}>
                          <strong>پاسخ شما:</strong> 
                          {comment.reply}
                        </div>
                      )}

                      <div className="text-muted x-small mt-1" 
                      style={{ fontSize: '0.7rem' }}>📅 {comment.date}</div>

                    </div>

                  </td>

                  <td style={{ color: '#ffc107', whiteSpace: 'nowrap' }}>
                    {'★'.repeat(comment.stars)}{'☆'.repeat(5 - comment.stars)}
                  </td>

                  <td>
                    <span className={`badge p-2 rounded-3 ${comment.status === 'approved' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>
                      {comment.status === 'approved' ? 'تایید شده' : 'در انتظار'}
                    </span>
                  </td>

                  <td>
                    <div className="d-flex gap-2">
                      {comment.status === 'pending' && (
                        <button onClick={() => approveComment(comment.id)} 
                        className="btn btn-sm btn-success px-3">
                          تایید
                        </button>
                      )}

                      <button onClick={() => handleReply(comment.id)} 
                      className="btn btn-sm btn-outline-primary">
                        پاسخ
                      </button>

                      <button onClick={() => deleteComment(comment.id)} 
                      className="btn btn-sm btn-outline-danger">
                        حذف
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="d-md-none p-3">
          {comments.map(comment => (

            <div key={comment.id} className="card mb-3 p-3 border-0 shadow-sm" 
            style={{ backgroundColor: '#fff9fb', borderRadius: '15px' }}>

              <div className="d-flex justify-content-between mb-2">

                <span className="fw-bold">{comment.user}</span>

                <span className="text-warning">{'★'.repeat(comment.stars)}</span>

              </div>

              <div className="small text-muted mb-2">محصول: {comment.product}</div>

              <p className="small bg-white p-2 rounded-3">{comment.text}</p>

              {comment.reply && <p className="small p-2 rounded-3" 
              style={{ backgroundColor: '#fff', color: '#d63384', borderRight: '3px solid #d63384' }}>
                {comment.reply}
              </p>}

              <div className="d-flex justify-content-end gap-2 mt-2">
                {comment.status === 'pending' && (

                  <button onClick={() => approveComment(comment.id)} 
                  className="btn btn-sm btn-success">
                    تایید
                  </button>
                )}

                <button onClick={() => handleReply(comment.id)} 
                className="btn btn-sm btn-outline-primary">
                  پاسخ
                </button>

                <button onClick={() => deleteComment(comment.id)} 
                className="btn btn-sm btn-outline-danger">
                  حذف
                </button>

              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;