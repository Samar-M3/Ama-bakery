// components/ProductCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Reusable product card used on both the Menu page and Featured strip.
// Props:
//   product  – product object from data/products.js
//   onAdd    – callback(product) fired when "Add to Cart" is clicked
//   delay    – optional CSS animation stagger delay (seconds)

import { useState } from "react";
import Badge from "./Badge.jsx";
import { IC } from "../data/icons.jsx";
import { Rs } from "../data/products.js";

export default function ProductCard({ product, onAdd, delay = 0 }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <style>{`
        .pc {
          background: var(--white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border);
          animation: fadeUp 0.5s ease both;
        }
        .pc:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(201,168,76,0.4); }

        .pc-image {
          background: linear-gradient(135deg, var(--gold-wash) 0%, #EDD9A3 100%);
          padding: 38px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 68px;
          position: relative;
          transition: background 0.3s;
        }
        .pc:hover .pc-image { background: linear-gradient(135deg, #EDD9A3 0%, #E8C97A 100%); }
        .pc-shine { position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 50%); pointer-events:none; }

        .pc-body { padding: 20px 20px 24px; flex: 1; display: flex; flex-direction: column; }
        .pc-category { font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:var(--gold-dark); margin-bottom:6px; }
        .pc-name     { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--brown); margin-bottom:7px; line-height:1.2; }
        .pc-desc     { font-size:13px; color:var(--text-light); line-height:1.65; flex:1; }

        .pc-footer { display:flex; align-items:center; justify-content:space-between; margin-top:16px; padding-top:14px; border-top:1px solid var(--border); }
        .pc-price  { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--brown); }
      `}</style>

      <div className="pc" style={{ animationDelay: `${delay}s` }}>
        <div className="pc-image">
          {product.badge && <Badge label={product.badge} />}
          <div className="pc-shine" />
          <span>{product.emoji}</span>
        </div>

        <div className="pc-body">
          <div className="pc-category">{product.category}</div>
          <div className="pc-name">{product.name}</div>
          <div className="pc-desc">{product.description}</div>
          <div className="pc-footer">
            <div className="pc-price">{Rs(product.price)}</div>
            <button className={`btn-add${added ? " ok" : ""}`} onClick={handleAdd}>
              {added ? IC.check : IC.plus}
              {added ? "Added!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
