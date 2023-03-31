import { StarRating } from "@components/StarRating";
import { limitString } from "@utils/limitString";
import { maskPrice } from "@utils/maskPrice";

import Image from "next/image";
import dinamic from "next/dynamic";

const BannerHome = dinamic(() => import("./components/banner-home"), {
  ssr: false,
});

type ProdutctsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function PageHome() {
  const products: ProdutctsType[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
  ).then((res) => res.json());

  return (
    <div>
      <BannerHome />
      <div className="container px-4 mt-14 sm:py-8 sm:px-0">
        <ul className="gap-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {products.map((item) => (
            <li className="bg-white p-4" key={item.id}>
              <div className="min-h-40 relative">
                <Image
                  alt={item.title}
                  src={item.image}
                  width={320}
                  height={320}
                  className="object-cover w-full"
                />
              </div>
              <StarRating ratingStar={item.rating.rate} />
              <h4 className="font-overpass text-center text-sm">
                {limitString(item.title, 14)}
              </h4>
              <span className="block font-semibold text-lg text-center">
                {maskPrice(item.price)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
