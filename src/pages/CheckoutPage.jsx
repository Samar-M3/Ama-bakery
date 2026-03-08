// pages/CheckoutPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Order form with sticky order summary. On submit calls onPlaceOrder(order).

import { useState } from "react";
import { Rs } from "../data/products.js";

export default function CheckoutPage({ cart, onPlaceOrder }) {
  const [form, setForm] = useState({
    name: "", phone: "", address: "",
    branch: "Boudha Branch", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    onPlaceOrder({
      id:       `AMA-${Date.now()}`,
      date:     new Date().toLocaleString(),
      customer: form,
      items:    cart,
      total,
      status:   "Received",
    });
    setSubmitted(true);
  };

  // ── Success screen ────────────────────────────────────────────────────────
  if (submitted) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 24px", background: "var(--cream)" }}>
      <div style={{ background: "var(--white)", borderRadius: 28, padding: "52px 44px", textAlign: "center", maxWidth: 520, boxShadow: "var(--shadow-xl)", animation: "scaleIn 0.4s ease", border: "1px solid var(--border)" }}>
        <div style={{ width: 80, height: 80, background: "var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 24px", boxShadow: "0 8px 32px rgba(201,168,76,0.4)" }}>🎉</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 900, color: "var(--green)", marginBottom: 14 }}>Order Placed!</h2>
        <p style={{ color: "var(--text-light)", fontSize: 15, lineHeight: 1.8 }}>
          Thank you, <strong style={{ color: "var(--brown)" }}>{form.name}</strong>!<br />
          Your order has been received at <strong>{form.branch}</strong>.<br /><br />
          We'll call you on <strong style={{ color: "var(--gold-dark)" }}>{form.phone}</strong> to confirm. 🍞
        </p>
      </div>
    </div>
  );

  // ── Checkout form ─────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        .chp { padding: 96px 28px 80px; max-width: 920px; margin: 0 auto; }
        .ch-eyebrow { font-size:11px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold-dark); margin-bottom:10px; }
        .ch-title { font-family:'Playfair Display',serif; font-size:clamp(32px,4vw,52px); font-weight:900; color:var(--brown); margin-bottom:36px; }

        .ch-grid { display:grid; grid-template-columns:1fr 360px; gap:32px; }
        @media (max-width:768px) { .ch-grid { grid-template-columns:1fr; } }

        /* Form card */
        .ch-form { background:var(--white); border-radius:var(--radius-xl); padding:36px; box-shadow:var(--shadow-sm); border:1px solid var(--border); }
        .ch-form-title { font-family:'Playfair Display',serif; font-size:26px; font-weight:700; color:var(--brown); margin-bottom:28px; }
        .form-group { margin-bottom: 18px; }
        .form-label { display:block; font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-light); margin-bottom:7px; }
        .form-input { width:100%; background:var(--gold-pale); border:1.5px solid var(--border); border-radius:12px; padding:13px 15px; font-size:14px; color:var(--text); outline:none; transition:border 0.2s; }
        .form-input:focus { border-color:var(--gold); }
        .payment-note { background:var(--gold-pale); border:1px solid var(--border); border-radius:12px; padding:12px 16px; font-size:13px; color:var(--text-light); margin-top:4px; }

        /* Summary card */
        .sum { background:var(--white); border-radius:var(--radius-xl); padding:28px; box-shadow:var(--shadow-sm); position:sticky; top:88px; border:1px solid var(--border); }
        .sum-title { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--brown); margin-bottom:18px; }
        .sum-item  { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid var(--border); font-size:13px; color:var(--text-light); }
        .sum-item:last-of-type { border:none; }
        .sum-total { display:flex; justify-content:space-between; align-items:center; margin-top:18px; padding-top:16px; border-top:2px solid var(--border); }
        .sum-total-label  { font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-light); font-size:12px; }
        .sum-total-amount { font-family:'Playfair Display',serif; font-size:26px; font-weight:700; color:var(--brown); }

        .btn-place {
          width:100%; margin-top:18px;
          background:var(--brown); color:var(--gold-light);
          border:none; border-radius:14px; padding:16px;
          font-size:14px; font-weight:700; letter-spacing:0.07em; text-transform:uppercase;
          cursor:pointer; transition:all 0.25s;
          box-shadow:0 4px 16px rgba(44,26,6,0.2);
        }
        .btn-place:hover   { background:var(--gold); color:var(--brown); transform:translateY(-2px); }
        .btn-place:disabled{ opacity:0.45; cursor:default; transform:none; }
      `}</style>

      <div className="chp">
        <div className="ch-eyebrow">Almost There</div>
        <h1 className="ch-title">Checkout</h1>

        <div className="ch-grid">
          {/* Form */}
          <div className="ch-form au">
            <div className="ch-form-title">Your Details</div>

            {[
              { label: "Full Name *",    key: "name",    type: "text" },
              { label: "Phone Number *", key: "phone",   type: "tel"  },
              { label: "Delivery Address (leave blank for pickup)", key: "address", type: "text" },
            ].map(({ label, key, type }) => (
              <div key={key} className="form-group">
                <label className="form-label">{label}</label>
                <input
                  className="form-input"
                  type={type}
                  value={form[key]}
                  onChange={e => setForm(prev => ({ ...prev, [key]: e.target.value }))}
                />
              </div>
            ))}

            <div className="form-group">
              <label className="form-label">Preferred Branch</label>
              <select
                className="form-input"
                value={form.branch}
                onChange={e => setForm(prev => ({ ...prev, branch: e.target.value }))}
              >
                <option>Boudha Branch</option>
                <option>Swayambhu Branch</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Special Notes</label>
              <textarea
                className="form-input"
                style={{ resize: "vertical", minHeight: 76 }}
                value={form.notes}
                onChange={e => setForm(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Allergies, customizations, special requests…"
              />
            </div>

            <div className="payment-note">
              💳 Payment: <strong>Cash</strong> or <strong>eSewa</strong> accepted at both branches.
            </div>
          </div>

          {/* Order summary */}
          <div className="au" style={{ animationDelay: "0.1s" }}>
            <div className="sum">
              <div className="sum-title">Order Summary</div>
              {cart.map(item => (
                <div key={item.id} className="sum-item">
                  <span>{item.emoji} {item.name} × {item.qty}</span>
                  <span style={{ fontWeight: 700, color: "var(--brown)" }}>{Rs(item.price * item.qty)}</span>
                </div>
              ))}
              <div className="sum-total">
                <span className="sum-total-label">Total</span>
                <span className="sum-total-amount">{Rs(total)}</span>
              </div>
              <button
                className="btn-place"
                disabled={!form.name || !form.phone}
                onClick={handleSubmit}
              >
                Place Order 🎉
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
