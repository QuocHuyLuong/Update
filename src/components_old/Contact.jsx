import React, { useState } from 'react';
import { Mail, MapPin, Share2, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TiktokIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        message: ''
      });
      // Clear notification after 4s
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>
              Liên hệ & <span className="gradient-text">Kết nối với G4U</span>
            </h2>
            <p>Gửi câu hỏi hoặc lời nhắn hợp tác cho G4U để cùng kết nối đam mê và lan tỏa âm nhạc</p>
          </div>
        </ScrollReveal>

        <div className="grid-2" style={{ gap: '48px', alignItems: 'stretch' }}>
          {/* Contact Information Card */}
          <ScrollReveal direction="right" delay={0.1} className="h-full">
            <div 
              className="glass-panel" 
              style={{ 
                padding: '40px 32px', 
                background: 'var(--color-bg-white)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left',
                height: '100%'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-title)', marginBottom: '16px' }}>
                  Thông tin liên hệ
                </h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '32px' }}>
                  Nếu bạn có những câu hỏi, book show hay muốn có những màn collabs siêu cháy với G4Uers thì đừng ngần ngại liên hệ với chúng mình nhé
                </p>
  
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        background: 'rgba(232, 59, 77, 0.08)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <MapPin size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--color-text-title)', marginBottom: '4px' }}>Địa chỉ sinh hoạt</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                        19 Nguyễn Hữu Thọ, Tân Phong, Quận 7, Hồ Chí Minh City, Vietnam
                      </p>
                    </div>
                  </div>
  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        background: 'rgba(99, 58, 135, 0.08)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Mail size={20} color="var(--color-secondary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--color-text-title)', marginBottom: '4px' }}>Địa chỉ Email</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                        clbguitardhtdt@gmail.com
                      </p>
                    </div>
                  </div>
  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        background: 'rgba(133, 58, 120, 0.08)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Share2 size={20} color="var(--color-secondary-light)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--color-text-title)', marginBottom: '4px' }}>Mạng xã hội chính</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                        Facebook: CLB Guitar G4U - Đại học Tôn Đức Thắng
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Social channels stack */}
              <div style={{ marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-title)', marginBottom: '16px' }}>
                  Theo dõi G4U tại
                </h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <motion.a 
                    href="https://www.facebook.com/clbguitarg4u.tdtu" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-secondary btn-icon-only"
                    style={{ borderRadius: '50%' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 58, 135, 0.08)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FacebookIcon size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/g4u_tdtu" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-secondary btn-icon-only"
                    style={{ borderRadius: '50%' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 58, 135, 0.08)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <InstagramIcon size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://www.tiktok.com/@g4u_guitar" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-secondary btn-icon-only"
                    style={{ borderRadius: '50%' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 58, 135, 0.08)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TiktokIcon size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://www.youtube.com/@G4UGroup" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-secondary btn-icon-only"
                    style={{ borderRadius: '50%' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 58, 135, 0.08)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <YoutubeIcon size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </ScrollReveal>
  
          {/* Registration Form Card */}
          <ScrollReveal direction="left" delay={0.25} className="h-full">
            <div 
              className="glass-panel" 
              style={{ 
                padding: '40px 32px', 
                background: 'var(--color-bg-white)',
                height: '100%'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-title)', marginBottom: '8px', textAlign: 'left' }}>
                Gửi lời nhắn cho chúng mình
              </h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '28px', textAlign: 'left' }}>
                Nếu bạn muốn book show, hợp tác truyền thông, hay đơn giản là gửi một lời nhắn dễ thương cho G4U, hãy điền thông tin dưới đây nhé!
              </p>
  
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Họ và Tên</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nguyễn Văn A" 
                    required
                  />
                </div>
  
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Số điện thoại</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="09xxxxxxxx" 
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email liên hệ</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="example@gmail.com" 
                      required
                    />
                  </div>
                </div>
  
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Lời nhắn / Nội dung liên hệ</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nhập nội dung lời nhắn, đề xuất hợp tác hoặc câu hỏi của bạn tại đây..."
                    required
                  />
                </div>
  
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px', marginTop: '8px' }}
                >
                  <span>Gửi lời nhắn</span>
                  <Send size={16} />
                </button>
              </form>
  
              {/* Success Feedback Modal-like overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      right: '20px',
                      padding: '16px',
                      background: '#ecfdf5',
                      border: '1px solid #10b981',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: 'var(--shadow-md)',
                      zIndex: 10
                    }}
                  >
                    <CheckCircle color="#10b981" size={24} />
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ color: '#065f46', fontWeight: '700', fontSize: '0.9rem' }}>Gửi lời nhắn thành công!</p>
                      <p style={{ color: '#047857', fontSize: '0.8rem' }}>Cảm ơn bạn đã liên hệ với G4U. Ban chủ nhiệm sẽ phản hồi bạn qua email sớm nhất.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
