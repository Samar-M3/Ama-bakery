// components/CartDrawer.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Slide-in cart panel from the right.
// Props:
//   cart       – array of cart items { ...product, qty }
//   onClose    – close drawer
//   onUpdateQty(id, qty)  – update quantity (qty <= 0 removes item)
//   onRemove(id)          – remove item
//   onCheckout            – navigate to checkout

import { IC } from "../data/icons.jsx";
import { Rs } from "../data/products.js";

export default function CartDrawer({ cart, onClose, onUpdateQty, onRemove, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <style>{`
        .cart-overlay { position:fixed; inset:0; z-index:2000; background:rgba(28,16,4,0.6); backdrop-filter:blur(6px); animation:fadeIn 0.25s ease; }
        .cart-drawer  { position:fixed; top:0; right:0; bottom:0; width:100%; max-width:420px; background:var(--cream); z-index:2001; display:flex; flex-direction:column; box-shadow:-8px 0 60px rgba(28,16,4,0.25); animation:slideLeft 0.35s cubic-bezier(0.16,1,0.3,1); }

        .cd-head  { padding:22px 24px; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; background:var(--white); }
        .cd-title { font-family:'Playfair Display',serif; font-size:24px; font-weight:700; color:var(--brown); }
        .cd-close { background:var(--gold-wash); border:none; border-radius:10px; width:38px; height:38px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--brown); transition:background 0.2s; }
        .cd-close:hover { background:var(--border); }
        .cd-close svg { width:16px; height:16px; }

        .cd-body  { flex:1; overflow-y:auto; padding:20px; }
        .cd-empty { text-align:center; padding:60px 20px; color:var(--text-light); }

        .cd-item { display:flex; gap:14px; padding:16px 0; border-bottom:1px solid var(--border); }
        .cd-item:last-child { border:none; }
        .cd-emoji { font-size:32px; background:var(--gold-wash); border-radius:12px; width:54px; height:54px; display:flex; align-items:center; justify-content:center; flex-shrink:0; border:1px solid var(--border); }
        .cd-info  { flex:1; }
        .cd-name  { font-family:'Playfair Display',serif; font-size:16px; font-weight:700; color:var(--brown); }
        .cd-price { font-size:13px; color:var(--text-light); margin-top:1px; }

        .cd-qty { display:flex; align-items:center; gap:8px; margin-top:8px; }
        .qty-btn { background:var(--gold-wash); border:1px solid var(--border); border-radius:7px; width:28px; height:28px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--brown); transition:all 0.2s; }
        .qty-btn:hover { background:var(--gold); border-color:var(--gold); }
        .qty-btn svg { width:11px; height:11px; }
        .qty-num { font-weight:700; font-size:14px; min-width:20px; text-align:center; color:var(--brown); }

        .cd-remove { background:none; border:none; color:var(--border); cursor:pointer; padding:4px; transition:color 0.2s; }
        .cd-remove:hover { color:#e53e3e; }
        .cd-remove svg { width:15px; height:15px; }

        .cd-footer { padding:22px 24px; border-top:1px solid var(--border); background:var(--white); }
        .cd-total  { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
        .cd-total-label  { font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-light); }
        .cd-total-amount { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:var(--brown); }

        .btn-checkout {
          width:100%; background:var(--brown); color:var(--gold-light); border:none;
          border-radius:14px; padding:16px; font-size:14px; font-weight:700;
          letter-spacing:0.07em; text-transform:uppercase; cursor:pointer;
          transition:all 0.25s; box-shadow:0 4px 16px rgba(44,26,6,0.2);
        }
        .btn-checkout:hover   { background:var(--gold); color:var(--brown); transform:translateY(-2px); }
        .btn-checkout:disabled{ opacity:0.45; cursor:default; transform:none; }
      `}</style>

      {/* Backdrop */}
      <div className="cart-overlay" onClick={onClose} />

      {/* Drawer */}
      <div className="cart-drawer">
        <div className="cd-head">
          <div className="cd-title">Your Cart 🧺</div>
          <button className="cd-close" onClick={onClose}>{IC.close}</button>
        </div>

        <div className="cd-body">
          {cart.length === 0 ? (
            <div className="cd-empty">
              <div style={{ fontSize: 56, marginBottom: 14 }}>🛒</div>
              <p>Your cart is empty.<br />Add some treats!</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cd-item">
                <div className="cd-emoji">{item.emoji}</div>
                <div className="cd-info">
                  <div className="cd-name">{item.name}</div>
                  <div className="cd-price">{Rs(item.price)} each</div>
                  <div className="cd-qty">
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.qty - 1)}>{IC.minus}</button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.qty + 1)}>{IC.plus}</button>
                  </div>
                </div>
                <button className="cd-remove" onClick={() => onRemove(item.id)}>{IC.trash}</button>
              </div>
            ))
          )}
        </div>

        <div className="cd-footer">
          <div className="cd-total">
            <span className="cd-total-label">Total</span>
            <span className="cd-total-amount">{Rs(total)}</span>
          </div>
          <button className="btn-checkout" disabled={cart.length === 0} onClick={onCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
