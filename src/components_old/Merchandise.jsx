import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Tag, ZoomIn, X } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

// 1. Tách dữ liệu tĩnh (fallback) ra khỏi component để tránh render lại và dễ bảo trì
const FALLBACK_MERCH = [
  {
    id: 1,
    name: "Áo đồng phục CLB Guitar G4U",
    tag: "Ấn phẩm nội bộ",
    description: "Mẫu áo thun đồng phục chính thức của G4U với chất liệu cotton cao cấp, thiết kế trẻ trung, năng động mang biểu tượng đặc trưng của CLB.",
    image: "./merchandise/Ao_5.png"
  },
  {
    id: 2,
    name: "Dây đeo thẻ sinh viên G4U",
    tag: "Phụ kiện độc quyền",
    description: "Phụ kiện dây đeo thiết kế độc quyền của G4U, sử dụng làm dây đeo thẻ sinh viên, thể hiện cá tính yêu âm nhạc ở mọi nơi.",
    image: "./merchandise/Day_6.png"
  }
];

export default function Merchandise() {
  const [merchItems, setMerchItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('./merchandise/merchandise.json')
      .then(res => res.json())
      .then(data => {
        setMerchItems(data);
      })
      .catch(err => {
        console.warn("Could not load merchandise.json, using fallback.", err);
        // 2. Sử dụng hằng số fallback ở đây
        setMerchItems(FALLBACK_MERCH);
      });
  }, []);

  // Đóng modal khi bấm phím ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="merchandise" style={{ background: 'var(--color-bg-white)', padding: '100px 0' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="glass-panel" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 'var(--radius-full)', marginBottom: '20px', border: '1px solid rgba(232, 59, 77, 0.25)', background: 'rgba(232, 59, 77, 0.05)' }}>
              <ShoppingBag size={16} color="var(--color-primary)" />
              <span style={{ fontSize: '0.825rem', fontWeight: '700', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', letterSpacing: '0.5px' }}>ĐỘC QUYỀN TỪ G4U GUITAR CLUB</span>
            </div>
            <h2>
              G4U <span className="gradient-text">Merchandise</span>
            </h2>
            <p>Sở hữu những ấn phẩm và quà lưu niệm mang đậm bản sắc của G4U để đồng hành cùng chúng mình trên mọi nẻo đường âm nhạc</p>
          </div>
        </ScrollReveal>

        {/* Danh sách Merchandise */}
        <div className="grid-2" style={{ maxWidth: '800px', margin: '0 auto', alignItems: 'stretch' }}>
          {merchItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 0.15}>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                className="glass-panel"
                onClick={() => setSelectedItem(item)} // Mở modal khi click vào thẻ
                style={{
                  padding: 0,
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                variants={{
                  hover: { y: -8, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--color-primary)' }
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Phần hình ảnh */}
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: '#faf5f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.img 
                    src={item.image} 
                    alt={item.name} 
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  
                  {/* Kính lúp (Zoom Icon) hiện khi hover */}
                  <motion.div 
                    variants={{ hover: { opacity: 1 } }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(99, 58, 135, 0.4)', opacity: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2
                    }}
                  >
                    <div style={{ background: '#fff', color: 'var(--color-primary)', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
                      <ZoomIn size={20} />
                    </div>
                  </motion.div>

                  {/* Tag Merch */}
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(232, 59, 77, 0.9)', color: '#fff', padding: '6px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '700', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 4px 10px rgba(232, 59, 77, 0.3)', zIndex: 3 }}>
                    <Tag size={12} />
                    <span>Merch</span>
                  </div>
                </div>

                {/* Phần nội dung text */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'inline-block', background: 'rgba(99, 58, 135, 0.08)', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '9999px', marginBottom: '12px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {item.tag}
                    </div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--color-text-title)', marginBottom: '8px', fontWeight: '700', lineHeight: '1.4' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '20px' }}>{item.description}</p>
                  </div>
                  <button 
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '12px 0', fontSize: '0.875rem', fontWeight: '700' }}
                  >
                    Xem chi tiết sản phẩm
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* --- MODAL CHI TIẾT SẢN PHẨM --- */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            style={{
              position: 'fixed', inset: 0, width: '100%', height: '100%',
              background: 'rgba(20, 10, 28, 0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
            }}
            onClick={() => setSelectedItem(null)} // Click ra ngoài để đóng
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="glass-panel"
              style={{
                position: 'relative', width: '100%', maxWidth: '720px',
                background: 'rgba(255, 255, 255, 0.95)', borderRadius: 'var(--radius-lg)',
                overflow: 'hidden', boxShadow: '0 24px 50px rgba(99, 58, 135, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.8)', maxHeight: '90vh',
                display: 'flex', flexDirection: 'column'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Nút Đóng (Sử dụng icon X của lucide-react) */}
              <button 
                onClick={() => setSelectedItem(null)}
                style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: 'rgba(20, 10, 28, 0.05)', border: 'none',
                  width: '36px', height: '36px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--color-text-title)',
                  transition: 'var(--transition)', zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div className="merch-modal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 0, alignItems: 'stretch' }}>
                  {/* Hình ảnh bên trái */}
                  <div style={{ background: '#faf5f8', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', height: '100%', minHeight: '320px' }}>
                    <img src={selectedItem.image} alt={selectedItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  {/* Thông tin bên phải */}
                  <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                    <div style={{ display: 'inline-block', background: 'rgba(99, 58, 135, 0.08)', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '9999px', marginBottom: '16px', alignSelf: 'flex-start', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {selectedItem.tag}
                    </div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-title)', marginBottom: '16px', fontWeight: '800', lineHeight: '1.3' }}>{selectedItem.name}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.6', marginBottom: '32px' }}>{selectedItem.description}</p>
                    
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedItem(null)}
                      className="btn btn-primary" 
                      style={{ width: '100%', padding: '12px 0', fontSize: '0.875rem', fontWeight: '700', textAlign: 'center', textDecoration: 'none' }}
                    >
                      Liên hệ giao lưu
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Xử lý responsive cho Modal */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .merch-modal-grid {
            grid-template-columns: 1fr !important;
          }
          .merch-modal-grid img {
            height: 250px !important;
            object-fit: cover !important;
          }
        }
      `}} />
    </section>
  );
}