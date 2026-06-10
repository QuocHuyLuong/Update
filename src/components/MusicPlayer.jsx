import React, { useState, useEffect, useRef } from 'react';
import { Video, Calendar, FileText } from 'lucide-react';
import Hls from 'hls.js';
import ScrollReveal from './ui/ScrollReveal';

export default function MusicPlayer() {
  const [videoList, setVideoList] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  // Fetch videos metadata automatically
  useEffect(() => {
    fetch('./videos/videos.json')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setVideoList(data);
        }
      })
      .catch(err => {
        console.warn("Could not load videos.json. Using fallback template.", err);
        // Fallback placeholder data
        setVideoList([
          {
            id: 1,
            title: "Live Session: Cánh Diều Ước Mơ (Liveshow)",
            description: "Bản trình diễn mộc mạc và giải cảm xúc ghi hình trực tiếp tại Hội trường 6B TDTU. Phát trực tuyến qua luồng HLS Mux.",
            videoUrl: "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8",
            date: "11/05/2026"
          },
          {
            id: 2,
            title: "Acoustic Show: Tuổi Hồng Thơ Ngây",
            description: "Tiết mục guitar đệm hát mộc được thực hiện bởi Ban Chuyên môn CLB G4U. Nhúng từ YouTube.",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            date: "20/12/2025"
          }
        ]);
      });
  }, []);

  const activeVid = videoList[currentVideoIndex];
  const videoUrl = activeVid?.videoUrl || "";

  // Helper to parse YouTube ID
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  const ytId = getYouTubeId(videoUrl);
  const isFb = videoUrl.includes('facebook.com/plugins') || videoUrl.includes('facebook.com/video');

  // Effect to load Hls stream or video url into the HTML5 <video> ref
  useEffect(() => {
    if (ytId || isFb || !videoUrl || !videoRef.current) return;
    
    let hls = null;
    const videoElement = videoRef.current;

    if (videoUrl.includes('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(videoElement);
      } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        videoElement.src = videoUrl;
      }
    } else {
      // Direct MP4 or local fallback path
      videoElement.src = videoUrl.startsWith('http') ? videoUrl : `/videos/${videoUrl || activeVid?.fileName || ''}`;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoUrl, ytId, isFb]);

  return (
    <section id="music-room" style={{ background: 'var(--color-bg-white)', padding: '80px 0' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>
              G4U <span className="gradient-text">Studio</span>
            </h2>
            <p>Trải nghiệm những sản phẩm Live Session cực chất của G4Uer</p>
          </div>
        </ScrollReveal>

        <div className="grid-2" style={{ alignItems: 'stretch', maxWidth: '1000px', margin: '0 auto', gap: '32px' }}>
          
          {/* Left Panel: Video Player */}
          <ScrollReveal direction="right" delay={0.1} className="h-full flex flex-col justify-center">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              
              <div 
                className="glass-panel" 
                style={{ 
                  overflow: 'hidden', 
                  borderRadius: 'var(--radius-md)', 
                  aspectRatio: '16/9',
                  background: '#0d0615',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid rgba(133, 58, 120, 0.3)'
                }}
              >
                {videoList.length > 0 ? (
                  ytId ? (
                    <iframe
                      key={currentVideoIndex}
                      src={`https://www.youtube.com/embed/${ytId}?autoplay=0&rel=0`}
                      title={activeVid?.title || "YouTube video"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                    />
                  ) : isFb ? (
                    <iframe
                      key={currentVideoIndex}
                      src={videoUrl}
                      title={activeVid?.title || "Facebook video"}
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                    />
                  ) : (
                    <video
                      key={currentVideoIndex}
                      ref={videoRef}
                      controls
                      style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
                    />
                  )
                ) : (
                  <div className="flex-center" style={{ height: '100%', flexDirection: 'column', color: '#fff', padding: '20px' }}>
                    <Video size={48} color="var(--color-primary)" style={{ marginBottom: '12px' }} />
                    <p style={{ fontWeight: '600' }}>Chưa có Video Live Session nào</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
                      Hãy thêm video vào file /public/videos/videos.json để bắt đầu.
                    </p>
                  </div>
                )}
              </div>

              {/* Video detail panel */}
              <div 
                className="glass-panel" 
                style={{ 
                  padding: '20px 24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(232, 59, 77, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}
                >
                  <Video size={24} />
                </div>
                <div style={{ textAlign: 'left', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-title)', marginBottom: '4px', fontWeight: 700 }}>
                    {videoList[currentVideoIndex]?.title || "Đang tải video..."}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                    <Calendar size={14} /> {videoList[currentVideoIndex]?.date}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Panel: Video Playlist & Description */}
          <ScrollReveal direction="left" delay={0.25} className="h-full">
            <div 
              className="glass-panel" 
              style={{ 
                padding: '32px 24px', 
                background: 'rgba(255, 255, 255, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: '100%',
                justifyContent: 'flex-start'
              }}
            >
              {/* Active Video Description Card */}
              {videoList.length > 0 && (
                <div 
                  style={{ 
                    textAlign: 'left', 
                    background: 'rgba(99, 58, 135, 0.03)', 
                    padding: '16px', 
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    marginBottom: '4px'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <FileText size={14} /> CREDIT
                  </span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text)', lineHeight: '1.5', margin: 0 }}>
                    {videoList[currentVideoIndex]?.description}
                  </p>
                </div>
              )}

              {/* Videos list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', overflowX: 'hidden', maxHeight: '280px' }}>
                {videoList.map((vid, idx) => (
                  <motion.div
                    key={vid.id}
                    onClick={() => setCurrentVideoIndex(idx)}
                    whileHover={{ scale: 1.01, x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                      border: '1px solid',
                      backgroundColor: currentVideoIndex === idx ? 'rgba(232, 59, 77, 0.08)' : 'transparent',
                      borderColor: currentVideoIndex === idx ? 'var(--color-primary)' : 'transparent',
                    }}
                    className="playlist-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
                      <Video size={16} color={currentVideoIndex === idx ? 'var(--color-secondary)' : 'var(--color-text-light)'} />
                      <div>
                        <span style={{ fontSize: '0.9rem', fontWeight: currentVideoIndex === idx ? '700' : '500', color: currentVideoIndex === idx ? 'var(--color-text-title)' : 'var(--color-text)' }}>
                          {vid.title}
                        </span>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                          {vid.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      <div style={{ marginTop: '24px', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
        <p>💡 Chọn một clip từ danh sách bên phải để phát trực tiếp buổi biểu diễn Live Session.</p>
      </div>
    </section>
  );
}
