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
  { name: "CFR Logo 4", src: "/logos/CFRLogo4.png" },
  { name: "CFR Logo 5", src: "/logos/CFRLogo5.png" },
  { name: "CFR Logo 6", src: "/logos/CFRLogo6.png" },


];

const shirtColors = ["Black", "Olive", "Camo"];
const shirtStyles = ["T-shirt", "Hoodie"];

function NavBar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">CFR Shirts</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/builder" className="hover:underline">Design Your Shirt</Link>
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

function ShirtBuilder() {
  const [color, setColor] = useState("Black");
  const [style, setStyle] = useState("T-shirt");
  const [logo, setLogo] = useState(logos[0]);

  const baseImage = `/images/${style.toLowerCase()}-${color.toLowerCase()}.jpg`;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Design Your Own Shirt</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full aspect-square bg-gray-100 rounded shadow overflow-hidden">
          <img
            src={baseImage}
            alt="Base Shirt"
            className="w-full h-full object-cover"
          />
          <img
            src={logo.src}
            alt="Logo Preview"
            className="absolute top-1/3 left-1/2 w-32 transform -translate-x-1/2 -translate-y-1/2 opacity-90"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Style:</label>
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="border p-2 rounded w-full">
              {shirtStyles.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Color:</label>
            <div className="flex gap-2">
              {shirtColors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-10 h-10 rounded-full border-2 ${color === c ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: c.toLowerCase() }}
                ></button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Logo:</label>
            <div className="flex gap-4">
              {logos.map((l) => (
                <img
                  key={l.name}
                  src={l.src}
                  alt={l.name}
                  onClick={() => setLogo(l)}
                  className={`w-16 h-16 object-contain cursor-pointer border-2 rounded ${logo.name === l.name ? "border-black" : "border-transparent"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/builder" element={<ShirtBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
