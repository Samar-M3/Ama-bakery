// pages/AboutPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Bakery story, founder, values, and customer reviews.

import LOGO_SRC from "../data/logo.js";

const VALUES = [
  { icon: "🫙", title: "Open Kitchen",    desc: "Watch your food being made fresh — no shortcuts, no mystery." },
  { icon: "💰", title: "Budget Friendly", desc: "Starting from Rs 30 — quality bakes for everyone, always." },
  { icon: "🌿", title: "Fresh Daily",     desc: "Small batches baked every morning. If it's not fresh, it's not on the shelf." },
  { icon: "🤝", title: "Community Roots", desc: "Built by word-of-mouth, by neighbours telling neighbours." },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        .abp { padding-top: 72px; }

        /* Page hero banner */
        .ab-hero { background:var(--brown); padding:72px 28px; text-align:center; position:relative; overflow:hidden; }
        .ab-hero::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 70% 100% at 50% 100%,rgba(201,168,76,0.1),transparent); pointer-events:none; }
        .ab-logo { width:100px; height:100px; border-radius:50%; object-fit:cover; box-shadow:0 0 0 3px rgba(201,168,76,0.4),0 16px 48px rgba(0,0,0,0.4); margin-bottom:24px; position:relative; z-index:1; }
        .ab-hero h1 { font-family:'Playfair Display',serif; font-size:clamp(36px,5vw,64px); font-weight:900; color:#fff; }
        .ab-hero p  { color:rgba(255,255,255,0.55); margin-top:12px; font-size:15px; max-width:460px; margin-left:auto; margin-right:auto; }

        /* Body */
        .ab-body { max-width:1100px; margin:0 auto; padding:72px 28px 80px; }

        /* Story section */
        .ab-story { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; margin-bottom:80px; }
        @media (max-width:768px) { .ab-story { grid-template-columns:1fr; gap:40px; } }
        .ab-story-img { background:linear-gradient(135deg,var(--gold-wash),#EDD9A3); border-radius:var(--radius-xl); aspect-ratio:1; display:flex; align-items:center; justify-content:center; font-size:100px; position:relative; overflow:hidden; box-shadow:var(--shadow-lg); }
        .ab-story-img::after { content:''; position:absolute; inset:0; background:radial-gradient(circle at 30% 70%,rgba(201,168,76,0.3),transparent 70%); }
        .ab-story-text p      { font-size:15px; color:var(--text-light); line-height:1.85; margin-bottom:18px; }
        .ab-story-text strong { color:var(--brown); font-weight:700; }

        /* Founder card */
        .founder-card { display:flex; align-items:center; gap:14px; margin-top:24px; background:var(--gold-wash); border-radius:14px; padding:18px 20px; border:1px solid var(--border); }
        .founder-av   { width:52px; height:52px; background:var(--gold); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:26px; flex-shrink:0; }
        .founder-name { font-family:'Playfair Display',serif; font-size:17px; font-weight:700; color:var(--brown); }
        .founder-role { font-size:11px; color:var(--gold-dark); font-weight:600; letter-spacing:0.08em; text-transform:uppercase; margin-top:3px; }

        /* Values grid */
        .ab-vals { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; }
        .ab-val  { background:var(--white); border-radius:var(--radius-lg); padding:28px; box-shadow:var(--shadow-sm); border:1px solid var(--border); border-top:3px solid var(--gold); transition:all 0.25s; }
        .ab-val:hover { transform:translateY(-4px); box-shadow:var(--shadow); }
        .ab-val-icon  { font-size:30px; margin-bottom:14px; }
        .ab-val-title { font-family:'Playfair Display',serif; font-size:19px; font-weight:700; color:var(--brown); margin-bottom:8px; }
        .ab-val-desc  { font-size:13px; color:var(--text-light); line-height:1.7; }
      `}</style>

      <div className="abp">
        {/* Banner */}
        <div className="ab-hero">
          <img src={LOGO_SRC} alt="Ama Bakery" className="ab-logo au" />
          <h1 className="au" style={{ animationDelay: "0.05s" }}>Our Story</h1>
          <p className="au" style={{ animationDelay: "0.1s" }}>Born near Boudha Stupa, grown by the community of Kathmandu.</p>
        </div>

        {/* Body */}
        <div className="ab-body">
          {/* Story */}
          <div className="ab-story">
            <div className="ab-story-img au">🏠</div>
            <div className="ab-story-text au" style={{ animationDelay: "0.1s" }}>
              <div className="section-label" style={{ marginBottom: 14 }}>
                <div className="section-label-line" />
                <span className="section-label-text">Est. 2022</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>A Mother's Kitchen, Open to All</h2>
              <p>Ama Bakery started with a simple dream — to bring the warmth of a mother's kitchen to the streets of Kathmandu. <strong>Mangal Maya Bajracharya</strong> opened the first outlet near the sacred Boudha Stupa.</p>
              <p>With an <strong>open kitchen concept</strong>, every customer can see exactly how their food is made — with quality ingredients, clean hands, and genuine care. Word spread fast, and the Swayambhu branch followed.</p>
              <p>Today, Ama is more than a bakery. It's a community gathering spot — <strong>affordable for everyone</strong>, trusted by locals, loved by all.</p>
              <div className="founder-card">
                <div className="founder-av">👩</div>
                <div>
                  <div className="founder-name">Mangal Maya Bajracharya</div>
                  <div className="founder-role">Founder & Head Baker</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="ab-vals">
            {VALUES.map((v, i) => (
              <div key={v.title} className="ab-val au" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="ab-val-icon">{v.icon}</div>
                <div className="ab-val-title">{v.title}</div>
                <div className="ab-val-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
