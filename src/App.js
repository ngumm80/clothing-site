import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const logos = [
  { name: "americanCFR", src: "/logos/americanCFR.png" },
  { name: "July 4th", src: "/logos/4th.png" },
  { name: "Chrome", src: "/logos/Chrome.png" },
  { name: "Fire", src: "/logos/FireFull.png" },
  { name: "Summer Lifting", src: "/logos/summerlifting.png" },
  { name: "Purple Flag", src: "/logos/Purple.png" },
  { name: "Red Flag", src: "/logos/red.png" },
  { name: "Riverside Red White Blue", src: "/logos/Riverside.png" },
];

const shirtColors = ["Black", "Olive", "Camo"];
const shirtStyles = ["T-shirt", "Hoodie", "Tank Top", "Crop Top"];
const shirtSizes = ["S", "M", "L", "XL", "XXL"];

function NavBar({ cartCount }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">CFR Shirts</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/builder" className="hover:underline">Design</Link>
        <Link to="/cart" className="hover:underline">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="relative w-screen h-screen">
      <img
        src="/images/coming-soon.jpg"
        alt="Coming Soon"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">CFR Shirts</h1>
        <p className="text-lg sm:text-xl lg:text-2xl">Coming Soon. Gear up for launch!</p>
      </div>
    </div>
  );
}

function ShopPage() {
  const products = [
    {
      id: "american-flag-tee",
      name: "American Flag Tee",
      image: "/images/tshirt-black.jpg",
      price: 29.99,
    },
    {
      id: "eagle-logo-hoodie",
      name: "Eagle Logo Hoodie",
      image: "/images/hoodie-black.jpg",
      price: 49.99,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop All Shirts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ShirtBuilder({ onAddToCart }) {
  const [color, setColor] = useState("Black");
  const [style, setStyle] = useState("T-shirt");
  const [size, setSize] = useState("M");
  const [logo, setLogo] = useState(logos[0]);

  const baseImage = `/images/${style.toLowerCase()}-${color.toLowerCase()}.jpg`;

  const handleAddToCart = () => {
    const item = {
      id: Date.now(),
      style,
      color,
      size,
      logo,
    };
    onAddToCart(item);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Design Your Own Shirt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full aspect-square bg-gray-100 rounded shadow overflow-hidden">
          <img src={baseImage} alt="Base Shirt" className="w-full h-full object-contain" />
          <img src={logo.src} alt="Logo Preview" className="absolute top-1/2 left-1/2 w-28 sm:w-32 md:w-40 transform -translate-x-1/2 -translate-y-1/2 opacity-95" />
        </div>

        <div className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Style:</label>
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="border p-2 rounded w-full">
              {shirtStyles.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Color:</label>
            <div className="flex gap-3">
              {shirtColors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`w-10 h-10 rounded-full border-2 ${color === c ? "border-black" : "border-gray-300"}`} style={{ backgroundColor: c.toLowerCase() }}></button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Size:</label>
            <select value={size} onChange={(e) => setSize(e.target.value)} className="border p-2 rounded w-full">
              {shirtSizes.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Logo:</label>
            <div className="flex gap-4 flex-wrap">
              {logos.map((l) => (
                <img key={l.name} src={l.src} alt={l.name} onClick={() => setLogo(l)} className={`w-16 h-16 object-contain cursor-pointer border-2 rounded ${logo.name === l.name ? "border-black" : "border-transparent"}`} />
              ))}
            </div>
          </div>

          <button onClick={handleAddToCart} className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function CartPage({ cartItems }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <p><strong>Style:</strong> {item.style}</p>
              <p><strong>Color:</strong> {item.color}</p>
              <p><strong>Size:</strong> {item.size}</p>
              <p><strong>Logo:</strong> {item.logo.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <Router>
      <NavBar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/builder" element={<ShirtBuilder onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;