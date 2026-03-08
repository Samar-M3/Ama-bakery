// pages/FindPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Branch selector with embedded maps, contact info, hours, services, social.

import { useState } from "react";
import { BRANCHES } from "../data/products.js";
import { IC } from "../data/icons.jsx";

export default function FindPage() {
  const [activeBranch, setActiveBranch] = useState(0);
  const branch = BRANCHES[activeBranch];

  return (
    <>
      <style>{`
        .fp { padding-top: 72px; }

        /* Banner */
        .fp-hero { background:var(--brown); padding:56px 28px; text-align:center; position:relative; overflow:hidden; }
        .fp-hero::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 70% 100% at 50% 100%,rgba(201,168,76,0.1),transparent); pointer-events:none; }
        .fp-hero h1 { font-family:'Playfair Display',serif; font-size:clamp(36px,5vw,64px); font-weight:900; color:#fff; }
        .fp-hero p  { color:rgba(255,255,255,0.55); margin-top:10px; font-size:14px; }

        /* Body */
        .fp-body { max-width:1200px; margin:0 auto; padding:40px 28px 80px; }

        /* Branch tabs */
        .branch-tabs { display:flex; gap:12px; justify-content:center; margin-bottom:40px; flex-wrap:wrap; }
        .branch-tab  { background:var(--white); border:1.5px solid var(--border); border-radius:14px; padding:13px 26px; font-size:13px; font-weight:600; color:var(--text-mid); cursor:pointer; transition:all 0.2s; display:flex; align-items:center; gap:8px; box-shadow:var(--shadow-sm); }
        .branch-tab.active { background:var(--brown); border-color:var(--brown); color:var(--gold-light); }

        /* Two-column layout */
        .fp-grid { display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:start; }
        @media (max-width:768px) { .fp-grid { grid-template-columns:1fr; } }

        /* Map */
        .map-box { border-radius:var(--radius-xl); overflow:hidden; box-shadow:var(--shadow-lg); height:420px; border:1px solid var(--border); }
        .map-box iframe { width:100%; height:100%; border:none; }

        /* Info cards */
        .info-stack { display:flex; flex-direction:column; gap:14px; }
        .info-card  { background:var(--white); border-radius:var(--radius-lg); padding:22px 24px; box-shadow:var(--shadow-sm); display:flex; gap:16px; border:1px solid var(--border); transition:all 0.25s; }
        .info-card:hover { box-shadow:var(--shadow); transform:translateY(-2px); }
        .info-icon  { width:44px; height:44px; background:var(--gold-wash); border-radius:12px; display:flex; align-items:center; justify-content:center; color:var(--gold-dark); flex-shrink:0; border:1px solid var(--border); }
        .info-icon svg { width:18px; height:18px; }
        .info-title { font-family:'Playfair Display',serif; font-size:17px; font-weight:700; color:var(--brown); margin-bottom:6px; }
        .info-text  { font-size:13px; color:var(--text-light); line-height:1.75; }
        .info-text a { color:var(--gold-dark); font-weight:700; }

        /* Service pills */
        .svc-row { display:flex; gap:8px; flex-wrap:wrap; margin-top:8px; }
        .svc-pill { background:rgba(201,168,76,0.1); border:1px solid rgba(201,168,76,0.25); color:var(--gold-dark); border-radius:8px; padding:4px 12px; font-size:11px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; }

        /* Payment */
        .pay-row  { display:flex; gap:8px; margin-top:8px; flex-wrap:wrap; }
        .pay-pill { background:var(--gold-wash); border:1px solid var(--border); border-radius:8px; padding:5px 14px; font-size:12px; font-weight:600; color:var(--brown); }

        /* Social */
        .social-row { display:flex; gap:10px; margin-top:10px; flex-wrap:wrap; }
        .social-btn { display:flex; align-items:center; gap:7px; background:var(--gold-wash); border:1px solid var(--border); border-radius:10px; padding:8px 15px; font-size:12px; font-weight:700; color:var(--brown); text-decoration:none; transition:all 0.2s; }
        .social-btn:hover { background:var(--brown); color:var(--gold-light); }
        .social-btn svg { width:14px; height:14px; }

        /* Open indicator */
        .open-dot { width:7px; height:7px; background:var(--green); border-radius:50%; display:inline-block; animation:pulse 2s infinite; margin-right:6px; }
      `}</style>

      <div className="fp">
        {/* Banner */}
        <div className="fp-hero">
          <h1 className="au">Find Us</h1>
          <p className="au" style={{ animationDelay: "0.05s" }}>
            Two branches across Kathmandu · Open daily 6AM–9PM
          </p>
        </div>

        <div className="fp-body">
          {/* Branch switcher */}
          <div className="branch-tabs au">
            {BRANCHES.map((b, i) => (
              <button
                key={i}
                className={`branch-tab${activeBranch === i ? " active" : ""}`}
                onClick={() => setActiveBranch(i)}
              >
                {b.emoji} {b.name}
              </button>
            ))}
          </div>

          <div className="fp-grid">
            {/* Map */}
            <div className="au" style={{ animationDelay: "0.1s" }}>
              <div className="map-box">
                <iframe src={branch.mapSrc} title={branch.name} loading="lazy" />
              </div>
            </div>

            {/* Info cards */}
            <div className="info-stack au" style={{ animationDelay: "0.15s" }}>

              {/* Address */}
              <div className="info-card">
                <div className="info-icon">{IC.pin}</div>
                <div>
                  <div className="info-title">{branch.name}</div>
                  <div className="info-text" style={{ whiteSpace: "pre-line" }}>{branch.address}</div>
                  <div style={{ fontSize: 12, color: "var(--gold-dark)", fontWeight: 600, marginTop: 6 }}>
                    📍 {branch.note}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="info-card">
                <div className="info-icon">{IC.phone}</div>
                <div>
                  <div className="info-title">Phone</div>
                  {branch.phone.map(p => (
                    <div key={p} className="info-text">📞 <a href={`tel:${p}`}>{p}</a></div>
                  ))}
                  <div className="info-text" style={{ marginTop: 6 }}>
                    ⚠️ Complaints: <a href="tel:9866310000">986-6310000</a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="info-card">
                <div className="info-icon">{IC.clock}</div>
                <div>
                  <div className="info-title">Opening Hours</div>
                  <div className="info-text">
                    Every day: <strong style={{ color: "var(--green)" }}>6:00 AM – 9:00 PM</strong>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 12, fontWeight: 700, color: "var(--green)" }}>
                    <span className="open-dot" />Currently Open
                  </div>
                </div>
              </div>

              {/* Services & Payment */}
              <div className="info-card">
                <div className="info-icon">{IC.pkg}</div>
                <div>
                  <div className="info-title">Services &amp; Payment</div>
                  <div className="svc-row">
                    {["Dine-in", "Takeaway", "Delivery", "Charging Ports", branch.hasHookah ? "Hookah" : ""].filter(Boolean).map(s => (
                      <span key={s} className="svc-pill">{s}</span>
                    ))}
                  </div>
                  <div className="pay-row">
                    <span className="pay-pill">💵 Cash</span>
                    <span className="pay-pill">📱 eSewa</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="info-card">
                <div className="info-icon">{IC.trend}</div>
                <div>
                  <div className="info-title">Follow &amp; Review</div>
                  <div className="social-row">
                    <a href="https://facebook.com/amabakerycoffee" target="_blank" rel="noreferrer" className="social-btn">
                      {IC.fb} Facebook
                    </a>
                    <a href="https://instagram.com/amabakeryhouse" target="_blank" rel="noreferrer" className="social-btn">
                      {IC.ig} Instagram
                    </a>
                  </div>
                  <div className="info-text" style={{ marginTop: 10 }}>
                    ⭐ <a href="https://bit.ly/4dDt3Ub" target="_blank" rel="noreferrer">Read Google Reviews</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
