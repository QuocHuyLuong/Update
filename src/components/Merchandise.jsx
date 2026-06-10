import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Tag, ZoomIn } from 'lucide-react';

export default function Merchandise() {
  const [merchItems, setMerchItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/merchandise/merchandise.json')
      .then(res => res.json())
      .then(data => {
        setMerchItems(data);
      })
      .catch(err => {
        console.warn("Could not load merchandise.json, using fallback.", err);
        setMerchItems([
          {
            id: 1,
            name: "Áo đồng phục CLB Guitar G4U",
            tag: "Ấn phẩm nội bộ",
            description: "Mẫu áo thun đồng phục chính thức của G4U với chất liệu cotton cao cấp, thiết kế trẻ trung, năng động mang biểu tượng đặc trưng của CLB.",
            image: "/merchandise/Ao_5.png"
          },
          {
            id: 2,
            name: "Dây đeo thẻ sinh viên G4U",
            tag: "Phụ kiện độc quyền",
            description: "Phụ kiện dây đeo thiết kế độc quyền của G4U, sử dụng làm dây đeo thẻ sinh viên, thể hiện cá tính yêu âm nhạc ở mọi nơi.",
            image: "/merchandise/Day_6.png"
          }
        ]);
      });
  }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <section id="merchandise" style={{ background: 'var(--color-bg-white)', padding: '100px 0' }}>
      <div className="container">
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

        <div className="grid-2" style={{ maxWidth: '800px', margin: '0 auto', alignItems: 'stretch' }}>
          {merchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover"
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
              onClick={() => setSelectedItem(item)}
            >
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: '#faf5f8', display: 'flex', alignItems: 'center', justify: 'center' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} 
                  className="merch-img"
                />
                
                {/* Hover overlay for zoom icon */}
                <div 
                  className="merch-hover-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(99, 58, 135, 0.4)',
                    opacity: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition)',
                    zIndex: 2
                  }}
                >
                  <div style={{ background: '#fff', color: 'var(--color-primary)', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justify: 'center', boxShadow: 'var(--shadow-md)' }}>
                    <ZoomIn size={20} />
                  </div>
                </div>

                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(232, 59, 77, 0.9)', color: '#fff', padding: '6px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '700', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 4px 10px rgba(232, 59, 77, 0.3)', zIndex: 3 }}>
                  <Tag size={12} />
                  <span>Merch</span>
                </div>
              </div>

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
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item);
                  }}
                >
                  Xem chi tiết sản phẩm
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Merchandise Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(20, 10, 28, 0.6)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 1100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="glass-panel"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '720px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 24px 50px rgba(99, 58, 135, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedItem(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(20, 10, 28, 0.05)',
                  border: 'none',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-text-title)',
                  transition: 'var(--transition)',
                  zIndex: 10
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
              </button>

              {/* Scrollable Container */}
              <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div className="merch-modal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 0, alignItems: 'stretch' }}>
                  {/* Image */}
                  <div style={{ background: '#faf5f8', display: 'flex', alignItems: 'center', justify: 'center', overflow: 'hidden', height: '100%', minHeight: '320px' }}>
                    <img src={selectedItem.image} alt={selectedItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  {/* Info */}
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
                      style={{ width: '100%', padding: '12px 0', fontSize: '0.875rem', fontWeight: '700', textAlign: 'center' }}
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

      <style dangerouslySetInnerHTML={{__html: `
        .glass-panel-hover:hover .merch-img {
          transform: scale(1.06);
        }
        .glass-panel-hover:hover .merch-hover-overlay {
          opacity: 1 !important;
        }
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
