import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      {/* Lado izquierdo */}
      <div className="footer-left">
        <div className="footer-logo">
          <a
            href="https://www.instant-gaming.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../logo.webp" alt="SEFAN logo" />
          </a>
        </div>
        <p>© 2025 | SEFAN | All Rights Reserved</p>
      </div>

      {/* Lado derecho */}
      <div className="footer-right">
        <div className="footer-buttons">
          <a
            href="https://www.instant-gaming.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Contáctanos</button>
          </a>
          <a
            href="https://www.instant-gaming.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Términos y Condiciones</button>
          </a>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.instant-gaming.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.instant-gaming.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.instant-gaming.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;