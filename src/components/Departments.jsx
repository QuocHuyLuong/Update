import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Zap, Palette, Handshake, Music, Users, TrendingUp, Heart, Star, Award, Activity, BookOpen, Calendar, Camera, Globe, Compass, Coffee, Play, Smile, Sparkles } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';


export default function Departments() {
  const departmentsData = [
    {
      id: 'chuyen-mon',
      name: 'Ban Chuyên môn',
      subtitle: /* DEPT_CHUYEN_MON_SUBTITLE_START */'Trình diễn nhạc cụ & Vocal'/* DEPT_CHUYEN_MON_SUBTITLE_END */,
      description: /* DEPT_CHUYEN_MON_DESC_START */'Dành cho những bạn có năng khiếu về nhạc cụ và ca hát, cùng tình yêu sâu sắc với âm nhạc. Đây là nơi bạn sẽ được khám phá nhiều điều mới mẻ và thú vị trong thế giới âm nhạc và là cơ hội để bạn mang những thanh âm màu sắc đến với mọi người.'/* DEPT_CHUYEN_MON_DESC_END */,
      image: '/departments/chuyen_mon.jpg',
      gradient: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
      shadowColor: 'rgba(99, 58, 135, 0.25)',
      icon: /* DEPT_CHUYEN_MON_ICON_START */<Flame size={30} strokeWidth={2.2} />/* DEPT_CHUYEN_MON_ICON_END */,
      tasks: [
        'Dàn dựng, tập luyện các tiết mục hòa thanh nhạc cụ đa dạng (Guitar, Vocal, Cajon, Keyboard, Bass...) cho các sự kiện.',
        'Giao lưu đàn hát, chia sẻ kinh nghiệm biểu diễn và kiến thức âm nhạc thực chiến giữa các thành viên.',
        'Tổ chức sinh hoạt chuyên môn hàng tuần giúp nâng cao khả năng hòa phối band nhạc và làm chủ sân khấu.'
      ]
    },
    {
      id: 'su-kien',
      name: 'Ban Sự kiện',
      subtitle: /* DEPT_SU_KIEN_SUBTITLE_START */'Ý tưởng & Quản lý hậu cần'/* DEPT_SU_KIEN_SUBTITLE_END */,
      description: /* DEPT_SU_KIEN_DESC_START */'Phù hợp với các bạn đam mê và muốn thử sức trong việc lên ý tưởng, lập kế hoạch và tham gia tổ chức, điều phối các sự kiện - những con người đứng sau ánh đèn sân khấu, biến các ý tưởng thành hiện thực. Tại đây, bạn sẽ được trải nghiệm những khía cạnh đầy thú vị của lĩnh vực sự kiện.'/* DEPT_SU_KIEN_DESC_END */,
      image: '/departments/su_kien.jpg',
      gradient: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
      shadowColor: 'rgba(232, 59, 77, 0.25)',
      icon: /* DEPT_SU_KIEN_ICON_START */<Zap size={30} strokeWidth={2.2} />/* DEPT_SU_KIEN_ICON_END */,
      tasks: [
        'Lên ý tưởng kịch bản, viết kế hoạch và điều phối hoạt động hậu cần cho liveshow thường niên.',
        'Thiết kế, dàn dựng sân khấu, chuẩn bị đạo cụ biểu diễn và quản lý quy trình chạy chương trình.',
        'Quản lý hệ thống trang thiết bị kỹ thuật, nhạc cụ và phòng sinh hoạt câu lạc bộ.'
      ]
    },
    {
      id: 'truyen-thong',
      name: 'Ban Truyền thông',
      subtitle: /* DEPT_TRUYEN_THONG_SUBTITLE_START */'Sáng tạo nội dung & Hình ảnh'/* DEPT_TRUYEN_THONG_SUBTITLE_END */,
      description: /* DEPT_TRUYEN_THONG_DESC_START */'Dành cho các bạn có khả năng sáng tạo nội dung, viết lách, thiết kế, chỉnh sửa video, quay phim và muốn tự mình sản xuất các sản phẩm truyền thông. Đây là cơ hội để bạn khám phá và trải nghiệm thế giới đầy màu sắc của lĩnh vực media.'/* DEPT_TRUYEN_THONG_DESC_END */,
      image: '/departments/truyen_thong.jpg',
      gradient: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
      shadowColor: 'rgba(99, 58, 135, 0.25)',
      icon: /* DEPT_TRUYEN_THONG_ICON_START */<Palette size={30} strokeWidth={2.2} />/* DEPT_TRUYEN_THONG_ICON_END */,
      tasks: [
        'Quay phim, chụp ảnh lưu giữ các hoạt động, sự kiện và sản xuất các video recap biểu diễn.',
        'Quản lý và biên tập nội dung trên các nền tảng mạng xã hội chính thức (Facebook Fanpage, Instagram, TikTok).',
        'Thiết kế ấn phẩm truyền thông số (banner, avatar, poster) phục vụ tuyển thành viên mới và tổ chức liveshow.'
      ]
    },
    {
      id: 'doi-ngoai',
      name: 'Ban Đối ngoại',
      subtitle: /* DEPT_DOI_NGOAI_SUBTITLE_START */'Kết nối cộng đồng & Đối tác'/* DEPT_DOI_NGOAI_SUBTITLE_END */,
      description: /* DEPT_DOI_NGOAI_DESC_START */'Đại diện hình ảnh của CLB, chịu trách nhiệm kết nối với đối tác, doanh nghiệp và các tổ chức trong ngành âm nhạc. Ban Đối Ngoại không chỉ mang lại lợi ích về tài chính, truyền thông và chuyên môn mà còn tạo cơ hội nghề nghiệp cho thành viên CLB. Đồng thời, đây cũng là cầu nối gắn kết các thế hệ thành viên, góp phần xây dựng CLB phát triển bền vững.'/* DEPT_DOI_NGOAI_DESC_END */,
      image: '/departments/doi_ngoai.jpg',
      gradient: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
      shadowColor: 'rgba(168, 59, 104, 0.25)',
      icon: /* DEPT_DOI_NGOAI_ICON_START */<Handshake size={30} strokeWidth={2.2} />/* DEPT_DOI_NGOAI_ICON_END */,
      tasks: [
        'Kết nối giao lưu nghệ thuật với các CLB, đội nhóm trong trường và các trường Đại học bạn.',
        'Liên hệ và làm việc với các nhà tài trợ, bảo trợ truyền thông để gây quỹ hoạt động cho CLB.',
        'Đại diện hình ảnh G4U trong các chương trình liên kết cấp khoa, trường và xã hội.'
      ]
    }
  ];

  return (
    <section id="departments" style={{ background: 'var(--color-bg-base)', padding: '80px 0' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>
              Các ban <span className="gradient-text-alt">Hoạt động tại G4U</span>
            </h2>
            <p>4 mảnh ghép hoàn hảo phối hợp chặt chẽ để tạo nên một tập thể câu lạc bộ chuyên nghiệp và tràn đầy năng lượng</p>
          </div>
        </ScrollReveal>

        <div 
          className="grid-2" 
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {departmentsData.map((dept, index) => (
            <ScrollReveal key={dept.id} direction="up" delay={index * 0.12}>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                className="glass-panel"
                style={{
                  background: 'var(--color-bg-white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  justifyContent: 'space-between',
                  height: '100%',
                  cursor: 'pointer'
                }}
                variants={{
                  hover: {
                    y: -8,
                    boxShadow: 'var(--shadow-lg)',
                    borderColor: 'var(--color-primary)'
                  }
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Department Image Banner */}
                  <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <motion.img 
                      src={dept.image} 
                      alt={dept.name} 
                      variants={{
                        hover: { scale: 1.04 }
                      }}
                      transition={{ duration: 0.4 }}
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block'
                      }}
                    />
                  </div>

                  {/* Content Body */}
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      {/* Header info */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                        {/* Glowing Icon wrapper */}
                        <motion.div 
                          variants={{
                            hover: { scale: 1.1, rotate: 4 }
                          }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '16px',
                            background: dept.gradient,
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 10px 20px ${dept.shadowColor}`,
                            flexShrink: 0
                          }}
                        >
                          {dept.icon}
                        </motion.div>

                        <div>
                          <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-title)', margin: 0, fontWeight: 800 }}>
                            {dept.name}
                          </h3>
                          <span 
                            style={{ 
                              fontSize: '0.85rem', 
                              fontWeight: '700', 
                              color: 'var(--color-accent)',
                              fontFamily: 'var(--font-heading)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}
                          >
                            {dept.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p 
                        style={{ 
                          fontSize: '0.925rem', 
                          color: 'var(--color-text)', 
                          lineHeight: '1.6', 
                          marginBottom: '24px' 
                        }}
                      >
                        {dept.description}
                      </p>
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
