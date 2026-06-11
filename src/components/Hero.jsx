import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, CalendarDays, Activity, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function Hero() {
  const stats = [
    { value: '2011', label: 'Năm thành lập', icon: <CalendarDays size={18} /> },
    { value: '10+', label: 'Năm hoạt động', icon: <Activity size={18} /> },
    { value: '500+', label: 'Thành viên', icon: <Users size={18} /> },
    { value: '18K+', label: 'Người theo dõi', icon: <Heart size={18} /> }
  ];

  const highlights = [
    '🎸 Acoustic Live',
    '🎵 Live Sessions',
    '🎤 Vocal & Chorus',
    '🥁 Cajon Beats',
    '🎹 Keyboard',
    '⚡ Fingerstyle Guitar',
    '✨ Liveshows',
    '🤝 Jamming Đêm'
  ];

  return (
    <main className="overflow-x-hidden w-full min-h-screen relative flex flex-col justify-between pt-32 pb-12 bg-[#fcf6f9]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf6f9]/85 via-[#fcf6f9]/70 to-[#fcf6f9] z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-18 dark:opacity-25 scale-105"
          src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
        />
      </div>

      {/* Main Content Hero */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Sparkle Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider font-heading">
              CLB GUITAR ĐẠI HỌC TÔN ĐỨC THẮNG
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2c1a3d] leading-tight mb-6 font-heading"
          >
            Nơi kết nối đam mê <br />
            <span className="bg-gradient-to-r from-primary via-[#a83b68] to-secondary bg-clip-text text-transparent drop-shadow-sm">
              Lan tỏa âm nhạc
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-balance text-base sm:text-lg text-[#52475c] max-w-2xl mb-10 leading-relaxed"
          >
            Chào mừng bạn đến với mái nhà chung G4U. Chúng mình cùng chung nhịp đập âm nhạc, nơi những tiếng đàn guitar hòa nhịp với nhiệt huyết tuổi trẻ của sinh viên TDTU.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-full text-sm font-bold font-heading bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/45 cursor-pointer"
            >
              <a href="#music-room" className="flex items-center gap-2">
                <span>Nghe G4U Đàn</span>
                <Play size={14} fill="white" />
              </a>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 px-8 rounded-full text-sm font-bold font-heading text-secondary border border-secondary/20 hover:bg-secondary/10 transition-all hover:translate-y-[-2px] cursor-pointer"
            >
              <a href="#about" className="flex items-center gap-2">
                <span>Tìm hiểu về CLB</span>
                <ArrowRight size={14} />
              </a>
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/55 border border-white/80 p-6 rounded-3xl backdrop-blur-xl shadow-md"
          >
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-2 text-center border-r last:border-0 border-[#f0deea] md:border-r">
                <div className="text-primary mb-1">{item.icon}</div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2c1a3d] font-heading leading-tight">
                  {item.value}
                </span>
                <span className="text-xs text-[#8a7c93] mt-1 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>


        </div>
      </div>

      {/* Infinite Slider Section */}
      <div className="w-full mt-12 relative z-10 bg-[#f0deea]/25 py-6 border-y border-[#f0deea]/60">
        <div className="relative max-w-7xl mx-auto px-6 overflow-hidden">
          <InfiniteSlider speed={35} gap={48} className="w-full">
            {highlights.map((text, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-5 py-2 bg-white/85 border border-white/70 rounded-full select-none shadow-sm"
              >
                <span className="text-sm font-semibold text-[#2c1a3d] tracking-wide whitespace-nowrap">
                  {text}
                </span>
              </div>
            ))}
          </InfiniteSlider>

          {/* Blur Overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fcf6f9] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fcf6f9] to-transparent pointer-events-none" />
          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-24"
            direction="left"
            blurIntensity={1.2}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-24"
            direction="right"
            blurIntensity={1.2}
          />
        </div>
      </div>
    </main>
  );
}
