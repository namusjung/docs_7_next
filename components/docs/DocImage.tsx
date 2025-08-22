"use client";
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  lightbox?: boolean;
};

export default function DocImage({ src, alt, caption }: Props) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt ?? ""}
        width={1200}
        height={720}
        className="rounded-lg border"
      />
      {caption ? (
        <figcaption className="text-center text-sm text-foreground/60 mt-2">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
