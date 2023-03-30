import { Search } from "@components/Search";
import { GridProducts } from "@components/GridProducts";
import type { Products } from "../../../types/products";

export const revalidate = 5 * 60;

export const metadata = {
  title: "Pesquisar - Sistema Web",
  description: "Criado com NextJs 13",
};

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

async function getProducts(): Promise<Products[]> {
  const resp = await fetch("https://fakestoreapi.com/products");
  return resp.json();
}

export default async function SubHomePage({ searchParams }: Props) {
  const products = await getProducts();

  const productsSearch = products.filter(
    (item) =>
      item.title
        .toLowerCase()
        .indexOf(String(searchParams?.search_title).toLowerCase()) !== -1 &&
      item.category
        .toLowerCase()
        .indexOf(String(searchParams?.search_category).toLowerCase()) !== -1,
  );
  // .sort((a: Products, b: Products) => {
  //   if (String(searchParams?.search_category) === "asc")
  //     return a.price - b.price;
  // });

  const categories = products
    ?.map((p) => p.category)
    .filter((category, index, arr) => arr.indexOf(category) == index)
    .map((cat) => ({ value: cat }));

  return (
    <>
      <section className="container max-w-screen-lg p-4">
        <div className="bg-white rounded-3xl p-8">
          <Search categories={categories} />

          <GridProducts
            listItems={productsSearch.length > 0 ? productsSearch : products}
          />
        </div>
      </section>
    </>
  );
}
