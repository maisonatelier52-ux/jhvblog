import Image from "next/image";

const LOGO_SRC = "/images/logo.png";

export default function Logo({ size = "lg" }) {
  const box =
    size === "sm" ? "h-8 w-8 sm:h-9 sm:w-9" : "h-9 w-9";

  return (
    <span className={`relative block shrink-0 ${box}`}>
      <Image src={LOGO_SRC} alt="Julio Herrera Velutini logo" fill sizes="44px" className="object-contain"/>
    </span>
  );
}