"use client";

import { useEffect, useState } from "react";
import { productService } from "../services/products";
import { Product } from "../types/product";
import AdminForm from "./AdminForm";
import AdminTable from "../components/AdminTable";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const load = async () => {
    setProducts(await productService.getAll());
  };

  useEffect(() => {
    load();
  }, []);

  const handleAddOrUpdate = async (e: any) => {
    e.preventDefault();

    if (editId) {
      await productService.update({
        id: editId,
        name,
        price: Number(price),
      });
    } else {
      await productService.add({
        name,
        price: Number(price),
      });
    }

    setName("");
    setPrice("");
    setEditId(null);
    load();
  };

  const startEdit = (p: Product) => {
    setEditId(p.id);
    setName(p.name);
    setPrice(String(p.price));
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <AdminForm
        name={name}
        price={price}
        setName={setName}
        setPrice={setPrice}
        editId={editId}
        onSubmit={handleAddOrUpdate}
        onCancel={() => {
          setEditId(null);
          setName("");
          setPrice("");
        }}
      />

      <AdminTable
        products={products}
        onEdit={startEdit}
        onDelete={(id) => productService.remove(id).then(load)}
      />
    </div>
  );
}
