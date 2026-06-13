import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.jpg";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRecruitmentModalOpen, setIsRecruitmentModalOpen] = useState(false);
  const [recruitmentUrl, setRecruitmentUrl] = useState("");

  // 1. Khởi tạo useRef để "bám" vào thẻ header
  const headerRef = useRef(null);

  useEffect(() => {
    fetch("./recruitment/recruitment.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.googleFormUrl) {
          setRecruitmentUrl(data.googleFormUrl);
        }
      })
      .catch((err) => {
        console.warn("Could not load recruitment.json", err);
      });
  }, []);

  // 2. Tự động đóng menu khi vuốt cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsMobileMenuOpen(false); // Đóng menu mobile khi cuộn cho mượt
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Xử lý chạm/click ra ngoài để đóng menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Nếu click vào một điểm KHÔNG nằm trong header -> Đóng menu
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside); // Hỗ trợ cảm ứng tốt hơn
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleRecruitmentClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const isValidUrl = (url) => {
      if (!url || url.trim() === "") return false;
      const u = url.trim().toLowerCase();
      return u.startsWith("http://") || u.startsWith("https://");
    };

    if (isValidUrl(recruitmentUrl)) {
      window.open(recruitmentUrl, "_blank");
    } else {
      setIsRecruitmentModalOpen(true);
    }
  };

  const navLinks = [
    { label: "Giới thiệu", href: "#about" },
    { label: "Sự kiện", href: "#events" },
    { label: "Thư viện", href: "#gallery" },
    { label: "Các ban", href: "#departments" },
    { label: "G4U Studio", href: "#music-room" },
    { label: "Merchandise", href: "#merchandise" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <>
      <header
        ref={headerRef} // 4. Gắn "con mắt" theo dõi vào thẻ header này
        id="site-header"
        className={cn(
          "fixed z-50 top-4 left-4 right-4 mx-auto max-w-7xl rounded-full border px-6 py-3 transition-all duration-300 backdrop-blur-md flex items-center justify-between",
          isScrolled
            ? "bg-[rgba(255,255,255,0.85)] shadow-[0_12px_40px_-10px_rgba(99,58,135,0.18)] border-[rgba(255,255,255,0.6)] py-2.5 top-2"
            : "bg-[rgba(255,255,255,0.65)] shadow-[0_10px_30px_-10px_rgba(99,58,135,0.08)] border-[rgba(255,255,255,0.4)]",
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-all duration-300"
        >
          <img
            src={logo}
            alt="CLB Guitar G4U Logo"
            className="w-9 h-9 rounded-full object-cover border-2 border-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-extrabold text-[var(--color-text-light)] tracking-widest uppercase mb-0.5">
              Câu lạc bộ
            </span>
            <span className="font-heading font-extrabold text-lg text-[var(--color-text-title)]">
              Guitar{" "}
              <span className="gradient-text-alt">
                G4U
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-heading font-semibold text-sm text-[var(--color-text-title)] px-4 py-2 rounded-full transition-all duration-200 hover:text-primary hover:bg-primary/5 after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-primary after:rounded-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={handleRecruitmentClick}
            className="ml-3 bg-gradient-to-r from-primary to-accent text-white font-heading font-bold text-[13px] px-5 py-2.5 rounded-full shadow-md shadow-primary/20 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Ứng tuyển
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center p-1.5 text-[var(--color-text-title)] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-[calc(100%+8px)] right-0 w-52 bg-[rgba(255,255,255,0.95)] backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-xl flex flex-col gap-1.5 animate-[slideDown_0.2s_ease-out_forwards]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading font-semibold text-sm text-[var(--color-text-title)] px-4 py-2.5 rounded-xl transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:pl-5 block text-left"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={handleRecruitmentClick}
              className="w-full text-center bg-gradient-to-r from-primary to-accent text-white font-heading font-bold text-[13px] py-2.5 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg mt-2 block"
            >
              Ứng tuyển
            </a>
          </div>
        )}
      </header>

      {/* Recruitment Modal Overlay */}
      {isRecruitmentModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[2000] flex items-center justify-center p-4"
          onClick={() => setIsRecruitmentModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-white border border-white/60 rounded-3xl p-8 shadow-2xl text-center flex flex-col items-center animate-[scaleIn_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsRecruitmentModalOpen(false)}
              className="absolute top-4 right-4 bg-black/5 hover:bg-black/10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer text-[var(--color-text-title)] transition-colors"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Announce Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="font-heading font-extrabold text-2xl text-[var(--color-text-title)] mb-3">
              Thông báo ứng tuyển
            </h3>

            {/* Message */}
            <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
              Các bạn hãy đón chờ thông tin về đợt tuyển thành viên tiếp theo
              trên facebook nha!
            </p>

            {/* Social Button */}
            <a
              href="https://www.facebook.com/clbguitarg4u.tdtu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-primary to-accent text-white font-heading font-bold text-sm py-3 rounded-full shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:translate-y-[-1px]"
            >
              Ghé thăm Fanpage Facebook
            </a>
          </div>
        </div>
      )}

      {/* Embedded Animations helper */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `,
        }}
      />
    </>
  );
}