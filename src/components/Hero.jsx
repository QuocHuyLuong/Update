import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Sparkles,
  CalendarDays,
  Activity,
  Users,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Hero() {
  const stats = [
    { value: "2011", label: "Năm thành lập", icon: <CalendarDays size={18} /> },
    { value: "15", label: "Năm hoạt động", icon: <Activity size={18} /> },
    { value: "100+", label: "Thành viên", icon: <Users size={18} /> },
    { value: "18K+", label: "Người theo dõi", icon: <Heart size={18} /> },
  ];

  const highlights = [
    "🎸 Acoustic Live",
    "🎵 Live Sessions",
    "🎤 Vocal & Chorus",
    "🥁 Cajon Beats",
    "🎹 Keyboard",
    "✨ Liveshows",
    "🤝 Jamming Sessions",
    // --- Các tag mới được thêm vào ---
    "🌟 Open Mic Night",
    "🎧 Studio Recording",
    "🎼 Fingerstyle",
    "🎉 Giao Lưu Sự Kiện",
  ];

  return (
    // Xóa màu nền fix cứng bg-[#fcf6f9] để hình nền của body ở index.css hiện lên
    <main className="overflow-x-hidden w-full min-h-screen relative flex flex-col justify-between pt-32 pb-12">
      {/* Background Video Layer - Làm cho trong trẻo giống bản gốc */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(252,246,249,0.85)] via-[rgba(252,246,249,0.7)] to-[var(--color-bg-base)] z-10 pointer-events-none" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 scale-105 pointer-events-none"
          src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
        />
      </div>

      {/* Main Content Hero */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Sparkle Badge - Đổi sang màu hồng nhạt của G4U */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(232,59,77,0.2)] bg-[rgba(232,59,77,0.08)] backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider font-heading">
              CLB GUITAR ĐẠI HỌC TÔN ĐỨC THẮNG
            </span>
          </motion.div>

          {/* Heading - Sử dụng class gradient-text-alt cũ cực đẹp */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--color-text-title)] leading-tight mb-6 font-heading"
          >
            Nơi kết nối đam mê <br />
            <span className="gradient-text-alt drop-shadow-sm pb-2">
              Lan tỏa âm nhạc
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-balance text-base sm:text-lg text-[var(--color-text)] max-w-2xl mb-10 leading-relaxed"
          >
            Chào mừng bạn đến với mái nhà chung G4U. Chúng mình cùng chung nhịp
            đập âm nhạc, nơi những tiếng đàn guitar hòa nhịp với nhiệt huyết
            tuổi trẻ của sinh viên TDTU.
          </motion.p>

          {/* Action Buttons - Khôi phục class btn-primary thần thánh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <a
              href="#music-room"
              className="btn btn-primary h-12 px-8 text-sm font-bold shadow-[var(--shadow-glow)]"
            >
              <span>Nghe G4U Đàn</span>
              <Play size={14} fill="white" />
            </a>

            <a
              href="#about"
              className="btn btn-secondary h-12 px-8 text-sm font-bold bg-white"
            >
              <span>Tìm hiểu về CLB</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Stats Bar - Đã bỏ gap-4 và thêm viền ngang cho bản mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 glass-panel p-4 sm:p-6 rounded-[24px]"
          >
            {stats.map((item, idx) => (
              <div
                key={idx}
                // Thay p-2 thành py-6 px-2 để có không gian thở khi có viền ngang
                className={`flex flex-col items-center justify-center py-6 px-2 text-center border-[var(--color-border)]
                  ${idx === 0 ? "border-r border-b md:border-b-0" : ""}
                  ${idx === 1 ? "border-b md:border-b-0 md:border-r" : ""}
                  ${idx === 2 ? "border-r" : ""}
                  ${idx === 3 ? "" : ""}
                `}
              >
                <div className="text-primary mb-2">{item.icon}</div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-title)] font-heading leading-tight">
                  {item.value}
                </span>
                <span className="text-xs text-[var(--color-text-light)] mt-1 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Infinite Slider Section */}
      <div className="w-full mt-12 relative z-10 bg-[rgba(240,222,234,0.25)] py-6 border-y border-[rgba(240,222,234,0.6)]">
        
        {/* Thêm CSS Mask vào thẻ bọc ngoài cùng này */}
        <div 
          className="relative max-w-7xl mx-auto overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <InfiniteSlider speed={40} speedOnHover={15} gap={48} className="w-full py-2">
            {highlights.map((text, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-5 py-2 bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.7)] rounded-full select-none shadow-sm"
              >
                <span className="text-sm font-semibold text-[var(--color-text-title)] tracking-wide whitespace-nowrap">
                  {text}
                </span>
              </div>
            ))}
          </InfiniteSlider>

          {/* CHÚ Ý: Toàn bộ thẻ div bg-gradient và ProgressiveBlur cũ đã bị XÓA BỎ ở đây */}
          
        </div>
      </div>
    </main>
  );
}
