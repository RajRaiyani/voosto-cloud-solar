"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About Us", path: "/about-us" },
  ];

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="logo-link">
            <svg
              className="logo-icon"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="16" fill="url(#logo-grad)" />
              <path
                d="M18 8C12.48 8 8 12.48 8 18C8 19.84 8.5 21.57 9.38 23.05L14 14.5L18.5 22L21 17.5L26.62 23.05C27.5 21.57 28 19.84 28 18C28 12.48 23.52 8 18 8Z"
                fill="#060C17"
              />
              <path
                d="M18 13C15.24 13 13 15.24 13 18C13 20.76 15.24 23 18 23C20.76 23 23 20.76 23 18C23 15.24 20.76 13 18 13ZM18 21.5C16.07 21.5 14.5 19.93 14.5 18C14.5 16.07 16.07 14.5 18 14.5C19.93 14.5 21.5 16.07 21.5 18C21.5 19.93 19.93 21.5 18 21.5Z"
                fill="#00E699"
              />
              <path
                d="M20.5 18C20.5 19.38 19.38 20.5 18 20.5C16.62 20.5 15.5 19.38 15.5 18C15.5 16.62 16.62 15.5 18 15.5C19.38 15.5 20.5 16.62 20.5 18Z"
                fill="#00D2FF"
              />
              <defs>
                <linearGradient
                  id="logo-grad"
                  x1="2"
                  y1="2"
                  x2="34"
                  y2="34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E699" />
                  <stop offset="1" stopColor="#00D2FF" />
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">
              cloud <span className="logo-highlight">solar</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {link.name}
                  {isActive && <span className="nav-indicator" />}
                </Link>
              );
            })}
          </nav>



          {/* Hamburger Menu Button */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "mobile-menu-btn-active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "mobile-drawer-open" : ""}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

        </nav>
      </div>

      {/* CSS Styles specific to header/navigation */}
      <style jsx global>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          display: flex;
          align-items: center;
          z-index: 100;
          transition: var(--transition-smooth);
          border-bottom: 1px solid transparent;
        }

        .header-scrolled {
          background: rgba(6, 12, 23, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          height: 70px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .header-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-family-title);
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--text-primary);
          z-index: 102;
        }

        .logo-icon {
          filter: drop-shadow(0 0 4px var(--primary-glow));
        }

        .logo-highlight {
          color: var(--primary);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
        }

        .nav-link {
          font-family: var(--font-family-title);
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-secondary);
          position: relative;
          padding: 8px 0;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link-active {
          color: var(--primary);
          font-weight: 600;
        }

        .nav-indicator {
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 1px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .header-actions {
            display: none;
          }
        }

        .btn-login {
          font-family: var(--font-family-title);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-secondary);
          padding: 8px 16px;
        }

        .btn-login:hover {
          color: var(--text-primary);
        }

        .btn-header {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          z-index: 102;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }
        }

        .hamburger-line {
          width: 100%;
          height: 2px;
          background: var(--text-primary);
          border-radius: 1px;
          transition: var(--transition-bounce);
        }

        .mobile-menu-btn-active .line-1 {
          transform: translateY(8px) rotate(45deg);
        }

        .mobile-menu-btn-active .line-2 {
          opacity: 0;
        }

        .mobile-menu-btn-active .line-3 {
          transform: translateY(-8px) rotate(-45deg);
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: var(--bg-secondary);
          border-left: 1px solid var(--card-border);
          z-index: 101;
          padding: 120px 40px 40px;
          transition: var(--transition-bounce);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
        }

        .mobile-drawer-open {
          right: 0;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .mobile-nav-link {
          font-family: var(--font-family-title);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link:hover, .mobile-nav-link-active {
          color: var(--primary);
        }

        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }

        .mobile-actions .btn-login {
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--border-radius-sm);
        }
      `}</style>
    </>
  );
}
