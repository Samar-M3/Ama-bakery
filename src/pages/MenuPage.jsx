// pages/MenuPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full product catalog with search and category filter.

import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "../data/products.js";
import { IC } from "../data/icons.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function MenuPage({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(p =>
    (activeCategory === "All" || p.category === activeCategory) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
        .mp { padding-top: 72px; }

        /* Page hero banner */
        .mp-hero { background:var(--brown); padding:56px 28px; text-align:center; position:relative; overflow:hidden; }
        .mp-hero::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 80% 120% at 50% 100%,rgba(201,168,76,0.12),transparent 70%); pointer-events:none; }
        .mp-hero-tag { font-size:11px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold); margin-bottom:14px; }
        .mp-hero h1  { font-family:'Playfair Display',serif; font-size:clamp(40px,6vw,72px); font-weight:900; color:#fff; letter-spacing:-0.02em; }
        .mp-hero p   { color:rgba(255,255,255,0.55); margin-top:12px; font-size:15px; }

        /* Body */
        .mp-body { max-width:1280px; margin:0 auto; padding:40px 28px 80px; }

        /* Controls */
        .mp-controls { display:flex; gap:14px; margin-bottom:40px; flex-wrap:wrap; align-items:center; }
        .mp-search-wrap { flex:1; min-width:220px; position:relative; }
        .mp-search-icon { position:absolute; left:14px; top:50%; transform:translateY(-50%); width:16px; height:16px; color:var(--text-light); opacity:0.6; }
        .mp-search { width:100%; background:var(--white); border:1.5px solid var(--border); border-radius:12px; padding:11px 14px 11px 42px; font-size:14px; color:var(--text); outline:none; transition:border 0.2s; box-shadow:var(--shadow-sm); }
        .mp-search:focus { border-color:var(--gold); }

        /* Category pills */
        .cat-pills { display:flex; gap:8px; flex-wrap:wrap; }
        .cat-pill  { background:var(--white); border:1.5px solid var(--border); border-radius:10px; padding:8px 18px; font-size:12px; font-weight:600; color:var(--text-light); cursor:pointer; transition:all 0.2s; box-shadow:var(--shadow-sm); }
        .cat-pill:hover, .cat-pill.active { background:var(--brown); border-color:var(--brown); color:var(--gold-light); }

        /* Grid */
        .mp-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(268px,1fr)); gap:22px; }
        .mp-empty { text-align:center; padding:64px; color:var(--text-light); font-size:18px; }
      `}</style>

      <div className="mp">
        {/* Banner */}
        <div className="mp-hero">
          <div className="mp-hero-tag au">Fresh Every Morning</div>
          <h1 className="au" style={{ animationDelay: "0.05s" }}>Our Menu</h1>
          <p className="au" style={{ animationDelay: "0.1s" }}>
            Prices start from <strong style={{ color: "var(--gold)" }}>Rs 30</strong> · Cash &amp; eSewa accepted
          </p>
        </div>

        {/* Catalog */}
        <div className="mp-body">
          <div className="mp-controls au" style={{ animationDelay: "0.15s" }}>
            <div className="mp-search-wrap">
              <span className="mp-search-icon">{IC.spark}</span>
              <input
                className="mp-search"
                placeholder="Search menu items..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="cat-pills">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`cat-pill${activeCategory === c ? " active" : ""}`}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mp-empty">No items found 🍞</div>
          ) : (
            <div className="mp-grid">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} onAdd={onAdd} delay={i * 0.05} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
