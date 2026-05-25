"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col brand-col">
              <Link href="/" className="footer-logo">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="16" fill="url(#footer-logo-grad)" />
                  <path
                    d="M18 8C12.48 8 8 12.48 8 18C8 19.84 8.5 21.57 9.38 23.05L14 14.5L18.5 22L21 17.5L26.62 23.05C27.5 21.57 28 19.84 28 18C28 12.48 23.52 8 18 8Z"
                    fill="#060C17"
                  />
                  <path
                    d="M18 13C15.24 13 13 15.24 13 18C13 20.76 15.24 23 18 23C20.76 23 23 20.76 23 18C23 15.24 20.76 13 18 13ZM18 21.5C16.07 21.5 14.5 19.93 14.5 18C14.5 16.07 16.07 14.5 18 14.5C19.93 14.5 21.5 16.07 21.5 18C21.5 19.93 19.93 21.5 18 21.5Z"
                    fill="#00E699"
                  />
                  <defs>
                    <linearGradient
                      id="footer-logo-grad"
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
                <span className="footer-logo-text">
                  cloud <span className="logo-highlight">solar</span>
                </span>
              </Link>
              <p className="footer-desc">
                Own solar. Without the installation. Cloud Solar helps you purchase panels in pre-built solar farms and host them virtually to offset your power bills.
              </p>
              <div className="social-links">
                <Link href="#" aria-label="Twitter">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Menu</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-links contact-info">
                <li>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@cloudsolar.co</span>
                </li>
                <li>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>WeWork Galaxy, MG Road, Bengaluru, KA, India</span>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><Link href="#">Terms of Use</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Host Partner Terms</Link></li>
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="footer-disclaimer">
            <p>
              <strong>Disclaimer:</strong> Cloud Solar (under development) is a digital platform facilitating the hosting of solar panels on industrial roofs. We do not sell micro-shares, securities, mutual funds, or financial investments. Solar panel ownership carries operating risks. Electrical generation credits depend on weather patterns and utility board approval. Past billing offsets are not a guarantee of future offsets.
            </p>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Cloud Solar. All rights reserved.</p>
            <p className="made-with">Made with 💚 for clean energy grids</p>
          </div>
        </div>
      </footer>

      {/* Footer Specific Styles */}
      <style jsx>{`
        .footer {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--card-border);
          padding: 80px 0 40px;
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-family-title);
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .footer-logo-text .logo-highlight {
          color: var(--primary);
        }

        .footer-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-links a {
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-links a:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: var(--primary-glow-subtle);
          transform: translateY(-2px);
        }

        .footer-heading {
          color: var(--text-primary);
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 24px;
          font-family: var(--font-family-title);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links a:hover {
          color: var(--primary);
          padding-left: 4px;
        }

        .contact-info li {
          display: flex;
          gap: 12px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .contact-info svg {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-disclaimer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 24px 0;
          margin-bottom: 30px;
          color: var(--text-muted);
          font-size: 0.8rem;
          line-height: 1.6;
          text-align: justify;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 576px) {
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }

        .made-with {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}</style>
    </>
  );
}
