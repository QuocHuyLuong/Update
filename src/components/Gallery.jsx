import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Layers, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch('/gallery/gallery.json')
      .then(res => res.json())
      .then(data => {
        setGalleryItems(data);
      })
      .catch(err => {
        console.warn("Could not load gallery.json, using fallback.", err);
        setGalleryItems([
          { id: 1, src: '/gallery/anh1.jpg', category: 'life', title: 'Tân niên 2026' },
          { id: 2, src: '/gallery/anh2.jpg', category: 'perform', title: 'Show Yoko' },
          { id: 3, src: '/gallery/anh4.jpg', category: 'liveshow', title: 'Live show "Cánh diều ước mơ"' },
          { id: 4, src: '/gallery/S4U.jpg', category: 'liveshow', title: 'Live show "S4U"' },
          { id: 5, src: '/gallery/Chong_hoa.jpg', category: 'liveshow', title: 'Live show "Chóng Hoa"' },
          { id: 6, src: '/gallery/Sinh_nhat2025.jpg', category: 'life', title: 'Sinh nhật 2025' },
          { id: 7, src: '/gallery/Show_TV.jpg', category: 'perform', title: 'Show giáng sinh tại thư viện TDTU' }
        ]);
      });
  }, []);

  const categories = [
    { key: 'all', label: 'Tất cả' },
    { key: 'liveshow', label: 'Liveshow' },
    { key: 'perform', label: 'Biểu diễn' },
    { key: 'life', label: 'Hoạt động' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" style={{ background: 'var(--color-bg-white)' }}>
      <div className="container">
        <div className="section-header">
          <h2>
            Thư viện <span className="gradient-text">Khoảnh khắc G4U</span>
          </h2>
          <p>Lưu giữ những giây phút bùng nổ trên sân khấu và những hoạt động đầy ắp tiếng cười</p>
        </div>

        {/* Filter Navigation */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '12px', 
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
                border: '1px solid',
                backgroundColor: filter === cat.key ? 'var(--color-primary)' : 'transparent',
                color: filter === cat.key ? '#fff' : 'var(--color-text-title)',
                borderColor: filter === cat.key ? 'var(--color-primary)' : 'var(--color-border)',
                boxShadow: filter === cat.key ? 'var(--shadow-glow)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid-3" style={{ minHeight: '350px' }}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel"
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImg(item.src)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'var(--transition)'
                  }}
                  className="gallery-image"
                />
                
                {/* Hover overlay */}
                <div 
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(99, 58, 137, 0.75) 0%, rgba(232, 59, 77, 0.2) 100%)',
                    opacity: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    textAlign: 'left',
                    transition: 'var(--transition)'
                  }}
                >
                  <span style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ZoomIn size={14} /> Phóng to hình ảnh
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(20, 10, 28, 0.95)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              cursor: 'zoom-out'
            }}
          >
            <motion.img 
              src={selectedImg} 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 24px 50px rgba(0,0,0,0.5)',
                border: '4px solid white'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .glass-panel:hover .gallery-image {
          transform: scale(1.06);
        }
        .glass-panel:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}} />
    </section>
  );
}
