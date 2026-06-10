import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('./events/events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
      })
      .catch(err => {
        console.warn("Could not load events.json, using fallback.", err);
        setEvents([
          {
            title: "LIVESHOW 'CÁNH DIỀU ƯỚC MƠ'",
            status: "Nổi bật",
            image: "./events/anh4.jpg",
            date: "11/05/2026",
            location: "Sảnh D-E - TDTU",
            desc: "Đêm nhạc liveshow thiện nguyện với mong muốn lan tỏa âm nhạc và tinh thần tích cực tới mọi người",
            tagColor: "var(--color-primary)"
          },
          {
            title: "LIVESHOW 'S4U'",
            status: "Nổi bật",
            image: "./events/S4U.jpg",
            date: "19/06/2025",
            location: "Hội trường 6M - TDTU",
            desc: "Liveshow thường niên nơi tất cả ban trong câu lạc bộ cùng nhau tạo ra một liveshow để lan tỏa âm nhạc tới với toàn thể sinh viên TDTU ",
            tagColor: "var(--color-primary)"
          },
          {
            title: "LIVESHOW 'CHÓNG HOA'",
            status: "Nổi bật",
            image: "./events/Chong_hoa.jpg",
            date: "06/12/2024",
            location: "Hội trường 6M - TDTU",
            desc: "Đêm nhạc thiện nguyện đầu tiên của câu lạc bộ.",
            tagColor: "var(--color-primary)"
          }
        ]);
      });
  }, []);

  return (
    <section id="events" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>
              Sự kiện & <span className="gradient-text-alt">Hoạt động nổi bật</span>
            </h2>
            <p>Cùng nhìn lại những chương trình âm nhạc đặc sắc và kế hoạch sắp tới của G4U</p>
          </div>
        </ScrollReveal>

        <div className="grid-3">
          {events.map((event, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.12}>
              <motion.div 
                className="glass-panel"
                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-md)',
                  height: '100%',
                  cursor: 'pointer'
                }}
              >
                {/* Event Image Container */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <motion.img 
                    src={event.image} 
                    alt={event.title} 
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                  />
                  <span 
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: event.tagColor,
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      fontFamily: 'var(--font-heading)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                    }}
                  >
                    {event.status}
                  </span>
                </div>

                {/* Event Body Content */}
                <div 
                  style={{ 
                    padding: '24px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    flexGrow: 1, 
                    textAlign: 'left',
                    background: 'var(--color-bg-white)'
                  }}
                >
                  <h3 
                    style={{ 
                      fontSize: '1.25rem', 
                      marginBottom: '16px',
                      color: 'var(--color-text-title)',
                      lineHeight: '1.4'
                    }}
                  >
                    {event.title}
                  </h3>
                  
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '16px', flexGrow: 1 }}>
                    {event.desc}
                  </p>

                  {/* Details Footer */}
                  <div 
                    style={{ 
                      borderTop: '1px solid var(--color-border)', 
                      paddingTop: '16px',
                      marginTop: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-text)' }}>
                      <Calendar size={14} color="var(--color-primary)" />
                      <span>{event.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-text)' }}>
                      <MapPin size={14} color="var(--color-secondary)" />
                      <span style={{ 
                        whiteSpace: 'nowrap', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis' 
                      }}>
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
