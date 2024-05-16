import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

const currentUser = {
  role: "ADMIN",
};

export async function POST(request) {
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, description, price, brand, category, inStock, image } = body;

  const user = await prisma.product.create({
    data: {
      name,
      description,
      price: parseFloat(price),
      brand,
      category,
      inStock,
      images: image,
    },
  });

  return NextResponse.json(user);
}

export async function PUT(request) {
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }
  const body = await request.json();
  const { id, inStock } = body;

  const product = await prisma.product.update({
    where: { id },
    data: { inStock },
  });

  return NextResponse.json(product);
}
