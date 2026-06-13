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

  // Class Tailwind dùng chung cho thẻ input và textarea
  const inputClass = "w-full px-4 py-3 font-body text-[0.95rem] bg-white/65 border border-[var(--color-border)] rounded-lg text-[var(--color-text-title)] transition-all outline-none focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-primary/15";
  const labelClass = "block font-heading font-medium text-[0.9rem] mb-2 text-[var(--color-text-title)]";

  return (
    <section id="contact" className="bg-[var(--color-bg-base)] py-24">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>
              Liên hệ & <span className="gradient-text">Kết nối với G4U</span>
            </h2>
            <p>Gửi câu hỏi hoặc lời nhắn hợp tác cho G4U để cùng kết nối đam mê và lan tỏa âm nhạc</p>
          </div>
        </ScrollReveal>

        <div className="grid-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact Information Card */}
          <ScrollReveal direction="right" delay={0.1} className="h-full">
            <div className="glass-panel p-8 md:p-10 bg-white flex flex-col justify-between text-left h-full">
              <div>
                <h3 className="text-2xl text-[var(--color-text-title)] mb-4 font-bold font-heading">
                  Thông tin liên hệ
                </h3>
                <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
                  Nếu bạn có những câu hỏi, book show hay muốn có những màn collabs siêu cháy với G4Uers thì đừng ngần ngại liên hệ với chúng mình nhé
                </p>

                <div className="flex flex-col gap-6">
                  {/* Địa chỉ */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(232,59,77,0.08)] flex items-center justify-center shrink-0">
                      <MapPin size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="text-base text-[var(--color-text-title)] mb-1 font-bold">Địa chỉ sinh hoạt</h4>
                      <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                        19 Nguyễn Hữu Thọ, P. Tân Hưng, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(99,58,135,0.08)] flex items-center justify-center shrink-0">
                      <Mail size={20} color="var(--color-secondary)" />
                    </div>
                    <div>
                      <h4 className="text-base text-[var(--color-text-title)] mb-1 font-bold">Địa chỉ Email</h4>
                      <p className="text-sm text-[var(--color-text-light)]">
                        clbguitardhtdt@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Mạng xã hội */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(133,58,120,0.08)] flex items-center justify-center shrink-0">
                      <Share2 size={20} color="var(--color-secondary-light)" />
                    </div>
                    <div>
                      <h4 className="text-base text-[var(--color-text-title)] mb-1 font-bold">Mạng xã hội</h4>
                      <p className="text-sm text-[var(--color-text-light)]">
                        facebook.com/clbguitarg4u.tdtu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social channels stack */}
              <div className="mt-10 border-t border-[var(--color-border)] pt-6">
                <h4 className="text-[0.95rem] text-[var(--color-text-title)] mb-4 font-bold">
                  Theo dõi G4U tại
                </h4>
                <div className="flex gap-4">
                  {[
                    { icon: FacebookIcon, href: "https://www.facebook.com/clbguitarg4u.tdtu" },
                    { icon: InstagramIcon, href: "https://www.instagram.com/g4u_tdtu" },
                    { icon: TiktokIcon, href: "https://www.tiktok.com/@g4u_guitar" },
                    { icon: YoutubeIcon, href: "https://www.youtube.com/@G4UGroup" }
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <motion.a 
                        key={idx}
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer"
                        // Tailwind classes chuẩn xác giống 100% CSS cũ
                        className="w-11 h-11 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-secondary)] shadow-[var(--shadow-sm)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] hover:border-[var(--color-accent-light)] hover:bg-[var(--color-bg-base)]"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Registration Form Card */}
          <ScrollReveal direction="left" delay={0.25} className="h-full">
            {/* Thêm 'relative' để cái thông báo bật lên nằm gọn bên trong thẻ này */}
            <div className="glass-panel relative p-8 md:p-10 bg-white h-full text-left">
              <h3 className="text-2xl text-[var(--color-text-title)] mb-2 font-bold font-heading">
                Gửi lời nhắn cho chúng mình
              </h3>
              <p className="text-[var(--color-text-light)] text-sm mb-7">
                Nếu bạn muốn book show, hợp tác truyền thông, hay đơn giản là gửi một lời nhắn dễ thương cho G4U, hãy điền thông tin dưới đây nhé!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className={labelClass} htmlFor="fullName">Họ và Tên</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Nguyễn Văn A" 
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className={labelClass} htmlFor="phone">Số điện thoại</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="09xxxxxxxx" 
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email liên hệ</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="example@gmail.com" 
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className={labelClass} htmlFor="message">Lời nhắn / Nội dung liên hệ</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} min-h-[120px] resize-y`}
                    placeholder="Nhập nội dung lời nhắn, đề xuất hợp tác hoặc câu hỏi của bạn tại đây..."
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full py-3.5 mt-2 flex items-center justify-center gap-2"
                >
                  <span>Gửi lời nhắn</span>
                  <Send size={16} />
                </button>
              </form>

              {/* Success Feedback Modal */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-5 left-5 right-5 p-4 bg-[#ecfdf5] border border-[#10b981] rounded-[var(--radius-sm)] flex items-center gap-3 shadow-[var(--shadow-md)] z-10"
                  >
                    <CheckCircle color="#10b981" size={24} className="shrink-0" />
                    <div className="text-left">
                      <p className="text-[#065f46] font-bold text-[0.9rem] mb-0.5">Gửi lời nhắn thành công!</p>
                      <p className="text-[#047857] text-[0.8rem] leading-snug">Cảm ơn bạn đã liên hệ với G4U. Ban chủ nhiệm sẽ phản hồi bạn qua email sớm nhất.</p>
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