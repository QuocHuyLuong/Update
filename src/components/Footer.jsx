import React from "react";
import { Heart } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-text-title)",
        color: "rgba(255, 255, 255, 0.7)",
        padding: "60px 0 30px 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "left",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: "360px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <img
                src={logo}
                alt="G4U Logo"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "800",
                  fontSize: "1.2rem",
                  color: "#fff",
                }}
              >
                CLB GUITAR G4U
              </span>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.6",
              }}
            >
              Nơi giao lưu, chia sẻ học tập và lan tỏa tình yêu âm nhạc của sinh
              viên trường Đại học Tôn Đức Thắng. Chúng mình đồng hành cùng đam
              mê của bạn.
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "1rem",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Liên kết nhanh
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.9rem",
              }}
            >
              <a
                href="#about"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  transition: "var(--transition)",
                }}
                className="footer-link"
              >
                Giới thiệu
              </a>
              <a
                href="#events"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  transition: "var(--transition)",
                }}
                className="footer-link"
              >
                Sự kiện
              </a>
              <a
                href="#gallery"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  transition: "var(--transition)",
                }}
                className="footer-link"
              >
                Thư viện
              </a>
              <a
                href="#departments"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  transition: "var(--transition)",
                }}
                className="footer-link"
              >
                Các ban hoạt động
              </a>
            </div>
          </div>

          {/* Activities Col */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "1rem",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Hoạt động chính
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.9rem",
              }}
            >
              <span>Biểu diễn tại các show trong và ngoài trường</span>
              <span>Quay và dựng các clip cover, livesession</span>
              <span>Giao lưu nghệ thuật</span>
              <span>Tổ chức các hoạt động xã hội</span>
            </div>
          </div>
        </div>

        {/* Bottom Col */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.85rem",
          }}
        >
          <span>
            © {currentYear} CLB Guitar G4U - Đại học Tôn Đức Thắng. All rights
            reserved.
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Made with{" "}
            <Heart
              size={14}
              color="var(--color-primary)"
              fill="var(--color-primary)"
            />{" "}
            for G4U by Antigravity
          </span>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .footer-link:hover {
          color: var(--color-primary) !important;
          padding-left: 4px;
        }
      `,
        }}
      />
    </footer>
  );
}
