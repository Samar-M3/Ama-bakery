// components/Navbar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Fixed top navigation bar with logo, links, cart button, mobile hamburger

import { useState, useEffect } from "react";
import LOGO_SRC from "../data/logo.js";
import { IC } from "../data/icons.jsx";

export default function Navbar({ page, setPage, cartCount, onCartOpen, isAdmin }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = isAdmin
    ? [{ l: "← Back to Site", k: "home" }]
    : [
        { l: "Menu",    k: "menu"  },
        { l: "About",   k: "about" },
        { l: "Find Us", k: "find"  },
        { l: "Admin",   k: "admin" },
      ];

  return (
    <>
      <style>{`
        .nav { position:fixed; top:0; left:0; right:0; z-index:1000; transition:all 0.3s; }
        .nav.sc { background:rgba(253,250,245,0.97); backdrop-filter:blur(20px); box-shadow:0 1px 0 var(--border),var(--shadow-sm); }
        .nav.top { background:transparent; }
        .nav-inner { max-width:1280px; margin:0 auto; padding:0 28px; display:flex; align-items:center; justify-content:space-between; height:72px; }

        /* Brand */
        .nav-brand { display:flex; align-items:center; gap:12px; cursor:pointer; }
        .nav-logo-img { width:48px; height:48px; border-radius:50%; object-fit:cover; box-shadow:0 2px 12px rgba(201,168,76,0.4); }
        .nav-brand-name { font-family:'Playfair Display',serif; font-size:18px; font-weight:700; color:var(--brown); letter-spacing:-0.01em; }
        .nav-brand-sub  { font-size:9px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold-dark); margin-top:2px; }

        /* Links */
        .nav-links { display:flex; gap:2px; align-items:center; }
        .nav-open-pill { display:flex; align-items:center; gap:6px; background:rgba(27,94,59,0.1); color:var(--green); font-size:11px; font-weight:700; letter-spacing:0.08em; padding:5px 13px; border-radius:20px; margin-right:10px; }
        .nav-dot { width:7px; height:7px; background:var(--green); border-radius:50%; animation:pulse 2s infinite; }
        .nl { padding:8px 16px; border-radius:10px; font-size:13px; font-weight:600; color:var(--text-mid); transition:all 0.2s; cursor:pointer; background:none; letter-spacing:0.01em; }
        .nl:hover, .nl.ac { color:var(--brown); background:var(--gold-wash); }

        /* Cart button */
        .nav-cart-btn { display:flex; align-items:center; gap:7px; background:var(--gold); color:var(--brown); border:none; border-radius:12px; padding:10px 18px; font-size:13px; font-weight:700; cursor:pointer; transition:all 0.25s; box-shadow:0 2px 12px rgba(201,168,76,0.35); }
        .nav-cart-btn:hover { background:var(--gold-dark); color:#fff; transform:translateY(-1px); }
        .nav-cart-btn svg { width:16px; height:16px; }
        .cart-count { background:var(--brown); color:var(--gold-light); font-size:10px; font-weight:900; min-width:19px; height:19px; border-radius:10px; display:flex; align-items:center; justify-content:center; animation:pulse 0.3s ease; }

        /* Hamburger */
        .hbg { display:none; background:none; padding:8px; color:var(--brown); }
        .hbg svg { width:22px; height:22px; }

        /* Mobile dropdown */
        .mob-menu { display:none; position:absolute; top:72px; left:0; right:0; background:var(--cream); border-bottom:1px solid var(--border); padding:16px 28px 20px; flex-direction:column; gap:6px; box-shadow:var(--shadow); }
        .mob-menu.open { display:flex; }

        @media (max-width: 800px) {
          .nav-links { display:none; }
          .hbg { display:flex; }
        }
      `}</style>

      <nav className={`nav ${scrolled || page !== "home" ? "sc" : "top"}`}>
        <div className="nav-inner">

          {/* Brand */}
          <div className="nav-brand" onClick={() => setPage("home")}>
            <img src={LOGO_SRC} alt="Ama Bakery Logo" className="nav-logo-img" />
            <div>
              <div className="nav-brand-name">Ama Bakery</div>
              <div className="nav-brand-sub">Kathmandu · Est. 2022</div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            {!isAdmin && (
              <span className="nav-open-pill">
                <span className="nav-dot" /> Open 6AM–9PM
              </span>
            )}
            {links.map(l => (
              <button
                key={l.k}
                className={`nl${page === l.k ? " ac" : ""}`}
                onClick={() => setPage(l.k)}
              >
                {l.l}
              </button>
            ))}
            {!isAdmin && (
              <button className="nav-cart-btn" onClick={onCartOpen}>
                <span style={{ width: 16, height: 16, display: "flex" }}>{IC.cart}</span>
                Cart
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button className="hbg" onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? IC.close : IC.menu}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`mob-menu${mobileOpen ? " open" : ""}`}>
          {!isAdmin && (
            <span className="nav-open-pill" style={{ justifyContent: "center" }}>
              <span className="nav-dot" /> Open Daily 6AM–9PM
            </span>
          )}
          {links.map(l => (
            <button key={l.k} className="nl" onClick={() => { setPage(l.k); setMobileOpen(false); }}>
              {l.l}
            </button>
          ))}
          {!isAdmin && (
            <button
              className="nav-cart-btn"
              style={{ justifyContent: "center", marginTop: 4 }}
              onClick={() => { onCartOpen(); setMobileOpen(false); }}
            >
              {IC.cart} Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
