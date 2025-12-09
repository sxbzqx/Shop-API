"use client";

import { Product } from "../types/product";

export default function AdminTable({
  products,
  onEdit,
  onDelete,
}: {
  products: Product[];
  onEdit: (p: Product) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Наименование</th>
          <th className="p-2 border">Цена</th>
          <th className="p-2 border">Действия</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="border">
            <td className="p-2 border">{p.id}</td>
            <td className="p-2 border">{p.name}</td>
            <td className="p-2 border">{p.price}</td>
            <td className="p-2 flex gap-4 justify-center">
              <button
                onClick={() => onEdit(p)}
                className="bg-orange-500 text-white px-3 py-1 rounded"
              >
                Изменить
              </button>

              <button
                onClick={() => onDelete(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
