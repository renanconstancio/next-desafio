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
    <ul className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {listItems?.map((item, k) => (
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

              <StarRating ratingStar={item.rating} />

              <H3Title title={item.title} />

              <PriceOf price="" />

              <SalePrice price={`Por ${maskPrice(item.price)}`} />
            </article>
          </a>
        </li>
      ))}
    </ul>
  );
}
