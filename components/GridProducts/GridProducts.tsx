import Image from "next/image";

import { StarRating } from "@components/StarRating";
import { maskPrice } from "@utils/maskPrice";
import { SalePrice } from ".";
import PriceOf from "./PriceOf";
import H3Title from "./Title";

import type { Products } from "../../types/products";

type ListItems = {
  listItems: Products[];
};

export default function GridProducts({ listItems }: ListItems) {
  return (
    <>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="p-3 border-b border-slate-300 text-start">Titulo</th>
            <th className="p-3 border-b border-slate-300 text-center">
              Categoria
            </th>
            <th className="p-3 border-b border-slate-300 text-center">Preço</th>
          </tr>
        </thead>
        <tbody>
          {listItems?.map((item, k) => (
            <tr key={k}>
              <td className="p-3 border-b border-slate-300">{item.title}</td>
              <td className="p-3 border-b border-slate-300 text-center  w-auto">
                Earth, Wind, and Fire
              </td>
              <td className="p-3 border-b border-slate-300 text-center w-auto">
                {maskPrice(item.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <section className="bg-white rounded-3xl p-7">
      </section> */}
      {/*
      <ul className="flex flex-col">
        {listItems?.map((item, k) => (
          <li key={k}>
            <a href="">
              <article className="flex flex-row">
                <Image
                  src={item.images[0]}
                  loading="lazy"
                  alt="images"
                  width={75}
                  height={75}
                />
                <aside>
                  <H3Title title={item.title} />
                  <StarRating ratingStar={item.rating} />
                </aside>
                <aside>
                  <PriceOf price="" />
                  <SalePrice price={`Por ${maskPrice(item.price)}`} />
                </aside>
              </article>
            </a>
          </li>
        ))}
      </ul> */}
    </>
  );
}
