import "../styles/globals.css";

export const metadata = {
  title: "Sistema Web",
  description: "Criado com NextJs 13",
};

import { Overpass } from "next/font/google";

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
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="flex flex-1 flex-col items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
