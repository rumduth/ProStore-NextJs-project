"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
export default function ProductImages({ images }: { images: string[] }) {
  const [current, setCurrent] = useState<number>(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex-start gap-2">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={images[index]}
              alt="product image"
              width={100}
              height={100}
              className={cn(
                "border cursor-pointer hover:border-orange-600",
                current === index && "border-orange-500"
              )}
              onClick={() => setCurrent(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
