import "../styles/globals.css";

export const metadata = {
  title: "Sistema Web",
  description: "Criado com NextJs 13",
};

import { Overpass } from "next/font/google";
import SearchProvider from "@context/searchContext";

const overpass = Overpass({
  variable: "--font-overpass",
  weight: ["100", "400", "900"],
  fallback: ["sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={[overpass.variable].join(" ")}>
      <body>
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  );
}
