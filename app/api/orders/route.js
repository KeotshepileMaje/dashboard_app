import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

const currentUser = {
  role: "ADMIN",
};

export async function PUT(request) {
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  console.log('rrrrrrrrrr')

  const body = await request.json();
  const { id, deliveryStatus } = body;

  const order = await prisma.order.update({
    where: {id: id},
    data: {
      deliveryStatus,
    },
  })

  return NextResponse.json(order);
}
