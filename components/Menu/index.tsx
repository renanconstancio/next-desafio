"use client";
import { useState } from "react";

import IconSearch from "/public/icons-svg/search.svg";

export function Menu() {
  const [onFocus, setOnFocus] = useState(false);

  function handleSearch() {
    return;
  }

  return (
    <>
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
    </>
  );
}
