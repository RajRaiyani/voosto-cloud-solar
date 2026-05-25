"use client";

import React from "react";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Reserve Your Virtual Panels",
      desc: "Calculate your power bill offsets using our online calculator. Reserve as few as one panel (100W) or fully offset your entire household consumption. You own the digital asset for its 25-year lifetime.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "We Install & Operate Panels",
      desc: "We co-locate panels on expansive, high-irradiation industrial and warehouse rooftops. Our engineering teams manage site installation, cleaning, grid compliance, and 24/7 solar output optimization.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Receive Solar Credits Directly",
      desc: "Clean solar power generated is sent to the regional DISCOM utility grid. In return, energy credits (in ₹) are applied digitally to your home or office electricity bill. You save every single month.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="how-it-works-page">
        {/* Background decorative glows */}
        <div className="glow-bg pulse-glow" style={{ top: "10%", right: "15%" }} />
        <div className="glow-bg-blue" style={{ bottom: "20%", left: "10%" }} />

        {/* Hero Section */}
        <section className="hw-hero section-padding">
          <div className="container text-center-hw">
            <span className="badge">The Architecture</span>
            <h1>How Cloud Solar Works</h1>
            <p className="hw-subtitle">
              We've digitized the solar supply chain, enabling you to earn utility billing offsets from off-site solar farms. It's clean power, simplified.
            </p>
          </div>
        </section>

        {/* 3-Step Process Cards */}
        <section className="hw-steps-section">
          <div className="container">
            <div className="grid-3">
              {steps.map((step, idx) => (
                <div key={idx} className="step-card card-glass">
                  <div className="step-header">
                    <div className="step-icon-wrap">{step.icon}</div>
                    <span className="step-number">{step.num}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CSS Animated Flow Diagram */}
        <section className="section-padding diagram-section">
          <div className="container">
            <div className="section-title-center">
              <span className="badge">Visual Flow</span>
              <h2>The Solar Credit Ecosystem</h2>
              <p>Witness how physical solar energy on commercial rooftops translates to savings on your bill.</p>
            </div>

            <div className="diagram-container card-glass">
              <div className="diagram-grid">
                {/* Node 1: Solar Parks */}
                <div className="diag-node card-forest">
                  <div className="node-icon">☀️</div>
                  <h4>Solar Parks</h4>
                  <p className="node-desc">Your virtual panels set up on warehouse rooftops generate clean DC electricity.</p>
                  <span className="node-status">Generating Power</span>
                </div>

                {/* Animated Line 1 */}
                <div className="flow-connector">
                  <div className="connector-line">
                    <span className="particle energy-particle-1" />
                  </div>
                  <span className="flow-lbl">Electricity Generated</span>
                </div>

                {/* Node 2: Utility Grid */}
                <div className="diag-node card-forest active-node">
                  <div className="node-icon">⚡</div>
                  <h4>State Grid (DISCOM)</h4>
                  <p className="node-desc">Clean power is supplied to the utility board, earning solar credit valuation.</p>
                  <span className="node-status">Net-Billing Approved</span>
                </div>

                {/* Animated Line 2 */}
                <div className="flow-connector">
                  <div className="connector-line">
                    <span className="particle credit-particle-2" />
                  </div>
                  <span className="flow-lbl">Solar Credits Sent</span>
                </div>

                {/* Node 3: Consumer */}
                <div className="diag-node card-forest">
                  <div className="node-icon">🏠</div>
                  <h4>My Account</h4>
                  <p className="node-desc">Equivalent credits are applied directly to reduce your consumer account balance.</p>
                  <span className="node-status">₹ Monthly Bill Offset</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Explanation / Features Section */}
        <section className="section-padding hw-details-section">
          <div className="container">
            <div className="grid-2">
              <div className="hw-details-content">
                <span className="badge">Smart Infrastructure</span>
                <h2>Why Corporate Rooftops?</h2>
                <p>
                  Instead of individual household roofs, which are prone to shading, structural loads, and micro-grid constraints, Cloud Solar scales panels on commercial properties.
                </p>
                <div className="hw-bullets">
                  <div className="bullet-row">
                    <span className="bullet-chk">✓</span>
                    <div>
                      <strong>Industrial Irradiation:</strong> Commercial sites feature large metal decks with zero shade obstructions, yielding up to 20% higher solar production.
                    </div>
                  </div>
                  <div className="bullet-row">
                    <span className="bullet-chk">✓</span>
                    <div>
                      <strong>Professional O&M:</strong> Dedicated industrial cleaning arrays and professional engineers ensure panel arrays operate at peak generation.
                    </div>
                  </div>
                  <div className="bullet-row">
                    <span className="bullet-chk">✓</span>
                    <div>
                      <strong>Long-term Contracts:</strong> Co-hosting rooftops are secured with solid 25-year industrial leases, guaranteeing consistent performance.
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic container */}
              <div className="card-glass details-graphic">
                <h3>Asset Lifecycle Guarantee</h3>
                <div className="lifecycle-timeline">
                  <div className="timeline-node">
                    <div className="t-node-dot active" />
                    <div>
                      <strong>Year 01 - 05</strong>
                      <p>Installation, grid registration, and baseline billing transfers start.</p>
                    </div>
                  </div>
                  <div className="timeline-node">
                    <div className="t-node-dot" />
                    <div>
                      <strong>Year 06 - 15</strong>
                      <p>Stabilized solar yields. Full O&M updates and panels degradation tracking.</p>
                    </div>
                  </div>
                  <div className="timeline-node">
                    <div className="t-node-dot" />
                    <div>
                      <strong>Year 16 - 25</strong>
                      <p>Extended panel efficiency offsets. Asset lifecycle retirement planning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="hw-cta-section section-padding">
          <div className="container text-center-hw">
            <div className="card-glass cta-card">
              <h2>Join the Decentralized Grid</h2>
              <p>Ready to offset your electricity bills? Calculate your requirements and secure virtual panels today.</p>
              <div className="cta-buttons">
                <Link href="/" className="btn-primary">
                  Go to Calculator
                </Link>
                <Link href="/about-us" className="btn-secondary">
                  Read Our Mission
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Local styles for How It Works page */}
      <style jsx>{`
        .how-it-works-page {
          position: relative;
        }

        .text-center-hw {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .hw-subtitle {
          color: var(--text-secondary);
          font-size: 1.2rem;
          line-height: 1.6;
          margin-top: 20px;
        }

        /* Step cards */
        .step-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .step-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .step-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-sm);
          background: var(--primary-glow-subtle);
          border: 1px solid var(--forest-border);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-number {
          font-family: var(--font-family-title);
          font-weight: 800;
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.05);
        }

        .step-card h3 {
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .step-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Flow Diagram CSS */
        .diagram-container {
          padding: 48px;
          margin-top: 40px;
        }

        .diagram-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        @media (max-width: 968px) {
          .diagram-grid {
            flex-direction: column;
            gap: 40px;
          }
        }

        .diag-node {
          flex: 1;
          max-width: 250px;
          text-align: center;
          padding: 24px;
          border: 1px solid var(--card-border);
          border-radius: var(--border-radius-md);
          position: relative;
          z-index: 5;
        }

        .diag-node.active-node {
          border-color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow-subtle);
        }

        .node-icon {
          font-size: 2.2rem;
          margin-bottom: 12px;
          display: block;
        }

        .diag-node h4 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .node-desc {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .node-status {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary);
          background: rgba(0, 230, 153, 0.08);
          padding: 2px 10px;
          border-radius: 100px;
          text-transform: uppercase;
        }

        /* Flow Connectors */
        .flow-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-grow: 1;
          position: relative;
          padding: 0 12px;
        }

        @media (max-width: 968px) {
          .flow-connector {
            transform: rotate(90deg);
            padding: 20px 0;
          }
        }

        .connector-line {
          height: 2px;
          width: 100%;
          min-width: 60px;
          background: rgba(255, 255, 255, 0.08);
          position: relative;
          border-radius: 1px;
        }

        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          top: -3px;
        }

        .energy-particle-1 {
          background: var(--primary);
          box-shadow: 0 0 8px var(--primary);
          animation: flowRight 2s infinite linear;
        }

        .credit-particle-2 {
          background: var(--secondary);
          box-shadow: 0 0 8px var(--secondary);
          animation: flowRight 2s infinite linear;
          animation-delay: 1s;
        }

        @keyframes flowRight {
          0% { left: 0%; }
          100% { left: 100%; }
        }

        .flow-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 8px;
          white-space: nowrap;
        }

        /* Corporate Rooftops detailed section */
        .hw-details-content h2 {
          font-size: 2.25rem;
          margin-bottom: 20px;
        }

        .hw-details-content p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .hw-bullets {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bullet-row {
          display: flex;
          gap: 16px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .bullet-chk {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0, 230, 153, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .bullet-row strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 4px;
        }

        .bullet-row div {
          color: var(--text-secondary);
        }

        /* Timeline block */
        .details-graphic {
          padding: 40px;
        }

        .details-graphic h3 {
          font-size: 1.3rem;
          margin-bottom: 32px;
        }

        .lifecycle-timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
        }

        .lifecycle-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 6px;
          width: 2px;
          background: rgba(255, 255, 255, 0.05);
        }

        .timeline-node {
          display: flex;
          gap: 24px;
          position: relative;
        }

        .t-node-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--card-border);
          position: relative;
          z-index: 5;
          margin-top: 4px;
          transition: var(--transition-smooth);
        }

        .t-node-dot.active {
          border-color: var(--primary);
          background: var(--primary);
          box-shadow: 0 0 8px var(--primary);
        }

        .timeline-node strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 4px;
          font-family: var(--font-family-title);
          font-size: 1rem;
        }

        .timeline-node p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Call to Action card */
        .cta-card {
          padding: 60px 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-card h2 {
          font-size: 2.2rem;
          margin-bottom: 12px;
        }

        .cta-card p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          max-width: 550px;
          margin: 0 auto 32px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        @media (max-width: 576px) {
          .diagram-container {
            padding: 24px 16px;
          }
          .cta-card {
            padding: 40px 16px;
          }
          .cta-card h2 {
            font-size: 1.8rem;
          }
          .cta-buttons {
            flex-direction: column;
            gap: 12px;
          }
          .step-card {
            padding: 24px 16px !important;
          }
          .timeline-node p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
