"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "./components/Header";

type Product = { id: number; name: string; price: number };

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header />
      <ul className="flex gap-4 mt-10 p-4">
        {products.map((p) => (
          <li key={p.id} 
              className="border flex items-end justify-center"
              style={{width: "200px", height: "200px"}}
          
          >
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
