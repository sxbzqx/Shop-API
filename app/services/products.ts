import { Product } from "../types/product";

export const productService = {
  async getAll(): Promise<Product[]> {
    const res = await fetch("/api/products");
    return res.json();
  },

  async add(data: Omit<Product, "id">) {
    return fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },

  async update(data: Product) {
    return fetch("/api/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },

  async remove(id: number) {
    return fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  },
};
