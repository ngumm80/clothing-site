import { useState } from "react";
import "./index.css";

const productData = {
  name: "Tactical Tee",
  styles: ["T-shirt", "Hoodie"],
  colors: ["Black", "Olive", "Camo"],
  images: {
    "T-shirt": {
      Black: "/images/tshirt-black.jpg",
      Olive: "/images/tshirt-olive.jpg",
      Camo: "/images/tshirt-camo.jpg",
    },
    Hoodie: {
      Black: "/images/hoodie-black.jpg",
      Olive: "/images/hoodie-olive.jpg",
      Camo: "/images/hoodie-camo.jpg",
    },
  },
  price: 29.99,
  id: "tactical-tee-001",
};

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState("T-shirt");
  const [selectedColor, setSelectedColor] = useState("Black");

  const imageSrc = productData.images[selectedStyle][selectedColor];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={imageSrc}
          alt={`${selectedStyle} - ${selectedColor}`}
          className="w-full rounded shadow"
        />

        <div>
          <p className="text-xl font-semibold mb-2">${productData.price}</p>

          {/* Style Selector */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Style:</label>
            <select
              className="border p-2 rounded w-full"
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
            >
              {productData.styles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          {/* Color Selector */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Color:</label>
            <div className="flex gap-2">
              {productData.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="snipcart-add-item bg-black text-white px-4 py-2 rounded mt-4"
            data-item-id={productData.id}
            data-item-price={productData.price}
            data-item-url="/"
            data-item-name={`${productData.name} - ${selectedStyle} - ${selectedColor}`}
            data-item-image={imageSrc}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

