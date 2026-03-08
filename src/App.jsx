// App.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Root component. Manages global state (page, cart, orders, products)
// and renders the correct page based on current route.
//
// Project structure:
//   src/
//   ├── App.jsx                  ← you are here
//   ├── data/
//   │   ├── logo.js              ← base64 logo string
//   │   ├── icons.jsx            ← all SVG icons
//   │   └── products.js          ← PRODUCTS, CATEGORIES, BRANCHES, Rs(), SEED_ORDERS
//   ├── styles/
//   │   └── global.css.js        ← global CSS injected via <style>
//   ├── components/
//   │   ├── Badge.jsx            ← product badge pill
//   │   ├── Navbar.jsx           ← fixed top nav with logo
//   │   ├── ProductCard.jsx      ← reusable product card
//   │   ├── CartDrawer.jsx       ← slide-in cart panel
//   │   └── Footer.jsx           ← site footer
//   └── pages/
//       ├── HomePage.jsx         ← hero + featured + why ama + reviews
//       ├── MenuPage.jsx         ← full product catalog
//       ├── AboutPage.jsx        ← story + founder + values
//       ├── FindPage.jsx         ← branch maps + contact info
//       ├── CheckoutPage.jsx     ← order form + summary
//       └── AdminPage.jsx        ← orders & product management

import { useState } from "react";

// Data
import { PRODUCTS, SEED_ORDERS } from "./data/products.js";

// Styles
import { globalCSS } from "./styles/global.css.js";

// Components
import Navbar      from "./components/Navbar.jsx";
import CartDrawer  from "./components/CartDrawer.jsx";
import Footer      from "./components/Footer.jsx";

// Pages
import HomePage    from "./pages/HomePage.jsx";
import MenuPage    from "./pages/MenuPage.jsx";
import AboutPage   from "./pages/AboutPage.jsx";
import FindPage    from "./pages/FindPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import AdminPage   from "./pages/AdminPage.jsx";

export default function App() {
  // ── Routing ─────────────────────────────────────────────────────────────
  const [page, setPage] = useState("home");

  // ── Cart state ───────────────────────────────────────────────────────────
  const [cart,     setCart]     = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // ── Orders & Products (admin state) ──────────────────────────────────────
  const [orders,   setOrders]   = useState(SEED_ORDERS);
  const [products, setProducts] = useState(PRODUCTS);

  // ── Cart helpers ──────────────────────────────────────────────────────────
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      return existing
        ? prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const updateCartQty = (id, qty) => {
    if (qty <= 0) setCart(prev => prev.filter(i => i.id !== id));
    else          setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartOpen(true);
  };

  const placeOrder = (order) => {
    setOrders(prev => [...prev, order]);
    setCart([]);
  };

  // ── Derived values ────────────────────────────────────────────────────────
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const isAdmin   = page === "admin";

  // ── Page renderer ─────────────────────────────────────────────────────────
  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage onAdd={handleAddToCart} setPage={setPage} />;
      case "menu":
        return <MenuPage onAdd={handleAddToCart} />;
      case "about":
        return <AboutPage />;
      case "find":
        return <FindPage />;
      case "checkout":
        return <CheckoutPage cart={cart} onPlaceOrder={placeOrder} />;
      case "admin":
        return (
          <AdminPage
            orders={orders}
            products={products}
            setOrders={setOrders}
            setProducts={setProducts}
          />
        );
      default:
        return <HomePage onAdd={handleAddToCart} setPage={setPage} />;
    }
  };

  return (
    <>
      {/* Inject global styles once */}
      <style>{globalCSS}</style>

      {/* Fixed navbar */}
      <Navbar
        page={page}
        setPage={setPage}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        isAdmin={isAdmin}
      />

      {/* Page content */}
      <main>{renderPage()}</main>

      {/* Footer (hidden on admin) */}
      {!isAdmin && <Footer setPage={setPage} />}

      {/* Cart drawer (hidden on admin) */}
      {!isAdmin && cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateCartQty}
          onRemove={removeFromCart}
          onCheckout={() => { setCartOpen(false); setPage("checkout"); }}
        />
      )}
    </>
  );
}
