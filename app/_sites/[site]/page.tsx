import { Header } from "@components/Header";
import { GridProducts } from "@components/GridProducts";

import type { Products } from "../../../types/products";
import { Search } from "@components/Search";

async function getProducts(): Promise<Products[]> {
  const resp = await fetch("http://localhost:3000/api/products");
  return resp.json();
}

export default async function PageSubHome() {
  const products = await getProducts();

  return (
    <>
      <Header />

      <Search />

      <section className="container px-4 py-2 md:px-0 pb-12">
        <GridProducts listItems={products.sort((a) => a.rating).slice(0, 10)} />
      </section>
    </>
  );
}
