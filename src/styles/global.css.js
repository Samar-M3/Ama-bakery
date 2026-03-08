// ── GLOBAL STYLES ─────────────────────────────────────────────────────────────
// Inject once in App.jsx via: <style>{globalCSS}</style>

export const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,500;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --gold:       #C9A84C;
  --gold-light: #E4C76B;
  --gold-dark:  #9A7A2E;
  --gold-pale:  #FDF8EC;
  --gold-wash:  #F5EDD0;
  --brown:      #2C1A06;
  --brown-mid:  #5C3A1E;
  --brown-light:#A0714F;
  --cream:      #FDFAF5;
  --white:      #FFFFFF;
  --border:     #E8D9B8;
  --text:       #1E1208;
  --text-mid:   #6B4F34;
  --text-light: #9C7E62;
  --green:      #1B5E3B;
  --red:        #B03A2E;
  --shadow-sm:  0 2px 12px rgba(44,26,6,0.08);
  --shadow:     0 6px 28px rgba(44,26,6,0.12);
  --shadow-lg:  0 16px 56px rgba(44,26,6,0.18);
  --shadow-xl:  0 24px 80px rgba(44,26,6,0.24);
  --radius:     16px;
  --radius-lg:  24px;
  --radius-xl:  32px;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: var(--cream);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
}

h1, h2, h3, h4 { font-family: 'Playfair Display', serif; line-height: 1.15; }
button  { cursor: pointer; border: none; font-family: inherit; }
input, select, textarea { font-family: inherit; }
a { text-decoration: none; color: inherit; }

::-webkit-scrollbar       { width: 5px; }
::-webkit-scrollbar-track { background: var(--gold-wash); }
::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 4px; }

/* ── Keyframe Animations ── */
@keyframes fadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
@keyframes scaleIn  { from { opacity:0; transform:scale(0.9); } to { opacity:1; transform:scale(1); } }
@keyframes slideLeft{ from { transform:translateX(100%); opacity:0; } to { transform:translateX(0); opacity:1; } }
@keyframes float    { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-10px); } }
@keyframes spin     { to { transform:rotate(360deg); } }
@keyframes pulse    { 0%,100%{ transform:scale(1); } 50%{ transform:scale(1.12); } }

/* ── Utility animation classes ── */
.au { animation: fadeUp   0.6s cubic-bezier(0.16,1,0.3,1) both; }
.ai { animation: fadeIn   0.4s ease both; }
.as { animation: scaleIn  0.35s ease both; }

/* ── Shared section label ── */
.section-label      { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
.section-label-line { height:1px; width:32px; background:var(--gold); }
.section-label-text { font-size:11px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold-dark); }
.section-title      { font-family:'Playfair Display',serif; font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--brown); }
.section-sub        { font-size:15px; color:var(--text-light); max-width:440px; }

/* ── Shared buttons ── */
.btn-gold {
  background: var(--gold); color: var(--brown); border: none;
  border-radius: 14px; padding: 15px 34px; font-size: 14px; font-weight: 700;
  letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer;
  transition: all 0.25s; display: inline-flex; align-items: center; gap: 9px;
  box-shadow: 0 4px 20px rgba(201,168,76,0.4);
}
.btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(201,168,76,0.55); }

.btn-outline {
  background: transparent; color: var(--gold-light); border: 1.5px solid rgba(201,168,76,0.5);
  border-radius: 14px; padding: 14px 30px; font-size: 14px; font-weight: 600;
  letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; transition: all 0.25s;
}
.btn-outline:hover { border-color: var(--gold-light); background: rgba(201,168,76,0.08); }

.btn-add {
  background: var(--brown); color: var(--gold-light); border: none;
  border-radius: 12px; padding: 10px 20px; font-size: 12px; font-weight: 700;
  letter-spacing: 0.05em; cursor: pointer; transition: all 0.25s;
  display: flex; align-items: center; gap: 5px;
}
.btn-add:hover { background: var(--gold); color: var(--brown); transform: scale(1.04); }
.btn-add.ok    { background: var(--green); color: #fff; }
.btn-add svg   { width: 12px; height: 12px; }
`;
