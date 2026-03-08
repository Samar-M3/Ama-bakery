// pages/HomePage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Landing page: Hero → Featured Products → Why Ama → Customer Reviews

import { useState } from "react";
import LOGO_SRC from "../data/logo.js";
import { IC } from "../data/icons.jsx";
import { PRODUCTS, Rs } from "../data/products.js";
import Badge from "../components/Badge.jsx";

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ setPage }) {
  return (
    <>
      <style>{`
        .hero { min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:80px 28px 60px; position:relative; overflow:hidden; background:var(--brown); }
        .hero-orb1 { position:absolute; width:700px; height:700px; border-radius:50%; background:radial-gradient(circle,rgba(201,168,76,0.18) 0%,transparent 70%); top:-200px; right:-200px; pointer-events:none; }
        .hero-orb2 { position:absolute; width:500px; height:500px; border-radius:50%; background:radial-gradient(circle,rgba(201,168,76,0.10) 0%,transparent 70%); bottom:-150px; left:-150px; pointer-events:none; }
        .hero-grid { position:absolute; inset:0; opacity:0.04; background-image:linear-gradient(var(--gold) 1px,transparent 1px),linear-gradient(90deg,var(--gold) 1px,transparent 1px); background-size:60px 60px; pointer-events:none; }

        .hero-content { position:relative; max-width:800px; text-align:center; z-index:1; }

        .hero-logo-wrap  { margin-bottom:36px; display:inline-block; position:relative; }
        .hero-logo-ring  { position:absolute; inset:-8px;  border-radius:50%; border:1px solid rgba(201,168,76,0.3); animation:spin 20s linear infinite; }
        .hero-logo-ring2 { position:absolute; inset:-16px; border-radius:50%; border:1px dashed rgba(201,168,76,0.15); animation:spin 30s linear infinite reverse; }
        .hero-logo { width:130px; height:130px; border-radius:50%; object-fit:cover; box-shadow:0 0 0 4px rgba(201,168,76,0.3),0 20px 60px rgba(0,0,0,0.5); position:relative; z-index:1; }

        .hero-tag   { display:inline-flex; align-items:center; gap:8px; background:rgba(201,168,76,0.15); border:1px solid rgba(201,168,76,0.3); color:var(--gold-light); font-size:11px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; padding:7px 20px; border-radius:30px; margin-bottom:24px; }
        .hero-title { font-size:clamp(60px,10vw,120px); font-weight:900; color:#fff; line-height:0.9; margin-bottom:12px; letter-spacing:-0.03em; }
        .hero-title-gold { color:var(--gold-light); font-style:italic; }
        .hero-nepali { font-family:'Playfair Display',serif; font-size:clamp(16px,2vw,22px); color:rgba(255,255,255,0.5); margin-bottom:24px; letter-spacing:0.05em; font-style:italic; }
        .hero-sub { font-size:16px; color:rgba(255,255,255,0.65); max-width:500px; margin:0 auto 40px; font-weight:300; line-height:1.8; }

        .hero-cta { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:48px; }

        .hero-pills { display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-bottom:56px; }
        .hero-pill  { display:flex; align-items:center; gap:7px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:rgba(255,255,255,0.7); font-size:12px; font-weight:500; padding:7px 16px; border-radius:20px; backdrop-filter:blur(8px); }

        .hero-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(201,168,76,0.15); border:1px solid rgba(201,168,76,0.2); border-radius:20px; overflow:hidden; max-width:480px; margin:0 auto; }
        .hstat   { padding:20px; background:rgba(255,255,255,0.03); text-align:center; }
        .hstat-n { font-family:'Playfair Display',serif; font-size:30px; font-weight:700; color:var(--gold-light); }
        .hstat-l { font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.4); margin-top:3px; }

        .hero-scroll { position:absolute; bottom:28px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:8px; color:rgba(255,255,255,0.3); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; z-index:1; }
        .hero-scroll-line { width:1px; height:40px; background:linear-gradient(to bottom,transparent,rgba(201,168,76,0.5)); }
      `}</style>

      <section className="hero">
        <div className="hero-orb1" /><div className="hero-orb2" /><div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-logo-wrap au" style={{ animationDelay: "0s" }}>
            <div className="hero-logo-ring" /><div className="hero-logo-ring2" />
            <img src={LOGO_SRC} alt="Ama Bakery" className="hero-logo" />
          </div>
          <div className="hero-tag au" style={{ animationDelay: "0.1s" }}>🇳🇵 Kathmandu's Beloved Bakery</div>
          <h1 className="hero-title au" style={{ animationDelay: "0.15s" }}>
            Ama<br /><span className="hero-title-gold">Bakery</span>
          </h1>
          <p className="hero-nepali au" style={{ animationDelay: "0.2s" }}>आमाको माया, हरेक बाइटमा</p>
          <p className="hero-sub au" style={{ animationDelay: "0.25s" }}>
            Founded near the sacred Boudha Stupa, Ama brings the warmth of a mother's kitchen to Kathmandu — fresh bakes, open kitchen, honest prices.
          </p>
          <div className="hero-cta au" style={{ animationDelay: "0.3s" }}>
            <button className="btn-gold" onClick={() => setPage("menu")}>Order Now {IC.arrow}</button>
            <button className="btn-outline" onClick={() => setPage("about")}>Our Story</button>
          </div>
          <div className="hero-pills au" style={{ animationDelay: "0.35s" }}>
            {["🥡 Takeaway", "🛵 Delivery", "🪑 Dine-in", "📱 eSewa", "📍 2 Branches", "🕕 6AM–9PM Daily"].map(p => (
              <span key={p} className="hero-pill">{p}</span>
            ))}
          </div>
          <div className="hero-stats au" style={{ animationDelay: "0.4s" }}>
            {[["2", "Branches"], ["Rs 30", "Starts From"], ["Daily", "Fresh Baked"]].map(([n, l]) => (
              <div key={l} className="hstat">
                <div className="hstat-n">{n}</div>
                <div className="hstat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-scroll"><div className="hero-scroll-line" />Scroll</div>
      </section>
    </>
  );
}

// ── Featured Products strip ───────────────────────────────────────────────────
function FeaturedCard({ product, onAdd, delay = 0 }) {
  const [added, setAdded] = useState(false);
  const handle = () => { onAdd(product); setAdded(true); setTimeout(() => setAdded(false), 1500); };
  return (
    <>
      <style>{`
        .fc { background:var(--white); border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-sm); transition:all 0.35s cubic-bezier(0.16,1,0.3,1); display:flex; flex-direction:column; border:1px solid var(--border); animation:fadeUp 0.6s ease both; }
        .fc:hover { transform:translateY(-8px); box-shadow:var(--shadow-lg); border-color:rgba(201,168,76,0.4); }
        .fc-img { background:linear-gradient(135deg,var(--gold-wash) 0%,#EDD9A3 100%); padding:44px 20px; display:flex; align-items:center; justify-content:center; font-size:76px; position:relative; transition:background 0.3s; }
        .fc:hover .fc-img { background:linear-gradient(135deg,#EDD9A3 0%,#E8C97A 100%); }
        .fc-shine { position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.2) 0%,transparent 50%); pointer-events:none; }
        .fc-body { padding:22px 22px 26px; flex:1; display:flex; flex-direction:column; }
        .fc-cat  { font-size:10px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold-dark); margin-bottom:8px; }
        .fc-name { font-family:'Playfair Display',serif; font-size:21px; font-weight:700; color:var(--brown); margin-bottom:9px; line-height:1.2; }
        .fc-desc { font-size:13px; color:var(--text-light); line-height:1.7; flex:1; }
        .fc-foot { display:flex; align-items:center; justify-content:space-between; margin-top:20px; padding-top:16px; border-top:1px solid var(--border); }
        .fc-price{ font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:var(--brown); }
      `}</style>
      <div className="fc" style={{ animationDelay: `${delay}s` }}>
        <div className="fc-img">
          {product.badge && <Badge label={product.badge} />}
          <div className="fc-shine" />
          <span>{product.emoji}</span>
        </div>
        <div className="fc-body">
          <div className="fc-cat">{product.category}</div>
          <div className="fc-name">{product.name}</div>
          <div className="fc-desc">{product.description}</div>
          <div className="fc-foot">
            <div className="fc-price">{Rs(product.price)}</div>
            <button className={`btn-add${added ? " ok" : ""}`} onClick={handle}>
              {added ? IC.check : IC.plus}{added ? "Added!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function FeaturedStrip({ onAdd, setPage }) {
  const featured = PRODUCTS.filter(p => p.featured);
  return (
    <>
      <style>{`
        .fs { background:var(--cream); padding:80px 28px; }
        .fs-inner { max-width:1280px; margin:0 auto; }
        .fs-header { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:48px; flex-wrap:wrap; gap:20px; }
        .btn-view-all { background:var(--gold-wash); border:1.5px solid var(--border); color:var(--brown-mid); border-radius:12px; padding:10px 22px; font-size:13px; font-weight:600; cursor:pointer; transition:all 0.2s; display:flex; align-items:center; gap:8px; }
        .btn-view-all:hover { background:var(--gold); color:var(--brown); border-color:var(--gold); }
        .btn-view-all svg { width:14px; height:14px; }
        .fs-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:24px; }
      `}</style>
      <section className="fs">
        <div className="fs-inner">
          <div className="fs-header">
            <div>
              <div className="section-label au"><div className="section-label-line" /><span className="section-label-text">Hand-picked</span></div>
              <h2 className="section-title au" style={{ animationDelay: "0.05s" }}>Featured Treats</h2>
              <p className="section-sub au" style={{ animationDelay: "0.1s" }}>Our most-loved bakes, made fresh every morning at both branches.</p>
            </div>
            <button className="btn-view-all au" style={{ animationDelay: "0.15s" }} onClick={() => setPage("menu")}>
              Full Menu {IC.arrow}
            </button>
          </div>
          <div className="fs-grid">
            {featured.map((p, i) => <FeaturedCard key={p.id} product={p} onAdd={onAdd} delay={i * 0.08} />)}
          </div>
        </div>
      </section>
    </>
  );
}

// ── Why Ama section ───────────────────────────────────────────────────────────
function WhyAma() {
  return (
    <>
      <style>{`
        .wa { background:var(--brown); padding:80px 28px; position:relative; overflow:hidden; }
        .wa::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 80% 60% at 20% 50%,rgba(201,168,76,0.08),transparent 70%); pointer-events:none; }
        .wa-inner { max-width:1280px; margin:0 auto; position:relative; }
        .wa-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
        @media(max-width:768px) { .wa-grid { grid-template-columns:1fr; gap:48px; } }
        .wa-left p { color:rgba(255,255,255,0.6); font-size:15px; line-height:1.85; margin-top:16px; }
        .wa-founder { display:flex; align-items:center; gap:16px; margin-top:32px; background:rgba(201,168,76,0.1); border:1px solid rgba(201,168,76,0.2); border-radius:16px; padding:18px 22px; }
        .wa-founder-av { width:52px; height:52px; background:var(--gold); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:26px; flex-shrink:0; }
        .wa-founder-name { font-family:'Playfair Display',serif; font-size:17px; font-weight:700; color:#fff; }
        .wa-founder-role { font-size:11px; color:var(--gold); font-weight:600; letter-spacing:0.08em; text-transform:uppercase; margin-top:2px; }
        .wa-features { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .waf { background:rgba(255,255,255,0.04); border:1px solid rgba(201,168,76,0.15); border-radius:18px; padding:24px; transition:all 0.25s; }
        .waf:hover { background:rgba(201,168,76,0.07); border-color:rgba(201,168,76,0.3); transform:translateY(-3px); }
        .waf-icon  { font-size:28px; margin-bottom:14px; }
        .waf-title { font-family:'Playfair Display',serif; font-size:17px; font-weight:700; color:#fff; margin-bottom:8px; }
        .waf-desc  { font-size:12px; color:rgba(255,255,255,0.5); line-height:1.7; }
      `}</style>
      <section className="wa">
        <div className="wa-inner">
          <div className="wa-grid">
            <div className="au">
              <div className="section-label" style={{ "--gold": "#C9A84C" }}>
                <div className="section-label-line" style={{ background: "var(--gold)" }} />
                <span className="section-label-text" style={{ color: "var(--gold)" }}>Why Ama?</span>
              </div>
              <h2 className="section-title" style={{ color: "#fff" }}>Baked with Honesty, Served with Love</h2>
              <p>Every item on our menu is made in an open kitchen — you can watch your food being prepared. No shortcuts, no mystery ingredients. Just quality, care, and the warmth of a mother's touch.</p>
              <div className="wa-founder">
                <div className="wa-founder-av">👩</div>
                <div>
                  <div className="wa-founder-name">Mangal Maya Bajracharya</div>
                  <div className="wa-founder-role">Founder & Head Baker</div>
                </div>
              </div>
            </div>
            <div className="wa-features">
              {[
                { icon: "🫙", t: "Open Kitchen",   d: "Watch your food being made fresh — no shortcuts, no hidden processes." },
                { icon: "💰", t: "From Rs 30",      d: "Quality bakes shouldn't be a luxury. Ama keeps prices honest and affordable." },
                { icon: "🌿", t: "Fresh Daily",     d: "Everything is baked in small batches each morning. Nothing goes stale." },
                { icon: "📍", t: "2 Branches",      d: "Boudha & Swayambhu — both near iconic Kathmandu landmarks." },
              ].map((f, i) => (
                <div key={f.t} className="waf au" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                  <div className="waf-icon">{f.icon}</div>
                  <div className="waf-title">{f.t}</div>
                  <div className="waf-desc">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Reviews strip ─────────────────────────────────────────────────────────────
function ReviewsStrip() {
  const reviews = [
    { t: "The pumpkin bites are absolutely unique — I've never had anything like them anywhere in Kathmandu. Totally addictive.", a: "Priya S.", loc: "Boudha" },
    { t: "The open kitchen is what sold me. You can see everything being made fresh — so clean and trustworthy.", a: "Rohan T.", loc: "Lalitpur" },
    { t: "Dora cake + morning tea = perfect day. Budget-friendly and genuinely delicious. My daily ritual.", a: "Sita M.", loc: "Kathmandu" },
    { t: "The coconut cake is heavenly! Moist, not too sweet, and perfectly sized. Will definitely be back.", a: "Arjun K.", loc: "Swayambhu" },
  ];

  return (
    <>
      <style>{`
        .rv { background:var(--gold-pale); padding:80px 28px; border-top:1px solid var(--border); }
        .rv-inner { max-width:1280px; margin:0 auto; }
        .rv-head { text-align:center; margin-bottom:48px; }
        .rv-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:20px; }
        .rvc { background:var(--white); border-radius:var(--radius-lg); padding:26px; box-shadow:var(--shadow-sm); border:1px solid var(--border); transition:all 0.3s; animation:fadeUp 0.5s ease both; }
        .rvc:hover { transform:translateY(-4px); box-shadow:var(--shadow); }
        .rv-stars  { display:flex; gap:3px; color:var(--gold); margin-bottom:14px; }
        .rv-stars svg { width:13px; height:13px; }
        .rv-text   { font-size:13px; color:var(--text-light); line-height:1.75; font-style:italic; margin-bottom:16px; }
        .rv-author { font-size:13px; font-weight:700; color:var(--brown); }
        .rv-loc    { font-size:11px; color:var(--text-light); margin-top:2px; }
      `}</style>
      <section className="rv">
        <div className="rv-inner">
          <div className="rv-head">
            <div className="section-label au" style={{ justifyContent: "center" }}>
              <div className="section-label-line" />
              <span className="section-label-text">Customer Love</span>
              <div className="section-label-line" />
            </div>
            <h2 className="section-title au" style={{ animationDelay: "0.05s", textAlign: "center", marginTop: 10 }}>
              What Kathmandu Says
            </h2>
          </div>
          <div className="rv-grid">
            {reviews.map((r, i) => (
              <div key={i} className="rvc" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="rv-stars">{[1,2,3,4,5].map(s => <span key={s}>{IC.star}</span>)}</div>
                <div className="rv-text">"{r.t}"</div>
                <div className="rv-author">{r.a}</div>
                <div className="rv-loc">📍 {r.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── Page export ───────────────────────────────────────────────────────────────
export default function HomePage({ onAdd, setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <FeaturedStrip onAdd={onAdd} setPage={setPage} />
      <WhyAma />
      <ReviewsStrip />
    </>
  );
}
