import React, { useState, useEffect } from "react";
import { Calendar, MapPin, X } from "lucide-react"; // Thêm icon X để làm nút đóng Modal
import { motion, AnimatePresence } from "framer-motion"; // Thêm AnimatePresence cho Modal
import ScrollReveal from "./ui/ScrollReveal";

const FALLBACK_EVENTS = [
  {
    title: "LIVESHOW 'CÁNH DIỀU ƯỚC MƠ'",
    status: "Nổi bật",
    image: "./events/anh4.jpg",
    date: "11/05/2026",
    location: "Sảnh D-E - TDTU",
    desc: "Đêm nhạc liveshow thiện nguyện với mong muốn lan tỏa âm nhạc và tinh thần tích cực tới mọi người",
    tagColor: "var(--color-primary)",
  },
  {
    title: "LIVESHOW 'S4U'",
    status: "Nổi bật",
    image: "./events/S4U.jpg",
    date: "19/06/2025",
    location: "Hội trường 6M - TDTU",
    desc: "Liveshow thường niên nơi tất cả ban trong câu lạc bộ cùng nhau tạo ra một liveshow để lan tỏa âm nhạc tới với toàn thể sinh viên TDTU ",
    tagColor: "var(--color-primary)",
  },
  {
    title: "LIVESHOW 'CHÓNG HOA'",
    status: "Nổi bật",
    image: "./events/Chong_hoa.jpg",
    date: "06/12/2024",
    location: "Hội trường 6M - TDTU",
    desc: "Đêm nhạc thiện nguyện đầu tiên của câu lạc bộ.",
    tagColor: "var(--color-primary)",
  },
];

export default function Events() {
  const [events, setEvents] = useState([]);

  // --- STATE MỚI CHO MODAL ---
  const [selectedEvent, setSelectedEvent] = useState(null); // Lưu thông tin event đang được chọn
  const [isModalOpen, setIsModalOpen] = useState(false); // Quản lý trạng thái đóng/mở modal

  useEffect(() => {
    fetch("./events/events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.warn("Could not load events.json, using fallback.", err);
        // fallback data
        setEvents(FALLBACK_EVENTS);
      });
  }, []);

  // --- HÀM XỬ LÝ MODAL ---
  const handleOpenModal = (eventData) => {
    setSelectedEvent(eventData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Đợi hiệu ứng đóng kết thúc rồi mới xóa data để tránh giật UI
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <section
      id="events"
      style={{ background: "var(--color-bg-base)", position: "relative" }}
    >
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>
              Sự kiện &{" "}
              <span className="gradient-text-alt">Hoạt động nổi bật</span>
            </h2>
            <p>
              Cùng nhìn lại những chương trình âm nhạc đặc sắc và kế hoạch sắp
              tới của G4U
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-3">
          {events.map((event, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.12}>
              <motion.div
                className="glass-panel"
                onClick={() => handleOpenModal(event)} // Kích hoạt mở Modal khi click
                whileHover={{ y: -8, boxShadow: "var(--shadow-lg)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  borderRadius: "var(--radius-md)",
                  height: "100%",
                  cursor: "pointer", // Đảm bảo có icon bàn tay khi hover
                }}
              >
                {/* 1. Phần hình ảnh (Chỉ giữ hình ảnh, bỏ Tag) */}
                <div
                  style={{
                    position: "relative",
                    height: "240px",
                    overflow: "hidden",
                  }}
                >
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* 2. Phần Card Body (Chỉ giữ lại Tiêu đề, căn giữa cho đẹp mắt) */}
                <div
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    textAlign: "center", // Căn giữa tiêu đề
                    justifyContent: "center",
                    background: "var(--color-bg-white)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      margin: 0,
                      color: "var(--color-text-title)",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* --- PHẦN UI MODAL (POPUP) --- */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal} // Click ra ngoài nền đen sẽ đóng Modal
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(20, 10, 28, 0.7)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
          >
            {/* Hộp nội dung Modal */}
            <motion.div
              initial={{ y: 30, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Ngăn việc click vào form làm đóng Modal
              style={{
                background: "var(--color-bg-white)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                width: "100%",
                maxWidth: "600px",
                boxShadow: "var(--shadow-lg)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                maxHeight: "90vh",
              }}
            >
              {/* Nút Đóng (Close) */}
              <button
                onClick={handleCloseModal}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  zIndex: 10,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>

              {/* Ảnh Modal */}
              <div style={{ height: "280px", width: "100%", flexShrink: 0 }}>
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Thông tin chi tiết Modal (Có thể cuộn nếu nội dung quá dài) */}
              <div
                style={{
                  padding: "32px",
                  overflowY: "auto",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    backgroundColor: "rgba(232, 59, 77, 0.1)",
                    color: "var(--color-primary)",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {selectedEvent.status}
                </span>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--color-text-title)",
                    marginTop: "12px",
                    marginBottom: "16px",
                    fontFamily: "var(--font-heading)",
                    fontWeight: "800",
                  }}
                >
                  {selectedEvent.title}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text)",
                    lineHeight: "1.7",
                    marginBottom: "24px",
                  }}
                >
                  {selectedEvent.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    padding: "16px",
                    background: "var(--color-bg-base)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "0.95rem",
                      color: "var(--color-text-title)",
                      fontWeight: "500",
                    }}
                  >
                    <Calendar size={18} color="var(--color-primary)" />
                    <span>Thời gian: {selectedEvent.date}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "0.95rem",
                      color: "var(--color-text-title)",
                      fontWeight: "500",
                    }}
                  >
                    <MapPin size={18} color="var(--color-secondary)" />
                    <span>Địa điểm: {selectedEvent.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
