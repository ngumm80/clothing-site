import { useState } from "react";

const product = {
  id: "american-flag-tee",
  name: "American Flag Tee",
  price: 29.99,
  styles: ["T-shirt", "Hoodie"],
  colors: ["Black", "Olive", "Camo"],
  sizes: ["S", "M", "L", "XL", "2XL"],
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
};

export default function ProductPage() {
  const [style, setStyle] = useState("T-shirt");
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");

  const imageSrc = product.images[style][color];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={imageSrc}
          alt={`${product.name} - ${style} - ${color}`}
          className="w-full h-auto rounded shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>

          <div className="mb-4">
            <label className="block font-medium mb-1">Style:</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="border p-2 rounded w-full"
            >
              {product.styles.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Color:</label>
            <div className="flex gap-2">
              {product.colors.map((c) => (
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

          <div className="mb-6">
            <label className="block font-medium mb-1">Size:</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="border p-2 rounded w-full"
            >
              {product.sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button
            className="snipcart-add-item bg-black text-white px-4 py-2 rounded shadow"
            data-item-id={`${product.id}-${style}-${color}-${size}`}
            data-item-name={`${product.name} (${style}, ${color}, ${size})`}
            data-item-price={product.price}
            data-item-url="/product/american-flag-tee"
            data-item-description="Premium patriotic apparel."
            data-item-image={imageSrc}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
