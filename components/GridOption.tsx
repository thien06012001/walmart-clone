import { cn } from "@/lib/utils";
import exp from "constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  className?: string;
  image?: string;
};

const GridOption = ({ title, className, image }: Props) => {
  return (
    <Link
      href={{ pathname: "/", query: { q: title } }}
      className={cn("relative", className)}
    >
      <h2>{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="object-cover opacity-20 rounded-md"
        />
      )}
    </Link>
  );
};
export default GridOption;
