import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users, TrendingUp, Guitar, Film, Sparkles, HeartHandshake, Flame, Zap, Palette, Handshake, Heart, Star, Award, Activity, BookOpen, Calendar, Camera, Globe, Compass, Coffee, Play, Smile } from 'lucide-react';
import logo from '../assets/Logo.jpg';
import mascot from '../assets/mascot.png';
import ScrollReveal from './ui/ScrollReveal';

export default function About() {
  const coreValues = [
    {
      icon: /* ABOUT_VAL1_ICON_START */<Music size={28} color="var(--color-primary)" />/* ABOUT_VAL1_ICON_END */,
      title: "Âm nhạc",
      desc: "Nơi đam mê được đánh thức, khơi dậy tinh thần sáng tạo và thăng hoa cùng những giai điệu acoustic mộc mạc."
    },
    {
      icon: /* ABOUT_VAL2_ICON_START */<Users size={28} color="var(--color-secondary)" />/* ABOUT_VAL2_ICON_END */,
      title: "Kết nối",
      desc: "Xây dựng một mái nhà chung G4U, kết nối những trái tim yêu nhạc và tạo dựng những tình bạn đẹp đẽ thời sinh viên."
    },
    {
      icon: /* ABOUT_VAL3_ICON_START */<TrendingUp size={28} color="var(--color-accent)" />/* ABOUT_VAL3_ICON_END */,
      title: "Phát triển",
      desc: "Không ngừng rèn luyện kỹ năng âm nhạc, hoàn thiện bản thân, tự tin thể hiện cá tính trên các sân khấu lớn."
    }
  ];

  return (
    <section id="about" style={{ background: 'var(--color-bg-white)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>
              Về <span className="gradient-text">G4U Guitar Club</span>
            </h2>
            <p>Mái nhà chung của những tâm hồn nghệ sĩ sinh viên Đại học Tôn Đức Thắng</p>
          </div>
        </ScrollReveal>

        {/* Detailed Grid Info */}
        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '80px' }}>
          {/* Logo illustration on left */}
          <ScrollReveal direction="scale" delay={0.1}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  position: 'relative',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(232, 59, 77, 0.1), rgba(99, 58, 135, 0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--color-bg-base)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Music size={32} color="var(--color-primary)" />
                </div>
                <img 
                  src={mascot} 
                  alt="CLB G4U Mascot" 
                  style={{ 
                    width: '240px', 
                    height: '240px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    boxShadow: 'var(--shadow-lg)',
                    border: '8px solid white'
                  }} 
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Details on right */}
          <ScrollReveal direction="left" delay={0.25}>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--color-text-title)', fontSize: '1.35rem', lineHeight: '1.4' }}>
                {/* ABOUT_SLOGAN_START */}"Chúng mình là G4U" – Trạm dừng chân của những tâm hồn yêu nhạc tại TDTU! 🎸{/* ABOUT_SLOGAN_END */}
              </h3>
              <p style={{ color: 'var(--color-text)', marginBottom: '16px', fontSize: '1rem', lineHeight: '1.6' }}>
                {/* ABOUT_DESC_START */}Không chỉ là sân chơi rèn luyện kỹ năng cho các bạn đam mê Guitar, G4U còn là mái nhà chung rộng mở đón chào các tài năng Vocal, Cajon, Keyboard, Bass,... cùng nhau "cháy" hết mình trong các buổi sinh hoạt hàng tuần, hát giao lưu sảnh trường và cả những liveshow hoành tráng.{/* ABOUT_DESC_END */}
              </p>
              <p style={{ color: 'var(--color-text-title)', marginBottom: '12px', fontSize: '1rem', fontWeight: '700' }}>
                Và để làm nên những sân khấu bùng nổ ấy, không thể thiếu bộ ba quyền lực đứng sau cánh gà:
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--color-primary)' }}>• Ban Sự kiện:</strong> {/* ABOUT_EVENT_BRIEF_START */}Những "tổng tư lệnh" năng nổ, lo liệu từ A-Z để mọi chương trình luôn mượt mà và hoành tráng.{/* ABOUT_EVENT_BRIEF_END */}
                </li>
                <li style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--color-secondary)' }}>• Ban Truyền thông:</strong> {/* ABOUT_MEDIA_BRIEF_START */}Đội ngũ "phù thủy" sáng tạo nội dung, hình ảnh giúp lan tỏa mạnh mẽ ngọn lửa đam mê của G4U.{/* ABOUT_MEDIA_BRIEF_END */}
                </li>
                <li style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--color-accent)' }}>• Ban Đối ngoại:</strong> {/* ABOUT_PR_BRIEF_START */}Những "đại sứ" nhạy bén, chuyên săn "deal" xịn và giữ vai trò cầu nối vững chắc với các đối tác, nhà tài trợ.{/* ABOUT_PR_BRIEF_END */}
                </li>
              </ul>
              <p style={{ color: 'var(--color-text-title)', marginBottom: '24px', fontSize: '1rem', lineHeight: '1.6', fontWeight: '600' }}>
                {/* ABOUT_CLOSING_START */}Dù bạn đam mê tỏa sáng dưới ánh đèn sân khấu hay thích làm "hậu phương" vững chắc vạch định chiến lược, G4U luôn có một vị trí dành riêng cho bạn. Cùng gia nhập và viết nên thanh xuân rực rỡ tại TDTU nhé!{/* ABOUT_CLOSING_END */}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Guitar size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: '500' }}>Biểu diễn tại các show trong và ngoài trường</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Film size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: '500' }}>Quay và dựng các clip cover, livesession</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: '500' }}>Giao lưu nghệ thuật</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HeartHandshake size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: '500' }}>Tổ chức các hoạt động xã hội</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values Cards */}
        <div className="grid-3">
          {coreValues.map((val, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.15}>
              <div 
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '32px 24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  height: '100%'
                }}
              >
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--color-bg-base)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 0 2px 4px rgba(99,58,135,0.05)'
                  }}
                >
                  {val.icon}
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-text-title)' }}>{val.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.5' }}>
                  {val.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
