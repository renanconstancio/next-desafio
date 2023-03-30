"use client";
import { maskPrice } from "@utils/maskPrice";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

import type { Products } from "../../types/products";

type ListItems = {
  listItems: Products[];
};

export function GridProducts({ listItems }: ListItems) {
  // const route = useRouter();

  // const [orderState, setOrderState] = useState("");
  // const sorting = (order: "asc" | "desc", field?: string) => {
  //   setOrderState(orderState !== order ? "asc" : "desc");
  //   route.push(`?order[category]=${orderState}`);
  //   return;
  // };

  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="p-3 border-b border-slate-300 text-start">Titulo</th>
          <th
            className="p-3 border-b border-slate-300 text-center"
            // onClick={() => sorting("desc", "category")}
          >
            Categoria
          </th>
          <th className="p-3 border-b border-slate-300 text-center">Preço</th>
        </tr>
      </thead>
      <tbody>
        {listItems?.map((item, k) => (
          <tr key={k}>
            <td className="p-3 border-b border-slate-300">{item.title}</td>
            <td className="p-3 border-b border-slate-300 text-center w-auto">
              {item.category}
            </td>
            <td className="p-3 border-b border-slate-300 text-center w-auto whitespace-nowrap">
              {maskPrice(item.price)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
