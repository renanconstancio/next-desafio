import { GridProducts } from "@components/GridProducts";

import { Input } from "@components/Input";

import type { Products } from "../../../types/products";

async function getProducts(): Promise<Products[]> {
  const resp = await fetch("https://fakestoreapi.com/products");
  return resp.json();
}

export default async function PageSubHome() {
  const productsFiltred: Products[] = [];
  const products = await getProducts();

  const categoriesProducts: { value: string }[] = products
    .map((p) => p.category)
    .filter((category, index, arr) => arr.indexOf(category) == index)
    .map((cat) => ({ value: cat }));

  function handleFilterCategory(str: string) {
    // productsFiltred.push();
    //   console.log(
    //     products.filter(
    //       (item) => item.category.toLowerCase().indexOf(str.toLowerCase()) !== -1,
    //     ),
    //   );
  }

  return (
    <>
      <section className="container px-4 md:px-0 pb-12 pt-12">
        <form action="" className="bg-white rounded-3xl p-7">
          <header className="flex mb-5">
            <Input
              type="search"
              placeholder="Pesquisa por titulos"
              className="mr-5 basis-1/2"
            />

            <Input
              type="search"
              placeholder="Pesquisa por categorias"
              dataList={{ id: "list", data: categoriesProducts }}
              name="categories"
              // onChange={(e) => console.log(e.target.value)}
              className="mr-5 basis-1/4"
            />

            <Input
              type="text"
              placeholder="Faixa de preços"
              dataList={{ id: "list", data: [{ value: "teste" }] }}
              name="combobox"
              className="basis-1/4"
            />
          </header>

          <GridProducts listItems={products} />
        </form>
      </section>
    </>
  );
}
