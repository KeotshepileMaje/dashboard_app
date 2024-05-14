import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const currentUser = {
    _id: {
      $oid: "6643ac39d63d0d7f99c25c2f",
    },
    name: "Keotshepile",
    email: "keotshepilemaje@gmail.com",
    hashedPassword:
      "$2b$10$e7dzJlyC4niaQB2PhbynM.tczMbKKQLLZwx1MY89zJB.poOLLA4wq",
    createdAt: {
      $date: "2024-05-14T18:23:51.830Z",
    },
    updatedAt: {
      $date: "2024-05-14T18:23:51.830Z",
    },
    role: "ADMIN",
  };

  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, description, price, brand, category, inStock, image } = body;

  console.log('a........====@#@@')
  
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
