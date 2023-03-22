import { Header } from "@components/Header";
import type { Products } from "../types/products";
import type { Setting } from "../types/setting";
import Image from "next/image";

async function getSettings(): Promise<Setting> {
  const resp = await fetch("http://localhost:3000/api/settings");
  return resp.json();
}

async function getProducts(): Promise<Products[]> {
  const resp = await fetch("http://localhost:3000/api/products");
  return resp.json();
}

export default async function Home() {
  const settingData = await getSettings();
  const productsData = await getProducts();

  const [setting, products] = await Promise.all([settingData, productsData]);

  return (
    <>
      <Header setting={setting} />

      <section className="container">
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {products?.map((item, k) => (
            <li key={k}>
              <a href="">
                <article className="text-center">
                  <Image
                    src={item.images[0]}
                    loading="lazy"
                    alt="images"
                    className="w-full"
                    width={300}
                    height={300}
                  />
                  <h3 className="mt-3 mb-5 font-bold bold">
                    Titulo do produto
                  </h3>
                  <s className="thin text-xs">DE 20,00</s>{" "}
                  <strong className="bold text-xl block text-red-400">
                    Por 15,30
                  </strong>
                </article>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
