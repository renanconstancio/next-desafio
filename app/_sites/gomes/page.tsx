"use client";
import { Header } from "@components/Header";
import { GridProducts } from "@components/GridProducts";

import type { Products } from "../../../types/products";
import type { Setting } from "../../../types/setting";
import { Footer } from "@components/Footer";

async function getSettings(): Promise<Setting> {
  const resp = await fetch("http://localhost:3000/api/settings");
  return resp.json();
}

async function getProducts(): Promise<Products[]> {
  const resp = await fetch("http://localhost:3000/api/products");
  return resp.json();
}

export default async function Page() {
  const settingData = await getSettings();
  const productsData = await getProducts();

  const [setting, products] = await Promise.all([settingData, productsData]);

  return (
    <>
      <Header setting={setting} />
      {/*

      <section className="container pb-12">
        <GridProducts listItems={products.sort((a) => a.rating).slice(0, 10)} />
      </section> */}

      <Footer />
    </>
  );
}
