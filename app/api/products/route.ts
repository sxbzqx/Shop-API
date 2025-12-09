import { NextRequest, NextResponse } from "next/server";

let products: any[] = [];

// ==========================
// GET   /api/products
// ==========================
export async function GET() {
  return NextResponse.json(products);
}


// ==========================
// POST  /api/products
// ==========================
// Body: { name: string, price: number }
export async function POST(req: NextRequest) {
  const data = await req.json();

  const newProduct = {
    id: products.length + 1,
    name: data.name,
    price: data.price
  };

  products.push(newProduct);

  return NextResponse.json(newProduct);
}


// ==========================
// PUT   /api/products
// ==========================
// Body: { id: number, name?: string, price?: number }
export async function PUT(req: NextRequest) {
  const { id, name, price } = await req.json();

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: 400 }
    );
  }

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  products[index] = {
    ...products[index],
    name: name ?? products[index].name,
    price: price ?? products[index].price,
  };

  return NextResponse.json(products[index]);
}


// ==========================
// DELETE /api/products
// ==========================
// Body: { id: number }
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: 400 }
    );
  }

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  const deleted = products[index];

  products = products.filter(p => p.id !== id);

  return NextResponse.json({
    message: "Product deleted",
    deleted
  });
}
