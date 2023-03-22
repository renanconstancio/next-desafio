"use client";
import { useState } from "react";

import Image from "next/image";

import logoImage from "/public/logo.png";
import IconHamburguer from "/public/icons-svg/bars.svg";
import IconSearch from "/public/icons-svg/search.svg";
import IconUser from "/public/icons-svg/user-solid.svg";
import IconWishlist from "/public/icons-svg/heart-solid.svg";
import IconCart from "/public/icons-svg/cart-shopping-solid.svg";

import type { Setting } from "../../types/setting";

export function Header({ setting }: { setting: Setting }) {
  const [onFocus, setOnFocus] = useState(false);

  function handleSearch() {
    return;
  }

  return (
    <header className="h-[120px] md:h-auto bg-white">
      <article className="bg-gray-50 font-100 text-sm px-4 py-2 md:px-0">
        <section className="container flex justify-between items-center flex-wrap">
          {setting.phones[0].title} {setting.phones[0].number}
        </section>
      </article>
      <section className="container flex justify-between items-center flex-wrap fixed md:relative px-4 py-2 md:px-0 top-0 left-0 right-0 bg-white">
        <IconHamburguer className="icon-svg-animated " />

        <aside className="basis-full order-1 mt-2 md:mt-0 md:order-none md:basis-1/4">
          <form action="" className={`form-search ${onFocus && "active"} px-4`}>
            <input
              type="search"
              name="search"
              onFocus={() => setOnFocus(!onFocus)}
              onBlur={() => setOnFocus(!onFocus)}
            />
            <IconSearch
              className={`${onFocus ? "fill-red-300" : "fill-red-600"} w-10`}
              onClick={handleSearch}
            />
          </form>
        </aside>
        <aside className="basis-1/4 text-center">
          <Image
            alt="Logo"
            src={logoImage}
            className="w-full max-w-[245px] inline-block"
          />
        </aside>
        <aside className="basis-1/4 flex justify-evenly items-center">
          <IconUser className="icon-svg-animated" />
          <IconWishlist className="icon-svg-animated" />
          <IconCart className="icon-svg-animated" />
        </aside>
      </section>
    </header>
  );
}
