"use client"

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncate";
import Image from "next/image";

const OrderItem = ({ item }) => {
  console.log(item)

  return (
    <div
      className="grid
    grid-cols-5
    text-xs
    md:text-sm
    gap-4
    border-t-[1.5px]
    border-slate-200
    py-4
    items-center
    "
    >
      <div className="col-span-2 justify-start flex gap-2 md:gap-4">
        <div className="relative w-[70px] aspect-square">
          <Image src={item.selectedImg.image} alt={item.name} fill className="object-contain" />
        </div>
        <div className="flex flex-col gap-1">
          <div>{truncateText(item.name)}</div>
          <div>{item.selectedImg.color}</div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">{formatPrice(item.quantity)}</div>
      <div className="justify-self-end font-semibold">
        {(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default OrderItem;
