import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";


const currentUser = {
  role: "ADMIN",
};

export async function DELETE(request, { params }) {
  const { id } = params;
  console.log("params:--------  ", params);

  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  const product = await prisma.product.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(product);
}
