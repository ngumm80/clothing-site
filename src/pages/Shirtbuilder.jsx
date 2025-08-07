import { useState } from "react";

const shirtStyles = ["T-shirt", "Hoodie"];
const shirtColors = ["Black", "Olive", "Camo"];
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

export default function ShirtBuilder({ onAddToCart }) {
  const [style, setStyle] = useState("T-shirt");
  const [color, setColor] = useState("Black");
  const [logo, setLogo] = useState(logos[0]);

  const shirtImage = `/images/${style.toLowerCase()}-${color.toLowerCase()}.jpg`;

  const handleAdd = () => {
    onAddToCart({ id: Date.now(), style, color, logo });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Customize Your Shirt</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative bg-gray-100 aspect-square rounded-lg overflow-hidden shadow-md">
          <img
            src={shirtImage}
            alt="Shirt preview"
            className="w-full h-full object-contain"
          />
          <img
            src={logo.src}
            alt="Logo preview"
            className="absolute top-1/2 left-1/2 w-32 sm:w-40 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="space-y-5">
          <div>
            <label className="font-medium block mb-1">Shirt Style</label>
            <select
              className="w-full border rounded p-2"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              {shirtStyles.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium block mb-1">Shirt Color</label>
            <div className="flex gap-3">
              {shirtColors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    color === c ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.toLowerCase() }}
                ></button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-medium block mb-1">Logo</label>
            <div className="flex gap-3 flex-wrap">
              {logos.map((l) => (
                <img
                  key={l.name}
                  src={l.src}
                  alt={l.name}
                  onClick={() => setLogo(l)}
                  className={`w-14 h-14 object-contain cursor-pointer border-2 rounded ${
                    logo.name === l.name ? "border-black" : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}