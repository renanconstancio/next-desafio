import { Search } from "@components/Search";
import { GridProducts } from "@components/GridProducts";
import type { Products } from "../../../types/products";

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

  const categories = products
    ?.map((p) => p.category)
    .filter((category, index, arr) => arr.indexOf(category) == index)
    .map((cat) => ({ value: cat }));

  return (
    <>
      <section className="container px-4 md:px-0 pb-12 pt-12">
        <div className="bg-white rounded-3xl p-7">
          <Search categories={categories} />

          <GridProducts
            listItems={productsSearch.length > 0 ? productsSearch : products}
          />
        </div>
      </section>
    </>
  );
}
