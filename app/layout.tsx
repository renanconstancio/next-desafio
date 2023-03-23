import "../styles/globals.css";

import Script from "next/script";

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
        {/* <div className="enabled">
          <div vw-access-button className="active"></div>
          <div vw-plugin-wrapper>
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>
        <Script
          src="https://vlibras.gov.br/app/vlibras-plugin.js"
          id="vlibras-plugin-js"
          type="text/javascript"
        />
        <Script
          type="text/javascript"
          id="vlibras-plugin"
          dangerouslySetInnerHTML={{
            __html: `new window.VLibras.Widget('https://vlibras.gov.br/app')`,
          }}
        /> */}
      </body>
    </html>
  );
}
