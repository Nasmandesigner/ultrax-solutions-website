import Image from "next/image";

type BrandMarkProps = {
  tone?: "light" | "dark";
  priority?: boolean;
};

export function BrandMark({ tone = "light", priority = false }: BrandMarkProps) {
  const src = tone === "light" ? "/brand/ultrax-wordmark-light.svg" : "/brand/ultrax-wordmark-dark.svg";

  return (
    <Image
      alt="UltraX Solutions"
      className="brand-mark"
      height={31}
      priority={priority}
      src={src}
      width={150}
    />
  );
}
