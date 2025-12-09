"use client";

import Input from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";

export default function AdminForm({
  name,
  price,
  setName,
  setPrice,
  editId,
  onSubmit,
  onCancel,
}: any) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-2 mb-6 ml-2"
    >
      <Input
        placeholder="Наименование"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />

      <Input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e: any) => setPrice(e.target.value)}
        className="w-12"
      />

      <Button
        type="submit"
        className={`px-4 ${editId ? "bg-orange-500" : "bg-green-600"}`}
      >
        {editId ? "Обновить" : "Добавить"}
      </Button>

      {editId && (
        <Button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 px-4"
        >
          Отмена
        </Button>
      )}
      <Link href="/" className="flex items-center ml-auto">
        <Button
            type="button"
            className="px-4 "
        >
            Главная
        </Button>
      </Link>
    </form>
  );
}
