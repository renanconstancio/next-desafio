import { Header } from "@components/Header";
import { GridProducts } from "@components/GridProducts";

import type { Products } from "../../../types/products";
import { Search } from "@components/Search";
import { Input } from "@components/Input";

async function getProducts(): Promise<Products[]> {
  const resp = await fetch("http://localhost:3000/api/products");
  return resp.json();
}

export default async function PageSubHome() {
  const products = await getProducts();

  return (
    <>
      {/* <Header />

*/}

      <section className="container px-4 md:px-0 pb-12 pt-12">
        <form action="" className="bg-white rounded-3xl p-7">
          <header className="flex mb-5">
            <Input
              type="search"
              placeholder="Pesquisa por titulos"
              className="mr-5"
            />

            <Input
              type="text"
              dataList={{ id: "list", data: [{ value: "teste" }] }}
              name="combobox"
            />
          </header>

          <GridProducts listItems={products} />
        </form>
      </section>
    </>
  );
}
