// ── PRODUCTS ──────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  { id: 1,  name: "Butter Muffin",    category: "Muffins",  price: 80,  emoji: "🧁", description: "Fluffy, melt-in-your-mouth buttery muffin baked fresh every morning. Ama's signature treat.", badge: "Bestseller", featured: true },
  { id: 2,  name: "Pumpkin Bites",    category: "Snacks",   price: 50,  emoji: "🎃", description: "Sesame-covered sweet-savory bites made with real pumpkin. Unique, addictive and totally Ama.", badge: "Signature",  featured: true },
  { id: 3,  name: "Dora Cake",        category: "Cakes",    price: 90,  emoji: "🥞", description: "Beloved Nepali bakery classic — soft pillowy sandwich cakes filled with sweet cream.", badge: "Local Fav",  featured: true },
  { id: 4,  name: "Plain Roll",       category: "Breads",   price: 30,  emoji: "🍞", description: "Soft, chewy roll with a subtle sweetness. Perfect alongside your morning tea.", badge: null,         featured: false },
  { id: 5,  name: "Cookies",          category: "Cookies",  price: 40,  emoji: "🍪", description: "Freshly baked cookies with a crispy edge and chewy center.", badge: null,         featured: false },
  { id: 6,  name: "Doughnut",         category: "Pastries", price: 60,  emoji: "🍩", description: "Golden-fried doughnuts, lightly glazed. Soft inside, satisfyingly crispy outside.", badge: null,         featured: false },
  { id: 7,  name: "Swiss Roll",       category: "Cakes",    price: 120, emoji: "🌀", description: "Light sponge cake rolled with cream filling — airy, creamy, and delicate.", badge: null,         featured: false },
  { id: 8,  name: "Banana Bread",     category: "Breads",   price: 100, emoji: "🍌", description: "Dense and moist banana bread baked with ripe bananas. Wholesome and naturally sweet.", badge: null,         featured: false },
  { id: 9,  name: "Coconut Cake",     category: "Cakes",    price: 150, emoji: "🥥", description: "Moist layered cake infused with fresh coconut. Moderately sweet with a tropical finish.", badge: "New",        featured: true },
  { id: 10, name: "Slice of the Day", category: "Cakes",    price: 30,  emoji: "🍰", description: "A freshly cut slice from today's bake. Ask staff what's fresh — always a great deal!", badge: "Daily",      featured: false },
];

export const CATEGORIES = ["All", ...new Set(PRODUCTS.map(p => p.category))];

// ── BRANCHES ─────────────────────────────────────────────────────────────────
export const BRANCHES = [
  {
    name: "Boudha Branch",
    address: "Boudha-6, Dharatole\n(near Boudha Stupa), Kathmandu",
    phone: ["01-5918699", "986-6310000"],
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=85.3550%2C27.7150%2C85.3700%2C27.7280&layer=mapnik&marker=27.7214%2C85.3620",
    emoji: "🏛️",
    note: "Also has Hookah lounge",
    hasHookah: true,
  },
  {
    name: "Swayambhu Branch",
    address: "Kimdol, Swayambhu\nKathmandu",
    phone: ["01-5314444"],
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=85.2780%2C27.7050%2C85.2980%2C27.7200&layer=mapnik&marker=27.7124%2C85.2884",
    emoji: "🕌",
    note: "Near Swayambhunath Stupa",
    hasHookah: false,
  },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────
export const Rs = (n) => `Rs ${Number(n).toFixed(0)}`;

// ── SAMPLE ORDERS (seed data) ─────────────────────────────────────────────────
export const SEED_ORDERS = [
  {
    id: "AMA-1001",
    date: "3/8/2026, 8:14 AM",
    customer: { name: "Sita Sharma", phone: "9841234567", address: "Boudha-7", branch: "Boudha Branch", notes: "Less sweet please" },
    items: [{ ...PRODUCTS[0], qty: 2 }, { ...PRODUCTS[1], qty: 3 }],
    total: 310,
    status: "Preparing",
  },
  {
    id: "AMA-1002",
    date: "3/8/2026, 9:02 AM",
    customer: { name: "Ram Thapa", phone: "9851234567", address: "", branch: "Swayambhu Branch", notes: "" },
    items: [{ ...PRODUCTS[2], qty: 2 }, { ...PRODUCTS[3], qty: 4 }],
    total: 300,
    status: "Ready",
  },
];
