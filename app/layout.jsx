import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm",
});

export const metadata = {
  title: {
    default: "Julio Herrera Velutini | Blog",
    template: "%s | Julio Herrera Velutini",
  },
  description:
    "Stories, ideas and insights: the family legacy, the career in finance and the causes behind international banker Julio Herrera Velutini.",
  openGraph: {
    title: "Julio Herrera Velutini | Blog",
    description:
      "The family legacy, the career in finance and the causes behind international banker Julio Herrera Velutini.",
    type: "website",
    images: ["/images/julio.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}