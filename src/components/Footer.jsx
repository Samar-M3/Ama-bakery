// components/Footer.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Site-wide footer with brand, navigation, contact info, and social links.

import LOGO_SRC from "../data/logo.js";
import { IC } from "../data/icons.jsx";

export default function Footer({ setPage }) {
  return (
    <>
      <style>{`
        .ft { background:var(--brown); color:rgba(255,255,255,0.5); padding:56px 28px 32px; }
        .ft-inner { max-width:1280px; margin:0 auto; }

        .ft-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 768px) { .ft-top { grid-template-columns: 1fr; gap: 32px; } }

        .ft-brand     { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
        .ft-brand-logo{ width:52px; height:52px; border-radius:50%; object-fit:cover; box-shadow:0 0 0 2px rgba(201,168,76,0.3); }
        .ft-brand-name{ font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:#fff; }
        .ft-brand-sub { font-size:9px; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold); margin-top:2px; }
        .ft-desc      { font-size:13px; line-height:1.8; }

        .ft-col-title { font-family:'Playfair Display',serif; font-size:16px; font-weight:700; color:#fff; margin-bottom:16px; }
        .ft-link { display:block; font-size:13px; margin-bottom:8px; cursor:pointer; transition:color 0.2s; }
        .ft-link:hover { color:var(--gold); }

        .ft-bottom { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; font-size:12px; }
        .ft-social { display:flex; gap:10px; }
        .ft-soc-btn {
          width:36px; height:36px;
          background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1);
          border-radius:10px; display:flex; align-items:center; justify-content:center;
          color:rgba(255,255,255,0.6); text-decoration:none; transition:all 0.2s;
        }
        .ft-soc-btn:hover { background:var(--gold); color:var(--brown); }
        .ft-soc-btn svg { width:15px; height:15px; }
      `}</style>

      <footer className="ft">
        <div className="ft-inner">
          <div className="ft-top">

            {/* Brand column */}
            <div>
              <div className="ft-brand">
                <img src={LOGO_SRC} alt="Ama Bakery logo" className="ft-brand-logo" />
                <div>
                  <div className="ft-brand-name">Ama Bakery</div>
                  <div className="ft-brand-sub">Est. 2022 · Kathmandu</div>
                </div>
              </div>
              <p className="ft-desc">
                आमाको माया, हरेक बाइटमा<br />
                Fresh bakes, open kitchen, honest prices.<br />
                Boudha &amp; Swayambhu, Kathmandu.
              </p>
            </div>

            {/* Navigation column */}
            <div>
              <div className="ft-col-title">Navigate</div>
              {[
                { label: "Home",    key: "home"  },
                { label: "Menu",    key: "menu"  },
                { label: "About",   key: "about" },
                { label: "Find Us", key: "find"  },
              ].map(({ label, key }) => (
                <span key={key} className="ft-link" onClick={() => setPage(key)}>{label}</span>
              ))}
            </div>

            {/* Contact column */}
            <div>
              <div className="ft-col-title">Contact</div>
              <p className="ft-link">📞 01-5918699 (Boudha)</p>
              <p className="ft-link">📞 01-5314444 (Swayambhu)</p>
              <p className="ft-link">⚠️ Complaints: 986-6310000</p>
              <p className="ft-link" style={{ marginTop: 8 }}>🕕 Daily 6AM – 9PM</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="ft-bottom">
            <div>© 2026 Ama Bakery · Founded by Mangal Maya Bajracharya</div>
            <div className="ft-social">
              <a href="https://facebook.com/amabakerycoffee" target="_blank" rel="noreferrer" className="ft-soc-btn">{IC.fb}</a>
              <a href="https://instagram.com/amabakeryhouse"  target="_blank" rel="noreferrer" className="ft-soc-btn">{IC.ig}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
