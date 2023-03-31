import "../../../styles/globals.css";

export const metadata = {
  title: "Store Web",
  description: "Criado com NextJs 13",
};

// import { Overpass } from "next/font/google";
import { Header } from "./header";
import { NavMenus } from "./components/nav-menus";

// const overpass = Overpass({
//   variable: "--font-overpass",
//   weight: ["100", "400", "900"],
//   style: ["italic", "normal"],
//   fallback: ["sans-serif"],
// });

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col min-h-screen relative">
      <Header />

      {/* @ts-expect-error-async-server-component */}
      <NavMenus />

      {children}
    </main>
  );
}
