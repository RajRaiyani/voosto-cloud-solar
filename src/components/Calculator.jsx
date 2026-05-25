"use client";

import React, { useState } from "react";

export default function Calculator() {
  const [billInput, setBillInput] = useState("2,500");
  const [savingsPct, setSavingsPct] = useState(75);

  // Parse bill input to numeric value
  const getNumericBill = () => {
    const cleaned = billInput.replace(/[^0-9.]/g, "");
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  };

  const bill = getNumericBill();

  // Constants based on SundayGrids Wenger 156 project logic
  const RATE_PER_UNIT = 5.08; // ₹5.08 per kWh
  const MAX_CAPACITY_WATTS = 156380; // 156.38 kW
  const MAX_SAVINGS_LIMIT = ((MAX_CAPACITY_WATTS * 9) / 80) * RATE_PER_UNIT; // ₹89,371.17

  // Calculations
  const calculatedSavings = bill * (savingsPct / 100);
  const monthlySavings = Math.min(calculatedSavings, MAX_SAVINGS_LIMIT);
  const energyProduced = monthlySavings / RATE_PER_UNIT;
  
  // Reserved capacity in Watts: (energy * 80) / 9, rounded to nearest integer
  const reservedSolarWatts = Math.round(energyProduced * (80 / 9));
  
  // One-time reservation fee: energy * 412.36889
  const oneTimeFee = energyProduced * 412.36889;
  
  // Savings projections
  const annualSavings = monthlySavings * 12;
  const fifteenYearSavings = monthlySavings * 180;

  // Format currency helpers
  const formatCurrency = (val, dec = 0) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: dec,
      maximumFractionDigits: dec,
    }).format(val);
  };

  const handleBillChange = (e) => {
    const val = e.target.value;
    // Keep format readable but allow clean edits
    const cleaned = val.replace(/[^0-9]/g, "");
    if (cleaned === "") {
      setBillInput("");
      return;
    }
    const formatted = parseInt(cleaned, 10).toLocaleString("en-IN");
    setBillInput(formatted);
  };

  return (
    <>
      <div className="calculator-wrapper card-glass">
        <div className="calc-header">
          <div className="calc-badge">Wenger 156 Solar Project</div>
          <h2>Savings & Reservation Calculator</h2>
          <p>Configure your power bill and desired savings offset to calculate your virtual solar asset reservation.</p>
        </div>

        <div className="calc-grid">
          {/* Inputs Section */}
          <div className="calc-inputs">
            {/* Bill Input */}
            <div className="input-group">
              <label htmlFor="bill-text-input">Average Monthly Power Bill</label>
              <div className="text-input-wrap">
                <span className="currency-prefix">₹</span>
                <input
                  id="bill-text-input"
                  type="text"
                  value={billInput}
                  onChange={handleBillChange}
                  placeholder="0"
                />
              </div>
              <p className="input-sub">Enter your typical monthly DISCOM electricity bill amount.</p>
            </div>

            {/* Savings Range Slider */}
            <div className="input-group">
              <div className="input-header">
                <label htmlFor="savings-slider">Desired Savings Target</label>
                <div className="input-val">{savingsPct}%</div>
              </div>
              <input
                id="savings-slider"
                type="range"
                min="10"
                max="100"
                step="1"
                value={savingsPct}
                onChange={(e) => setSavingsPct(Number(e.target.value))}
              />
              <div className="range-labels">
                <span>10% Offset</span>
                <span>100% Offset</span>
              </div>
              <p className="input-sub">Slide to adjust the percentage of your bill you wish to offset with solar credits.</p>
            </div>

            {/* Project Specs */}
            <div className="calc-info-card card-forest">
              <div className="info-card-header">
                <span className="info-icon">⚡</span>
                <span>Project Wenger 156 Metrics</span>
              </div>
              <div className="info-grid">
                <div className="info-stat">
                  <span className="stat-lbl">Solar Credit Rate</span>
                  <span className="stat-val">₹{RATE_PER_UNIT.toFixed(2)} / kWh</span>
                </div>
                <div className="info-stat">
                  <span className="stat-lbl">Panel Efficiency Scale</span>
                  <span className="stat-val">9 kWh / 80W / mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outputs Section */}
          <div className="calc-outputs">
            {/* Primary One-Time Fee */}
            <div className="fee-card">
              <span className="fee-lbl">One-time Reservation Fee</span>
              <h3 className="fee-val text-gradient-green-blue">
                {formatCurrency(oneTimeFee, 2)}
              </h3>
              <p className="fee-sub">Co-host reservation fee to secure your virtual panels</p>
            </div>

            {/* Secondary Outputs Grid */}
            <div className="asset-breakdown">
              <div className="breakdown-item">
                <span className="breakdown-label">Reserved Solar Capacity</span>
                <span className="breakdown-val text-gradient">
                  {reservedSolarWatts.toLocaleString("en-IN")} W
                </span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Energy Produced / Month</span>
                <span className="breakdown-val">
                  {energyProduced.toFixed(2)} kWh
                </span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Calculated Monthly Savings</span>
                <span className="breakdown-val">
                  {formatCurrency(monthlySavings, 2)}
                </span>
              </div>
            </div>

            {/* Projections Grid */}
            <div className="savings-grid">
              <div className="saving-card">
                <div className="saving-icon">₹</div>
                <div>
                  <div className="saving-label">Annual Savings</div>
                  <div className="saving-val">{formatCurrency(annualSavings, 2)}</div>
                </div>
              </div>
              <div className="saving-card">
                <div className="saving-icon leaf">📅</div>
                <div>
                  <div className="saving-label">15-Year Savings</div>
                  <div className="saving-val">{formatCurrency(fifteenYearSavings, 2)}</div>
                </div>
              </div>
            </div>

            {/* Capped Warning if applicable */}
            {calculatedSavings > MAX_SAVINGS_LIMIT && (
              <div className="capped-warning">
                ⚠️ Capped at maximum available project capacity ({MAX_CAPACITY_WATTS.toLocaleString()} W).
              </div>
            )}

            <button className="btn-primary btn-calc-cta">Reserve Solar Assets</button>
          </div>
        </div>
      </div>

      {/* CSS Styles specific to Calculator */}
      <style jsx>{`
        .calculator-wrapper {
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .calc-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .calc-badge {
          display: inline-block;
          background: var(--primary-glow-subtle);
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .calc-header h2 {
          font-size: 2.2rem;
          margin-bottom: 8px;
        }

        .calc-header p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .calc-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
        }

        @media (max-width: 968px) {
          .calc-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .calc-inputs {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .input-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .input-header label, label {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .input-val {
          font-family: var(--font-family-title);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--primary);
        }

        .text-input-wrap {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          border-radius: var(--border-radius-sm);
          padding: 4px 16px;
          transition: var(--transition-smooth);
        }

        .text-input-wrap:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 8px var(--primary-glow);
        }

        .currency-prefix {
          font-family: var(--font-family-title);
          font-weight: 600;
          font-size: 1.3rem;
          color: var(--text-secondary);
          margin-right: 8px;
        }

        .text-input-wrap input {
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-family-title);
          font-weight: 700;
          font-size: 1.4rem;
          width: 100%;
          outline: none;
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .input-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .calc-info-card {
          margin-top: 8px;
        }

        .info-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .info-stat {
          display: flex;
          flex-direction: column;
        }

        .info-stat .stat-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .info-stat .stat-val {
          font-family: var(--font-family-title);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-top: 4px;
        }

        .calc-outputs {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          border-radius: var(--border-radius-md);
          padding: 32px;
        }

        .fee-card {
          background: rgba(0, 210, 255, 0.05);
          border: 1px solid rgba(0, 210, 255, 0.15);
          border-radius: var(--border-radius-sm);
          padding: 24px;
          text-align: center;
          margin-bottom: 24px;
        }

        .fee-lbl {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 6px;
        }

        .fee-val {
          font-family: var(--font-family-title);
          font-weight: 800;
          font-size: 2.2rem;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .fee-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .asset-breakdown {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 20px;
        }

        .breakdown-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .breakdown-val {
          font-weight: 700;
          color: var(--text-primary);
        }

        .savings-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .saving-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          border-radius: var(--border-radius-sm);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .saving-icon {
          width: 36px;
          height: 36px;
          background: rgba(0, 230, 153, 0.1);
          border: 1px solid rgba(0, 230, 153, 0.2);
          border-radius: 50%;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .saving-icon.leaf {
          background: rgba(0, 210, 255, 0.1);
          border: 1px solid rgba(0, 210, 255, 0.2);
          color: var(--secondary);
        }

        .saving-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .saving-val {
          font-family: var(--font-family-title);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .capped-warning {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: var(--border-radius-sm);
          padding: 8px 12px;
          color: #f87171;
          font-size: 0.8rem;
          text-align: center;
          margin-bottom: 20px;
        }

        .btn-calc-cta {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .calc-outputs {
            padding: 24px;
          }
        }

        @media (max-width: 576px) {
          .calc-header h2 {
            font-size: 1.7rem;
          }
          .calc-header p {
            font-size: 0.85rem;
          }
          .calc-outputs {
            padding: 16px;
          }
          .fee-card {
            padding: 16px;
            margin-bottom: 20px;
          }
          .fee-val {
            font-size: 1.8rem;
          }
          .savings-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .info-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .text-input-wrap input {
            font-size: 1.2rem;
          }
          .currency-prefix {
            font-size: 1.1rem;
          }
          .input-val {
            font-size: 1.1rem;
          }
          .breakdown-item {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
