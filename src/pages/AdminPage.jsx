// pages/AdminPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Admin dashboard: stats, order management, product management.

import { useState } from "react";
import LOGO_SRC from "../data/logo.js";
import { IC } from "../data/icons.jsx";
import { Rs } from "../data/products.js";

const STATUS_COLORS = {
  Received:  { bg: "#FFF7ED", c: "#C2410C" },
  Preparing: { bg: "#FEF3C7", c: "#92400E" },
  Ready:     { bg: "#DCFCE7", c: "#166534" },
  Completed: { bg: "#F0FDF4", c: "#15803D" },
};

export default function AdminPage({ orders, products, setOrders, setProducts }) {
  const [activeTab, setActiveTab] = useState("orders");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "", category: "Muffins", price: "", emoji: "🧁", description: "", badge: "",
  });

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingCount = orders.filter(o => o.status !== "Completed").length;

  const updateOrderStatus = (orderId, status) =>
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));

  const deleteProduct = (id) =>
    setProducts(prev => prev.filter(p => p.id !== id));

  const saveNewProduct = () => {
    if (!newProduct.name) return;
    setProducts(prev => [...prev, { ...newProduct, id: Date.now(), price: parseFloat(newProduct.price) || 0 }]);
    setNewProduct({ name: "", category: "Muffins", price: "", emoji: "🧁", description: "", badge: "" });
    setShowAddForm(false);
  };

  return (
    <>
      <style>{`
        .adm { padding-top: 72px; min-height: 100vh; background: var(--cream); }

        /* Top bar */
        .adm-top { background:var(--brown); padding:28px 32px; display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
        .adm-top-logo { width:44px; height:44px; border-radius:50%; object-fit:cover; box-shadow:0 0 0 2px rgba(201,168,76,0.4); }
        .adm-top h1   { font-family:'Playfair Display',serif; font-size:24px; font-weight:700; color:#fff; }
        .adm-badge    { background:var(--gold); color:var(--brown); font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:4px 14px; border-radius:20px; }

        /* Stats */
        .adm-stats { display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:16px; padding:24px 32px; }
        .astat { background:var(--white); border-radius:var(--radius-lg); padding:22px 20px; box-shadow:var(--shadow-sm); border:1px solid var(--border); border-top:3px solid var(--gold); animation:fadeUp 0.5s ease both; }
        .astat-num   { font-family:'Playfair Display',serif; font-size:30px; font-weight:700; color:var(--brown); }
        .astat-label { font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-light); margin-top:4px; }
        .astat-icon  { color:var(--gold); width:22px; height:22px; margin-bottom:8px; }

        /* Tab bar */
        .adm-tab-bar { display:flex; gap:4px; padding:0 32px; border-bottom:1px solid var(--border); background:var(--white); }
        .adm-tab { background:none; border:none; padding:14px 22px; font-size:13px; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; color:var(--text-light); cursor:pointer; transition:all 0.2s; border-bottom:2px solid transparent; }
        .adm-tab.active { color:var(--brown); border-bottom-color:var(--gold); }

        .adm-body { padding:24px 32px; }

        /* ── Orders ── */
        .order-list { display:flex; flex-direction:column; gap:14px; }
        .order-card { background:var(--white); border-radius:var(--radius-lg); padding:22px 24px; box-shadow:var(--shadow-sm); border:1px solid var(--border); animation:fadeUp 0.4s ease both; }
        .order-head { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom:10px; }
        .order-id   { font-weight:700; font-size:13px; color:var(--gold-dark); letter-spacing:0.05em; }
        .order-meta { font-size:12px; color:var(--text-light); margin-top:2px; }
        .order-items{ font-size:13px; color:var(--text-light); margin-bottom:10px; line-height:1.8; }
        .order-total{ font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--brown); }
        .order-notes{ font-size:12px; color:var(--text-light); font-style:italic; margin-bottom:8px; }
        .status-badge { display:inline-block; font-size:10px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; padding:3px 10px; border-radius:20px; }
        .status-select { border:1.5px solid var(--border); border-radius:10px; padding:7px 12px; font-size:12px; font-weight:600; cursor:pointer; outline:none; background:var(--gold-pale); }

        /* ── Products ── */
        .prod-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; flex-wrap:wrap; gap:10px; }
        .prod-header h2 { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:var(--brown); }
        .btn-add-product { background:var(--brown); color:var(--gold-light); border:none; border-radius:12px; padding:9px 20px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; transition:all 0.2s; }
        .btn-add-product:hover { background:var(--gold); color:var(--brown); }
        .btn-add-product svg { width:12px; height:12px; }

        .prod-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); gap:14px; }
        .prod-card { background:var(--white); border-radius:var(--radius-lg); padding:18px; box-shadow:var(--shadow-sm); display:flex; gap:12px; border:1px solid var(--border); animation:fadeUp 0.4s ease both; }
        .prod-emoji{ font-size:36px; flex-shrink:0; }
        .prod-cat  { font-size:10px; color:var(--gold-dark); font-weight:700; letter-spacing:0.1em; text-transform:uppercase; }
        .prod-name { font-family:'Playfair Display',serif; font-size:16px; font-weight:700; color:var(--brown); }
        .prod-price{ font-size:13px; color:var(--text-light); font-weight:700; margin-top:3px; }
        .prod-badge-tag { font-size:10px; color:var(--gold-dark); font-weight:700; margin-top:3px; }
        .btn-delete { background:var(--gold-wash); border:1px solid var(--border); border-radius:8px; width:28px; height:28px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--red); margin-top:8px; transition:all 0.2s; }
        .btn-delete:hover { background:#FEE2E2; border-color:#FCA5A5; }
        .btn-delete svg { width:13px; height:13px; }

        /* Add product form */
        .add-form { background:var(--white); border-radius:var(--radius-lg); padding:28px; box-shadow:var(--shadow-lg); margin-bottom:20px; border:1px solid var(--border); animation:scaleIn 0.3s ease; }
        .add-form h3 { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--brown); margin-bottom:18px; }
        .add-form-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        @media (max-width:600px) { .add-form-grid { grid-template-columns:1fr; } }
        .afg { display:flex; flex-direction:column; gap:5px; }
        .afl { font-size:10px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-light); }
        .afi { background:var(--gold-pale); border:1.5px solid var(--border); border-radius:10px; padding:10px 13px; font-size:13px; outline:none; transition:border 0.2s; }
        .afi:focus { border-color:var(--gold); }
        .add-form-actions { display:flex; gap:10px; margin-top:18px; }
        .btn-save   { background:var(--green); color:#fff; border:none; border-radius:12px; padding:11px 26px; font-size:13px; font-weight:700; cursor:pointer; }
        .btn-cancel { background:var(--gold-wash); color:var(--brown); border:1px solid var(--border); border-radius:12px; padding:11px 20px; font-size:13px; font-weight:700; cursor:pointer; }
      `}</style>

      <div className="adm">
        {/* Top bar */}
        <div className="adm-top">
          <img src={LOGO_SRC} alt="logo" className="adm-top-logo" />
          <h1>Ama Bakery</h1>
          <span className="adm-badge">Admin Dashboard</span>
        </div>

        {/* Stats */}
        <div className="adm-stats">
          {[
            { icon: IC.pkg,   num: orders.length,      label: "Total Orders" },
            { icon: IC.trend, num: `Rs ${totalRevenue}`, label: "Revenue"      },
            { icon: IC.clock, num: pendingCount,        label: "Pending"       },
            { icon: IC.pin,   num: "2",                 label: "Branches"      },
          ].map((s, i) => (
            <div key={i} className="astat" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="astat-icon">{s.icon}</div>
              <div className="astat-num">{s.num}</div>
              <div className="astat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div style={{ background: "var(--white)" }}>
          <div className="adm-tab-bar">
            {["orders", "products"].map(t => (
              <button key={t} className={`adm-tab${activeTab === t ? " active" : ""}`} onClick={() => setActiveTab(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="adm-body">

          {/* ── Orders tab ── */}
          {activeTab === "orders" && (
            <div className="order-list">
              {orders.length === 0 ? (
                <div style={{ textAlign: "center", padding: 60, color: "var(--text-light)" }}>📦 No orders yet!</div>
              ) : (
                [...orders].reverse().map(order => {
                  const s = STATUS_COLORS[order.status] || STATUS_COLORS.Received;
                  return (
                    <div key={order.id} className="order-card">
                      <div className="order-head">
                        <div>
                          <div className="order-id">{order.id}</div>
                          <div className="order-meta">
                            {order.date} · {order.customer.name} · {order.customer.phone} · {order.customer.branch}
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span className="status-badge" style={{ background: s.bg, color: s.c }}>{order.status}</span>
                          <select
                            className="status-select"
                            value={order.status}
                            onChange={e => updateOrderStatus(order.id, e.target.value)}
                          >
                            {Object.keys(STATUS_COLORS).map(st => <option key={st}>{st}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="order-items">
                        {order.items.map(i => `${i.emoji} ${i.name} × ${i.qty}`).join(" · ")}
                      </div>
                      {order.customer.notes && (
                        <div className="order-notes">📝 "{order.customer.notes}"</div>
                      )}
                      <div className="order-total">{Rs(order.total)}</div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* ── Products tab ── */}
          {activeTab === "products" && (
            <>
              <div className="prod-header">
                <h2>Products ({products.length})</h2>
                <button className="btn-add-product" onClick={() => setShowAddForm(s => !s)}>
                  {IC.plus} Add Product
                </button>
              </div>

              {/* Add product form */}
              {showAddForm && (
                <div className="add-form">
                  <h3>Add New Product</h3>
                  <div className="add-form-grid">
                    {[["Name", "name"], ["Emoji", "emoji"], ["Price (Rs)", "price"], ["Category", "category"], ["Badge (optional)", "badge"]].map(([label, key]) => (
                      <div key={key} className="afg">
                        <label className="afl">{label}</label>
                        <input className="afi" value={newProduct[key]} onChange={e => setNewProduct(p => ({ ...p, [key]: e.target.value }))} />
                      </div>
                    ))}
                    <div className="afg" style={{ gridColumn: "1 / -1" }}>
                      <label className="afl">Description</label>
                      <input className="afi" value={newProduct.description} onChange={e => setNewProduct(p => ({ ...p, description: e.target.value }))} />
                    </div>
                  </div>
                  <div className="add-form-actions">
                    <button className="btn-save" onClick={saveNewProduct}>Save Product</button>
                    <button className="btn-cancel" onClick={() => setShowAddForm(false)}>Cancel</button>
                  </div>
                </div>
              )}

              {/* Product grid */}
              <div className="prod-grid">
                {products.map((p, i) => (
                  <div key={p.id} className="prod-card" style={{ animationDelay: `${i * 0.04}s` }}>
                    <div className="prod-emoji">{p.emoji}</div>
                    <div>
                      <div className="prod-cat">{p.category}</div>
                      <div className="prod-name">{p.name}</div>
                      <div className="prod-price">{Rs(p.price)}</div>
                      {p.badge && <div className="prod-badge-tag">🏷 {p.badge}</div>}
                      <button className="btn-delete" onClick={() => deleteProduct(p.id)} title="Delete product">
                        {IC.trash}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
