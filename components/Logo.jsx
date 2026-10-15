import Image from "next/image";

// 👉 Change this to your logo's file name (the file lives in public/images/)
const LOGO_SRC = "/images/logo.png";

// size: "lg" for inner pages (44px), "sm" for the home page header (32px → 36px on sm+)
export default function Logo({ size = "lg" }) {
  const box =
    size === "sm" ? "h-8 w-8 sm:h-9 sm:w-9" : "h-11 w-11";

  return (
    <span className={`relative block shrink-0 ${box}`}>
      <Image
        src={LOGO_SRC}
        alt="Julio Herrera Velutini logo"
        fill
        sizes="44px"
        className="object-contain"
      />
    </span>
  );
}